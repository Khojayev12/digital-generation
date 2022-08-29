import "../assets/styles/allnews.css";
import "../assets/styles/home.css";
import News from "../news";
import NewsWidget from "../components/newsWidget";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";

export default function AllNews() {
  return (
    <div className="all-news-page">
      <div className="last-title" style={{ marginTop: "20px" }}>
        <span> Barcha yangiliklar </span>
        <Link to="/" className="my-link">
          <button className="latest-more">
            Ortga <AiOutlineLeft className="more-icon" />
          </button>
        </Link>
      </div>
      {News.map((item) => {
        return (
          <NewsWidget
            id={item.id}
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
