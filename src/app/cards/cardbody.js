export default function CardBody(props) {
    return(
        <div className="w-full h-12">
            <p className="text-gray-500 text-sm">{props.region}</p>
            <p className="text-gray-500 text-sm">{props.bike}</p>
            <p className="text-base">{props.level}</p>
        </div>
    );
}