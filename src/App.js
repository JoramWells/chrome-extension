import "./App.css";
// import { vocab } from "./vocabList";
import axios from "axios";
import { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect'

function App() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    axios
      .get("https://allquotes.herokuapp.com/quotes/rand")
      .then((response) => {
        setData(response.data);
        localStorage.setItem('data', JSON.stringify(response.data))
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(JSON.parse(localStorage.getItem('data'))['author'])

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);
  return (
    <div className="banner" >
      {/* <div style={{color:"white"}} className="code">
       <pre id="typewriter">
{`         #include stdio.h
            int main(){
              printf("Hello world!!")
            }
`}
         
       </pre>
      </div> */}
      <div className="container">

        
        <Typewriter
      onInit = {(typewriter)=>{
        typewriter.typeString(JSON.parse(localStorage.getItem('data'))['text']).start()
      }}
       />
        {/* <p>{JSON.parse(localStorage.getItem('data'))['text']}</p> */}
        <div style={{ color: "white", fontSize:"0.95rem" }}>
          ~ [<i>{JSON.parse(localStorage.getItem('data'))['author'] ? JSON.parse(localStorage.getItem('data'))['author']: 'Anonymous'}</i>]
        </div>
      </div>
    </div>
  );
}

export default App;
