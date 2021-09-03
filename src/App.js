import "./App.css";
// import { vocab } from "./vocabList";
import axios from "axios";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { HeartIcon, SunIcon } from "@heroicons/react/solid";

function App() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await axios
      .get("https://allquotes.herokuapp.com/quotes/rand")
      .then((response) => {
        setData(response.data);
        localStorage.setItem("data", JSON.stringify(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);
  return (
    <>
      <div className="banner">
        <div className="container">
          {/* <div >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(`<h1 style="color:#50c878" >Welcome back Sir,</h1>`)
                .start();
            }}
          />
        </div> */}
          <h1 style={{ color: "#50c878" }}>
            <u>gLad tO hAvE yoU sir</u>
            <SunIcon style={{ width: "1.5rem", color: "#fff44f" }} />
          </h1>
          <p>{data["text"]}</p>
          <div style={{ color: "white", fontSize: "0.9rem", margin: "10px" }}>
            ~ [<i>{data["author"] ? data["author"] : "Anonymous"}</i>]
            <div>
              <HeartIcon style={{ width: "1.5rem", color: "#f88379" }} />
            </div>
          </div>
        </div>
      <footer className="footer">
       Copyright @2021
      </footer>
      </div>

    </>
  );
}

export default App;
