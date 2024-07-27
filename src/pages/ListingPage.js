import { useState } from "react";
import Button from "../components/Button";
import FilterSidebar from "../components/FilterSidebar";
import ProductListing from "../components/ProductListing";
import { FiFilter } from "react-icons/fi";
import { GoSortAsc, GoSortDesc } from "react-icons/go";
import { useUrl } from "crossroad";

const ListingPage = ({ randomCategory }) => {
  const [url] = useUrl();
  const categories = ["Women", "Men", "Kids", "Sale"];
  const categoryName = randomCategory
    ? categories[Math.floor(Math.random() * categories.length)]
    : (url.path.split("/")[1]) + " " + (url.path.split("/")[2] || "");
  const [sort, setSort] = useState(true);
  const [showFilter, setShowFilter] = useState(true);
  return (
    <>
      <div className="text-3xl tracking-wider uppercase mb-3 mt-10">
        {categoryName}
      </div>
      <div className="flex justify-between w-full mt-7">
        <Button isActive={showFilter} onClick={() => setShowFilter(!showFilter)} ><FiFilter /> {showFilter ? 'HIDE' : 'SHOW'} Filters</Button>
        <Button onClick={() => setSort((prev) => !prev)}>{sort ? <GoSortAsc /> : <GoSortDesc />} Sort</Button>
      </div>
      <div className="flex items-start my-7">
        <FilterSidebar showFilter={showFilter} />
        <ProductListing showFilter={showFilter} />
      </div>
    </>
  );
}
export default ListingPage;
