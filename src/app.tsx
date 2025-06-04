import { HashRouter, Route } from "@solidjs/router";
import { lazy } from "solid-js";
const Services = lazy(() => import("./pages/services"));
const Home = lazy(() => import("./pages/index"));

const App = () => {
  return (
    <HashRouter>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
    </HashRouter>
  );
};

export default App;
