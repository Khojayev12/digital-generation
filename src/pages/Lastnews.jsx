import "../assets/styles/home.css";
import NewsWidget from "../components/newsWidget";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Lastnews(props) {
  const [son, setSon] = useState(true);
  const [counter, setCounter] = useState([]);

  if (son) {
    props.newsData.map((post) => {
      if (props.type === post.type || props.type === "all") {
        setCounter((counter) => [...counter, post]);
      }
      return 0;
    });
    setSon(false);
  }

  return (
    <div className="last-sec">
      <div className="last-title" id={props.id}>
        <span>{props.mainTitle}</span>
        <Link to={props.go} className="my-link">
          <button className="latest-more">
            Ko'proq <AiOutlineRight className="more-icon" />
          </button>
        </Link>
      </div>
      {counter.slice(0, 6).map((item) => {
        return (
          <NewsWidget
            id={item.id}
            key={item.id}
            photo={item.photos[0]}
            title={item.title}
            text={item.text}
            watches={item.watches}
          />
        );
      })}
    </div>
  );
}
