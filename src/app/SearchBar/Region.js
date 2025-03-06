export default function Region() {
    return (
        <div className="flex justify-center align-center mr-4 ml-4">
            <select>
                <option value="all">Alle Bundesländer</option>
                <option value="north">Wien</option>
                <option value="south">Niederösterreich</option>
                <option value="east">Steiermark</option>
                <option value="west">Burgenland</option>
            </select>
        </div>
    );
}