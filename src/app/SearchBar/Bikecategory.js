export default function BikeCategory() {
    return (
        <div className="flex justify-center align-center lg:mr-4 lg:ml-4">
            <select>
                <option value="all">Alle Bikes</option>
                <option value="north">125cc</option>
                <option value="south">bis 500cc</option>
                <option value="east">bis 750cc</option>
                <option value="west">ab 750cc</option>
            </select>
        </div>
    );
}