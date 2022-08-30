import "../assets/styles/home.css";
import News from "../news";
import Lastnews from "./Lastnews";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {" "}
      <div className="home-page load-anim">
        <Lastnews
          mainTitle="So'nggi yangiliklar"
          id="latest"
          newsData={News}
          type="all"
          posts={6}
          go="/all-news"
        />
        <Lastnews
          mainTitle="Uchrashuvlar"
          id="meeting"
          newsData={News}
          type="meetings"
          posts={6}
          go="/meetings"
        />
        <Lastnews
          mainTitle="IT oromgohga oid yangiliklar"
          id="oromgoh"
          newsData={News}
          type="oromgoh"
          posts={6}
          go="/oromgoh"
        />
        <Lastnews
          mainTitle="OAV biz haqimizda"
          id="oav"
          newsData={News}
          type="oav"
          posts={6}
          go="/oav"
        />
      </div>
      <Footer />
    </>
  );
}
