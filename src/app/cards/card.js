import CardBody from "./cardbody";
import CardImg from "./cardimg";
import CardTitle from "./cardtitle";
import LikeIcon from "./likeIcon";



export default function Card(props) {
    return(
        <div className="h-96 w-72 shrink-0  border-gray-200 rounded-lg p-4 m-4">
            <CardImg src={props.src} />
            <div className="flex justify-between items-center pt-1 w-72">
                <CardTitle name={props.name} />
                <LikeIcon />
            </div>
            <CardBody region={props.region} bike={props.bike} level={props.level}></CardBody>
        </div>
    );
}