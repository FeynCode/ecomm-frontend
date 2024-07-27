import Header from "./components/Header";
import Router, { Switch, Route } from "crossroad";
import Home from "./pages/Home";
import ListingPage from "./pages/ListingPage";


const App = () => {
  return (
    <Router >
      <div className="select-none">
        <Header />
        <div className="px-10">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/:category" component={ListingPage} />
            <Route path="/:category/:subcategory" component={ListingPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

