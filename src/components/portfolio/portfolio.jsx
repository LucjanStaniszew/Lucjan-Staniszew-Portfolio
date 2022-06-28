/* eslint-disable react-hooks/rules-of-hooks */
import "./portfolio.scss";
import { useEffect, useState } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import {bootcamp} from "../../data.js";

export default function portfolio() {
    const [selected, setSelected] = useState("bootcamp");
    const [ work, setWork ] = useState([]) //asi se declara el estado Vacio... seteado en nada... seteado en vacio
    const [data, setData] =useState([]);
    const list = [
        {
            id: "bootcamp",
            title: "My Projects",
          }
        ];

        useEffect(()=>{

            switch(selected){
                case "bootcamp":
                    setData(bootcamp);
                    break;
                    default:
                        setData(bootcamp);
            }

        },[selected] );

    return (
        <div className='portfolio' id="portfolio">
        
            <ul>
               {
                   list.map((item)=>(
                       <PortfolioList
                       title = {item.title}
                       id={ item.id}
                       />
                   ))}
            </ul>
            <div className="container">
                {data.map((d)=>(
                    <div className="item" key={d.id}>
                    <img src = {d.img}
                     alt="" className="img-portfolio"/>
                    <h3>{d.title}</h3>
                    <button className="btn-btn"><a href={d.src} target='blank'>{`Code here </>`}</a></button>
                    <button className="btn-btn"><a href={d.web} target='blank'>Web</a></button>
                </div>
              ))} 
            </div>
        </div>
    )
}

