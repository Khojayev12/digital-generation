import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useState } from "react";
import { IoEye } from "react-icons/io5";
import Footer from "./Footer";

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
    <>
      <div className="single-page-news load-anim">
        <div className="single-image">
          {picnum === 0 ? (
            <></>
          ) : (
            <button className="img-left" onClick={toLeft}>
              <AiOutlineLeft className="img-left-icon" />
            </button>
          )}

          <img src={props.data.photos[picnum]} alt="" className="single-img" />

          {picnum === props.data.photos.length - 1 ? (
            <></>
          ) : (
            <button className="img-right" onClick={toRight}>
              <AiOutlineRight className="img-right-icon" />
            </button>
          )}
        </div>

        <div className="single-title">{props.data.title}</div>
        <div className="single-extra">
          Sana: {props.data.date} <IoEye className="single-watch" />{" "}
          {props.data.watches}{" "}
        </div>
        <div className="single-text">{props.data.text}</div>
        <Footer />
      </div>

      <div className="mob-single-page-news load-anim">
        <div className="mob-single-imgage">
          <img
            src={props.data.photos[picnum]}
            alt=""
            className="mob-single-img"
            width="90%"
          />
          <div className="img-buttons">
            {picnum === 0 ? (
              <button className="mob-img-left">
                <AiOutlineLeft className="img-left-icon" />
              </button>
            ) : (
              <button className="mob-img-left" onClick={toLeft}>
                <AiOutlineLeft className="img-left-icon" />
              </button>
            )}

            {picnum === props.data.photos.length - 1 ? (
              <button className="mob-img-right">
                <AiOutlineRight className="img-right-icon" />
              </button>
            ) : (
              <button className="mob-img-right" onClick={toRight}>
                <AiOutlineRight className="img-right-icon" />
              </button>
            )}
          </div>
        </div>
        <div className="mob-single-title">{props.data.title}</div>
        <div className="single-extra">
          Sana: {props.data.date} <IoEye className="single-watch" />
          {props.data.watches}{" "}
        </div>
        <div className="single-text">{props.data.text}</div>
        <Footer />
      </div>
    </>
  );
}
