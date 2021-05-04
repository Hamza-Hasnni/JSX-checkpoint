import React from "react"
import "./App.css";
import Image from "./imageInSrc.jpg"
import "./style.css"
import Video from "./video.mp4"

function App() {
  return (
    <>
    <div style={{border:"solid 1px black",maxWidth:"100vw"}} className="container">

    <h1 className={"title red"}>Hamza Hasni</h1>
   
    <br />
    <div className="myImage">
    <img src={Image} alt="web deve" />
   
    <br />
   
    <img src="/imageInPublic.jpg" alt="web deve" className="web" />
    </div>
   </div>
   
   <video width="320" height="240" controls>
   
    <source src={Video} type="video/mp4" />
   
   </video>
   </>
  );
}

export default App;
