import { Route, Switch } from "wouter";
import Layout from "./components/Layout";
import NotFound from "./pages/404";
import Home from "./pages/Home";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/termsandconditions" component={TermsAndConditions} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default App;
