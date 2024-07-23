import Header from "./components/Header";
import Router, { Switch, Route } from "crossroad";
import Listing from "./pages/Listing";

const Profile = ({ id }) => <main>Hello {id.toUpperCase()}</main>;

const App = () => {
  return (
    <Router >
      <div className="px-10">
        <Header />
        <Switch>
          <Route path="/" component={Listing} />
          <Route path="/:id" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

