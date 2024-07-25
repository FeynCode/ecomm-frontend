import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useState } from "react";

const FilterSidebar = ({ showFilter }) => {
  const [filterOptions, setFilterOptions] = useState([
    { name: 'Size', options: ['XS', 'S', 'M', 'L', 'XL'], type: 'checkbox', isHidden: false },
    { name: 'Color', options: ['Red', 'Sky Blue', 'Cyan', 'Beige'], type: 'checkbox', isHidden: false },
    { name: 'Price', type: 'range', text: 'Selected Price Range', min: 0, max: 2000, step: 100, isHidden: false },
  ]);
  return (
    <div className={`flex-[1] font-sans font-light mr-5 ${!showFilter && 'hidden'}`}>
      <div className="uppercase text-2xl">
        Filters
      </div>
      {filterOptions.map((filter, index) => (
        <div key={index} className="my-5">
          <div className="text-xl flex items-center justify-between font-normal" id={filter.name} onClick={() => {
            setFilterOptions(prev => prev.map((item) => item.name === filter.name ? { ...item, isHidden: !item.isHidden } : item));
            document.getElementById(filter.name)?.nextElementSibling?.classList?.toggle('hidden');
          }}>{filter.name} {!filter.isHidden ? <FiChevronUp /> : <FiChevronDown />}</div>
          <div className="p-3 pr-0 text-lg">
            {filter.type === 'checkbox' && filter.options.map((option, index) => (
              <div key={index} className="flex items-center justify-between">
                <label className="flex items-center gap-2">{filter.name === "Color" && <div style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: option.split(" ").join("").toLowerCase(),
                  borderRadius: '50%',
                  border: '1px solid #000'
                }} />}{option} {filter.type === 'checkbox' && <span className="text-xs text-slate-500">(<span className="text-base">{index * 12}</span>) </span>}</label>
                {filter.type === 'checkbox' && <input type="checkbox" />}
              </div>
            ))}

            {filter.type === 'range' && <input type="range" min={0} max="100" className="range" />}
          </div>

          <div className="border-b border-gray-300 my-2"></div>
        </div>
      ))}
    </div>
  );
}

export default FilterSidebar;
