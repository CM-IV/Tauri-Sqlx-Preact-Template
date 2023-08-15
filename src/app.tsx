import { Route, Switch, Router } from "wouter-preact"
import { useLocationProperty, navigate } from "wouter-preact/use-location"
import Home from "./pages/index"
import { NotFound } from "./pages/_404"

const App = () => {

  const hashLocation = () => {
    return window.location.hash.replace(/^#/, "") || "/"
  };

  const hashNavigate = (to: string) => navigate("#" + to)

  const useHashLocation = () => {

    const location = useLocationProperty(hashLocation);
    return [location, hashNavigate];

  };

  return (
    /*@ts-ignore */
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  )
}

export default App