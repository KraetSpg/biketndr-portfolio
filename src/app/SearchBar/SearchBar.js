import BikeCategory from "./Bikecategory";
import HorizontalDivider from "./HorizontalDivider";
import Region from "./Region";
import SearchInput from "./Searchinput";
import SearchButton from "./Searchbutton";

export default function SearchBar() {
    return (
        <div className="shadow-md flex justify-between border-gray-100 border-2 rounded-4xl w-11/12 lg:w-1/2">
            <SearchInput />
            <HorizontalDivider />
            <div className="flex flex-col md:flex-row">
            <Region />
            <HorizontalDivider />
            <BikeCategory />
            </div>
            <HorizontalDivider />
            <SearchButton />
        </div>
    );
}