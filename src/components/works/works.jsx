import "./works.scss";
import { useState } from "react";

export default function Works() {

    const [currenteSlider, setCurrentSlider] = useState(0);

    const data = [
          {
            id: 1,
            title: "VIPets",
            web: "https://vipets.vercel.app/",
            img:
            "https://user-images.githubusercontent.com/90510746/160607183-5527d9ec-bacf-458f-a48c-d89459f00a81.png",
            src:"https://github.com/Navito-py/PF-PuppyPalace",
            desc: "Spa Exclusivamente pensada en nuestras queridas mascotas. Vipets ofrece un acceso rápido a las clinicas 24 hs." 
          },
          {
            id: 2,
            title: "Food*HenryApp",
            web: "https://github.com/SilviStani/Pi-Food",
            img:
              "https://user-images.githubusercontent.com/90510746/155239699-a0ab095e-cfb3-4a32-8756-e1f3b9e4d948.jpg",
            src:"https://github.com/SilviStani/Pi-Food",
            desc: "SPA creada como Proyecto individual, en la etapa final de 'Soy Henry Academy'. Aqui es donde aplicamos las skills que hemos aprendido en el bootcamp"
          },
          {
            id: 3,
            title: "Portfolio",
            web: "https://react-portfolio-omega-sooty.vercel.app/",
            img:
            "https://user-images.githubusercontent.com/90510746/155241489-2df2e29a-f32d-4046-8551-df69e2a9cb32.jpg",
              src:"https://github.com/SilviStani/Vacation-TodoList",
              desc:"Mi propia descripcion, con mis trabajos y mis pasiones"
          },
          {
            id: 4,
            title: "Chronometer",
            web: "https://github.com/SilviStani/Chronometer-Countdown-Timer",
            img:
              "https://user-images.githubusercontent.com/90510746/148205845-1f650bfd-15ad-433c-839d-962786b50e83.png",
            src: "https://github.com/SilviStani/Chronometer-Countdown-Timer",
            desc: "A Single & Simple Chronometer pure redux"
          },
          
          {
            id: 5,
            title: "TodoList: Vacation",
            web: "https://github.com/SilviStani/Vacation-TodoList",
            img:
            "https://user-images.githubusercontent.com/90510746/148145113-25ef5a46-17d7-4c5f-b9e0-07716ffc0b02.png",
            src:"https://github.com/SilviStani/Vacation-TodoList",
            desc: "Una Todo list creada a puro vanilla javascript. Sus efectos y estilos en Css."
          },
          {
            id: 6,
            title: "Estetyczna Nadja Szewska",
            web: "",
            img: "/assets/introPage.jpg",
            src:"https://github.com/SilviStani/Estetyczna-Nadja-Szewska",
            desc: "SPA de Estética corporal y facial. Servicio de belleza integral."
          }
    ]

    const handleClick = (way) => {
      way === "left" 
      ? setCurrentSlider(currenteSlider > 0 ? currenteSlider-1 : data.length -1) 
      : setCurrentSlider(currenteSlider < data.length - 1 ? currenteSlider +1 : 0)
    }

    return (
      <div className='works' id="works">
        <h1>Works & Projects</h1>
            <div className="slider" 
            style={{transform:`translateX(-${currenteSlider *100}vw)`}}>
                {data.map((d) =>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/mobile.png" alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span><a href={d.src}>Projects</a></span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                   
                </div>
                 ))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()}/>
        </div>
    )
}
