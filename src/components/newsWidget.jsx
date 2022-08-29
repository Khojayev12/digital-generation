import { IoEye } from "react-icons/io5";

export default function newsWidget(props) {
  return (
    <div className="news-widget" key={props.id}>
      <div className="card-img">
        <img src={props.photo} alt="" className="card-img-tag" />
      </div>
      <div className="card-title">
        {props.title.length > 55
          ? props.title.slice(0, 55).toString() + "..."
          : props.title}
      </div>
      <div className="card-text">
        {props.text.slice(0, 50).toString() + "..."}
      </div>
      <div className="card-extra">
        <div className="card-watch">
          <IoEye className="card-eye" /> {props.watches}
        </div>
        <button className="card-more"> Batafsil </button>
      </div>
    </div>
  );
}
