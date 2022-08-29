import "../assets/styles/allnews.css";
import "../assets/styles/home.css";
import News from "../news";
import NewsWidget from "../components/newsWidget";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import { useState } from "react";

export default function Oromgoh() {
  const [son, setSon] = useState(true);
  const [counter, setCounter] = useState([]);

  if (son) {
    console.log("print");
    News.map((post) => {
      if ("oromgoh" === post.type) {
        console.log(post.id);
        setCounter((counter) => [...counter, post]);
      }
    });
    setSon(false);
  }
  return (
    <div className="all-news-page">
      <div className="last-title" style={{ marginTop: "20px" }}>
        <span> IT Oromgohda oid yangiliklar </span>
        <Link to="/" className="my-link">
          <button className="latest-more">
            Ortga <AiOutlineLeft className="more-icon-back" />
          </button>
        </Link>
      </div>
      {counter.map((item) => {
        return (
          <NewsWidget
            photo={item.photos[0]}
            key={item.id}
            title={item.title}
            text={item.text}
            watches={item.watches}
          />
        );
      })}
    </div>
  );
}
