import { FiArrowRight, FiChevronRight, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

const Header = () => {
  const categories = [
    "Women",
    "Men",
    "Kids",
    "Brands",
  ];
  const breadcrumbs = [
    "Home",
    "Women",
    "Tops",
  ];
  return (
    <header className="sticky top-0 bg-white ">
      <nav className="flex justify-between items-center py-5 font-sans text-lg uppercase font-normal border-b ">
        <div className="text-center">
          My Store
        </div>

        <ul className="flex space-x-5">
          {categories.map((category) => (
            <li key={category}>
              <a href={`/${category}`} className="text-gray-600 hover:underline py-2">
                {category}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <FiSearch className="inline-block text-gray-600 text-2xl ml-3" />
          <FiUser className="inline-block text-gray-600 text-2xl ml-3" />
          <FiShoppingCart className="inline-block text-gray-600 text-2xl ml-3" />
        </div>
      </nav>
      <div className="my-2 flex items-center text-sm">
        {breadcrumbs.map((breadcrumb, index) => (
          <span key={breadcrumb}>
            <a href="#" className="text-gray-400 hover:underline">
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
}

export default Header;
