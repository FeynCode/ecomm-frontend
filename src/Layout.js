import Header from "./components/Header";
import Router, { Switch, Route } from "crossroad";
import Home from "./pages/Home";

const Profile = ({ id }) => <main>Hello {id.toUpperCase()}</main>;

const App = () => {
  return (
    <Router >
      <div className="">
        <Header />
        <div className="px-10">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/:id" component={Profile} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

