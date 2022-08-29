import "./App.css";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import AllNews from "./pages/AllNews";
import Oromgoh from "./pages/Oromgoh";
import OAV from "./pages/OAV";
import Meetings from "./pages/Meetings";
import News from "./news"
import SinglePage from "./components/SinglePage";

function BlogPost(props) {
  let { slug } = useParams();
  return <SinglePage data={props.data} />;
}

//  font-family: "Montserrat",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
function App() {
  
  return (

    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          {News.map((post)=>{
              return <Route path={"/post/" + post.id.toString()} key={post.id} element={<SinglePage data={post} />} />
            })}
          <Route path="/" element={<Home/>} />
          <Route path="/all-news" element={<AllNews/>} />
          <Route path="/oromgoh" element={<Oromgoh/>} />
          <Route path="/meetings" element={<Meetings/>} />
          <Route path="/oav" element={<OAV/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
