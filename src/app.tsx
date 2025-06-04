import { Route, Switch, Router } from "wouter-preact";
import { useHashLocation } from "wouter-preact/use-hash-location";
import Home from "./pages/index";
import { NotFound } from "./pages/_404";

const App = () => {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
