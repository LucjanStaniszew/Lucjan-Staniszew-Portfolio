/* eslint-disable react-hooks/rules-of-hooks */
import "./intro.scss";
import {init} from "ityped";
import {useEffect, useRef } from "react";

export default function intro() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const textRef = useRef(); 

    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            strings: ["Web Designer", "Javascript", "React/Redux", "Sequelize/Postgres", "Node.js/Express", "Css, Html"],
        });
    },[]);
    return (
        <div className='intro'id="intro" >
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/laptopwave.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hola! Soy</h2>
                    <h1>Silvina Staniszewski</h1>
                    <h3>Javascript Full Stack Developer <span ref={textRef} ></span> </h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
