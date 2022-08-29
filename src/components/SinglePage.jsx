import { useParams } from "react-router-dom";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useState } from "react";
import { IoEye } from "react-icons/io5";

export default function SinglePage(props) {
  const [picnum, setPicNum] = useState(0);

  const toLeft = () => {
    if (picnum > 0) {
      setPicNum(picnum - 1);
    }
  };

  const toRight = () => {
    if (picnum < props.data.photos.length - 1) {
      setPicNum(picnum + 1);
    }
  };
  return (
    <div className="single-page-news">
      <div className="single-image">
        <button className="img-left" onClick={toLeft}>
          <AiOutlineLeft className="img-left-icon" />
        </button>

        <img src={props.data.photos[picnum]} alt="" className="single-img" />

        <button className="img-right" onClick={toRight}>
          <AiOutlineRight className="img-right-icon" />
        </button>
      </div>
      <div className="single-title">{props.data.title}</div>
      <div className="single-extra">
        Sana: {props.data.date}{" "}
        <IoEye className="single-watch" /> {props.data.watches}{" "}
      </div>
      <div className="single-text">{props.data.text}</div>
    </div>
  );
}
