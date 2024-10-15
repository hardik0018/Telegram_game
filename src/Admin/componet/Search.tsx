import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Search = ({ search, setSearch, to }) => {
  return (
    <div className="flex relative items-center my-2.5">
      <div className="w-[60%]">
        <div className="flex items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full md:w-[70%]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <IoMdSearch />
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              required=""
            />
          </div>
        </div>
      </div>
      {to && (
        <Link
          to={to}
          className="text-white absolute right-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2 text-center me-2 "
        >
          Add +
        </Link>
      )}
    </div>
  );
};

export default Search;
