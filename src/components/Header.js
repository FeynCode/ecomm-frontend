import { useEffect, useState } from "react";
import { FiArrowRight, FiSearch, FiShoppingCart, FiUser, FiX } from "react-icons/fi";

const Header = () => {
  const categories = ["Women", "Men", "Kids", "Sale"];
  const breadcrumbs = ["Home", "Women", "Tops"];
  const [search, setSearch] = useState({
    query: "",
    isHidden: true,
  });

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
    <header className="sticky top-0 bg-white  w-screen px-10 ">
      <nav className="flex justify-between items-center py-5 font-sans text-lg uppercase font-normal border-b min-h-[90px] relative  ">
        <div className="text-center">My Store</div>

        <ul className="flex space-x-5 absolute " style={{
          left: "50%",
          transform: "translateX(-50%)",

        }}>
          {categories.map((category) => (
            <li key={category}>
              <a
                href={`/${category}`}
                className="text-gray-600 hover:underline py-2"
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center w-[400px] justify-end">
          <div className="min-w-[300px] max-w-[300px] rounded relative flex p-px items-center  border rounded" id="search-box">
            <FiSearch className="w-[30px] inline-block text-gray-600 text-xl mx-2 cursor-pointer " />
            <input
              type="text"
              placeholder="Search"
              className="w-[220px] h-full  border-l border-slate-300 text-base font-extralight p-2 outline-none "
            />
            <FiX className="inline-block text-gray-600 text-2xl mx-2 cursor-pointer " onClick={() => setSearch({ ...search, isHidden: !search.isHidden })} />
          </div>

          <FiSearch className="inline-block text-gray-600 text-2xl ml-3 hidden cursor-pointer " id="search-icon" onClick={() => setSearch({ ...search, isHidden: !search.isHidden })} />
          <FiUser className="inline-block text-gray-600 text-2xl ml-3 cursor-pointer " />
          <FiShoppingCart className="inline-block text-gray-600 text-2xl ml-3 cursor-pointer " />
        </div>
      </nav>
      <div className="my-2 flex items-center text-sm">
        {breadcrumbs.map((breadcrumb, index) => (
          <span key={breadcrumb}>
            <a href="/" className="text-gray-400 hover:underline">
              {breadcrumb}
            </a>
            {index < breadcrumbs.length - 1 && (
              <FiArrowRight className="inline-block text-gray-400 text- mx-2" />
            )}
          </span>
        ))}
      </div>
    </header>
  );
};

export default Header;
