import "./works.scss";
import { useState } from "react";
import { bootcamp } from "../../data";
import { useEffect } from "react";

export default function Works() {

    const [currenteSlider, setCurrentSlider] = useState(0);
    const [data, setData] = useState([]);


    useEffect(()=>{
      setData(bootcamp)
    })

    const handleClick = (way) => {
      way === "left" 
      ? setCurrentSlider(currenteSlider > 0 ? currenteSlider-1 : data.length -1)
      : setCurrentSlider(currenteSlider < data.length - 1 ? currenteSlider +1 : 0)
    }

    return (
      <div className='works' id="works">
            <div className="slider" 
            style={{transform:`translateX(-${currenteSlider *100}vw)`}}>
                {data.map((d) =>(
                <div className="container">
                    <a href={d.web} target="blank">
                      <h2>{d.title}</h2>
                    </a>
                    <div className="item">
                        <div className="img">
                            <img src={d.img} alt="" />
                        </div>
                        <h3 className="desc">{d.desc}</h3>
                    </div>
                   
                </div>
                 ))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()}/>
        </div>
    )
}