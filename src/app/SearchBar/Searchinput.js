export default function SearchInput() {
    return (
        <div className="flex justify-center items-center">
            <input
                type="text"
                placeholder="Name, Bike, Ort"
                className="p-2 focus:outline-none w-11/12"
            />
        </div>
    );
}