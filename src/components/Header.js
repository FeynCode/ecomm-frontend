import { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiX,
} from "react-icons/fi";
import { useUrl } from "crossroad";
import { useSelector } from "react-redux";
import { store } from "../utils/redux-store/store";
import { toggleCart } from "../utils/redux-store/slices/cart";

const Header = () => {
  // const cartCount = useSelector((state) => state.cart.cartItems.length);
  const [showSubcategories, setShowSubcategories] = useState({
    show: false,
    name: "",
    categories: [],
  });
  const [categories, setCategories] = useState([
    {
      name: "Women",
      subcategories: ["Tops", "Bottoms", "Dresses", "Sweatshirts"],
      isActive: false,
    },
    {
      name: "Men",
      subcategories: ["Tops", "Bottoms", "Sweatshirts"],
      isActive: false,
    },
    {
      name: "Kids",
      subcategories: ["Tops", "Bottoms", "Dresses", "Sweatshirts", "Footwear"],
      isActive: false,
    },
    {
      name: "Sale",
    },
  ]);
  const [search, setSearch] = useState({
    query: "",
    isHidden: true,
  });
  const [url] = useUrl();
  const breadcrumbs = url.path.split("/");

  useEffect(() => {
    const searchBox = document.getElementById("search-box");
    const searchIcon = document.getElementById("search-icon");

    if (search.isHidden) {
      searchIcon.classList.remove("hidden");
      searchBox.classList.add("hidden");
    } else {
      searchIcon.classList.add("hidden");
      searchBox.classList.remove("hidden");
    }
  }, [search]);

  return (
    <>
      <header
        className="bg-white  w-screen  sticky top-0 shadow-lg"
        onMouseLeave={() => {
          setShowSubcategories({ show: false, categories: [] });
          document.getElementById("sub-cat").style.height = "0";
          document.getElementById("sub-cat").style.visibility = "hidden";
          document.getElementById("nav").classList.remove("border-b");
          document.getElementById("sub-cat").classList.remove("py-5");
        }}
      >
        <nav
          className="flex justify-between items-center py-5 font-sans text-lg uppercase font-normal min-h-[90px]  px-10 sticky top-0 "
          id="nav"
        >
          <a href="/" className="text-center">
            My Store
          </a>

          <ul
            className="flex space-x-5 absolute "
            style={{
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {categories.map((category) => (
              <li
                key={category.name}
                onMouseEnter={() => {
                  if (category?.subcategories?.length > 0) {
                    setCategories(
                      categories.map((c) =>
                        c.name === category.name ? { ...c, isActive: true } : c,
                      ),
                    );
                    setShowSubcategories({
                      show: true,
                      categories: category.subcategories,
                      name: category.name,
                    });
                    document.getElementById("sub-cat").style.height = "auto";
                    document.getElementById("sub-cat").style.visibility =
                      "visible";
                    document.getElementById("nav").classList.add("border-b");
                    document.getElementById("sub-cat").classList.add("py-5");
                  } else {
                    setShowSubcategories({ show: false, categories: [] });
                    document.getElementById("sub-cat").style.height = "0";
                    document.getElementById("sub-cat").style.visibility =
                      "hidden";
                    document.getElementById("nav").classList.remove("border-b");
                    document.getElementById("sub-cat").classList.remove("py-5");
                  }
                }}
              >
                <a
                  href={`/${category.name.toLowerCase()}`}
                  className="text-gray-600 hover:underline uppercase"
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center w-[400px] justify-end">
            <div
              className="min-w-[300px] max-w-[300px] rounded relative flex p-px items-center  border rounded"
              id="search-box"
              style={{
                transition: "all .3s ease-in",
              }}
            >
              <FiSearch className="w-[30px] inline-block text-gray-600 text-xl mx-2 cursor-pointer " />
              <input
                type="text"
                placeholder="Search"
                className="w-[220px] h-full  border-l border-slate-300 text-base font-extralight p-2 outline-none "
              />
              <FiX
                className="inline-block text-gray-600 text-2xl mx-2 cursor-pointer "
                onClick={() =>
                  setSearch({ ...search, isHidden: !search.isHidden })
                }
              />
            </div>

            <FiSearch
              className="inline-block text-gray-600 text-2xl ml-3 hidden cursor-pointer "
              id="search-icon"
              onClick={() =>
                setSearch({ ...search, isHidden: !search.isHidden })
              }
            />
            <FiUser className="inline-block text-gray-600 text-2xl ml-3 cursor-pointer " />
            <FiShoppingCart
              className="inline-block text-gray-600 text-2xl ml-3 cursor-pointer "
              onClick={() => store.dispatch(toggleCart())}
            />
          </div>
        </nav>
        <div
          id="sub-cat"
          className="ease-in h-[0]"
          style={{
            transition: "all .3s ease-in",
          }}
        >
          <ul className="flex justify-center space-x-5 bg-white uppercase">
            {showSubcategories.categories?.map((subcategory) => (
              <li key={subcategory}>
                <a
                  href={`/${showSubcategories.name.toLowerCase()}/${subcategory.toLowerCase()}`}
                  className="text-gray-600 hover:underline py-2"
                >
                  {subcategory}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
      {url.path !== "/" && (
        <div className="my-3 flex items-center text-sm px-10 py-5 ">
          {breadcrumbs.map((breadcrumb, index) => (
            <span key={breadcrumb}>
              <a
                href={
                  breadcrumb === ""
                    ? "/"
                    : index > 1
                      ? `/${breadcrumbs[index - 1]}/${breadcrumb}`
                      : `/${breadcrumb}`
                }
                className="text-gray-400 hover:underline"
              >
                {breadcrumb === ""
                  ? "Home"
                  : breadcrumb.charAt(0).toUpperCase() + breadcrumb.slice(1)}
              </a>
              {index < breadcrumbs.length - 1 && (
                <FiArrowRight className="inline-block text-gray-400 text- mx-2" />
              )}
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
