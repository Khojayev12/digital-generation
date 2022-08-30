import "../assets/styles/allnews.css";
import "../assets/styles/home.css";
import News from "../news";
import NewsWidget from "../components/newsWidget";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import { useState } from "react";
import Footer from "../components/Footer";

export default function OAV() {
  const [son, setSon] = useState(true);
  const [counter, setCounter] = useState([]);

  if (son) {
    News.map((post) => {
      if ("oav" === post.type) {
        console.log(post.id);
        setCounter((counter) => [...counter, post]);
      }
      return 0;
    });
    setSon(false);
  }
  return (<>
    <div className="all-news-page load-anim">
      <div className="last-title" style={{ marginTop: "20px" }}>
        <span>OAV biz haqimizda </span>
        <Link to="/" className="my-link">
          <button className="latest-more">
            Ortga <AiOutlineLeft className="more-icon-back" />
          </button>
        </Link>
      </div>
      {counter.slice(0, 6).map((item) => {
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
    </div><Footer /></>
  );
}
