/* eslint-disable react-hooks/rules-of-hooks */
import "./intro.scss";
import {init} from "ityped";
import {useEffect, useRef } from "react";
import {Mail, GitHub, LinkedIn, WhatsApp} from "@material-ui/icons";

export default function intro() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const textRef = useRef(); 

    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            strings: [ "React", "Redux", "Sequelize", "PostreSQL", "NodeJs", "Express", "CSS", "HTML5"],
        });
    },[]);
    return (
        <div className='intro'id="intro" >
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/Hola.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hola, soy</h2>
                    <h1>Luciano Staniszewski</h1>
                    <h3>Javascript Full Stack Developer <span ref={textRef} ></span></h3>
                </div>
                <div className="meContact">
                    <div className="itemContainer">
                        <a href="https://wa.me/5491169962745" target="blank" ><WhatsApp className="icon"/></a>
                    </div>

                    <div className="itemContainer">
                        <a href = "mailto:luciano.stani97@gmail.com"><Mail className="icon"/></a>
                    </div>

                    <div className="itemContainer">
                    <a href="https://github.com/LucjanStaniszew" className="icon" target="blank"><GitHub className="icon" /></a>
                    </div>

                    <div className="itemContainer">
                        <a href="https://www.linkedin.com/in/luciano-staniszewski-full-stack-web-developer" className="icon" target="blank"><LinkedIn className="icon" /></a>
                    </div>

                    <div className="itemContainer">
                    <a download href="assets/EN Luciano Staniszewski.pdf">
                        <button class="download-cv">Download CV</button>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
