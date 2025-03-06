export default function CardImg(props) {
    return (
        <div className="flex justify-center w-72 pointer-events-none">
        <img src={props.src} alt="bike" className="w-72 h-60 object-cover rounded-sm" />
        </div>
    );
}
