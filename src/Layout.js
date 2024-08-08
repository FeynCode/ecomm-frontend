import Header from "./components/Header";
import Router, { Switch, Route } from "crossroad";
import Home from "./pages/Home";
import ListingPage from "./pages/ListingPage";
import CartSideBar from "./components/CartSidebar";
import { useState } from "react";
import Product from "./pages/Product";

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <Router>
      <div className="select-none overflow-x-hidden">
        <Header isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        <CartSideBar
          cart={cart}
          setCart={setCart}
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
        />
        <div className="px-10">
          <Switch>
            <Route
              path="/"
              component={() => <Home cart={cart} setCart={setCart} />}
            />
            <Route path="/product/:product_id" component={Product} />
            <Route
              path="/:category"
              component={() => <ListingPage cart={cart} setCart={setCart} />}
            />
            <Route
              path="/:category/:subcategory"
              component={() => <ListingPage cart={cart} setCart={setCart} />}
            />
          </Switch>
        </div>
        <CartSideBar
          cart={cart}
          setCart={setCart}
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
        />
      </div>
    </Router>
  );
};

export default App;
