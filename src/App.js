import "./App.css";
// import { vocab } from "./vocabList";
import axios from "axios";
import { useEffect, useState } from "react";
// import Typewriter from "typewriter-effect";
import { ChevronLeftIcon, ChevronRightIcon, HeartIcon } from "@heroicons/react/solid";

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

  // Fetch next data
  const fetchNext = async () => {
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
  const fetchPrev = () => {
    // setData(response.data);
    // localStorage.setItem("data", JSON.stringify(response.data));
    setData()
    console.log(data)

  };

  useEffect(() => {
    fetchData();
    return () => { };
  }, []);
  return (
    <>
      <div className="banner">
        <div className="chevron_div">
          <ChevronLeftIcon className="chevron" onClick={()=>fetchPrev()} />
        </div>
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
          <div>
            <h1 style={{color:"white"}}>bramuel</h1>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
              <div>{data ?
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div>
                    {data["text"]}
                    <div style={{ color: "white", fontSize: "0.9rem", margin: "10px" }}>
                      ~ [<i>{data["author"] ? data["author"] : "Anonymous"}</i>]
                      <div>
                        <HeartIcon style={{ width: "1.5rem", color: "#f88379" }} />
                      </div>
                    </div>
                  </div>
                </div>
                : <div>
                  <div className="loader"></div>
                  <div className="loader"></div>
                  <div className="loader"></div>
                  <div className="loader"></div>
                  <div className="loader"></div>
                  {/* <div style={{ fontSize: "1rem" }}>Just a second</div> */}
                </div>}</div>
            </div>


          </div>


        </div>
        <div className="chevron_div">
          <ChevronRightIcon className="chevron" onClick={fetchNext}/>
        </div>
        {/* <footer className="footer">
          Copyright @2021
        </footer> */}
      </div>

    </>
  );
}

export default App;
