import { FiFilter } from "react-icons/fi";
import { GoSortAsc, GoSortDesc } from "react-icons/go";
import Button from "../components/Button";
import { useState } from "react"
import FilterSidebar from "../components/FilterSidebar";
import ProductListing from "../components/ProductListing"

const Home = () => {
  const [sort, setSort] = useState(true);
  const [showFilter, setShowFilter] = useState(true);
  return (
    <div className="my-10">
      <div className="">
        <img src="https://ik.imagekit.io/adityaportfolio/Ecomm/hero_HFAWp0lrE.jpg?updatedAt=1722027897264" alt="Banner" className="w-full rounded-lg" />
      </div>
      <div className="text-3xl tracking-wider uppercase mb-3 mt-10">
        Category Name
      </div>
      <div className="flex justify-between w-full mt-7">
        <Button isActive={showFilter} onClick={() => setShowFilter(prev => !prev)} ><FiFilter /> {showFilter ? 'HIDE' : 'SHOW'} Filters</Button>
        <Button onClick={() => setSort((prev) => !prev)}>{sort ? <GoSortAsc /> : <GoSortDesc />} Sort</Button>
      </div>
      <div className="flex items-start my-7">
        <FilterSidebar showFilter={showFilter} />
        <ProductListing />
      </div>
    </div >
  );
}

export default Home;

