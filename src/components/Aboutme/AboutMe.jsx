import "./AboutMe.scss";

const birthDate = "1997-06-05"
const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

export default function AboutMe() {
    return (
        <div className="AboutMe" id="aboutMe">
                <div className="leftUp">
                    <h1 className="title">¡Hola visitante!</h1>
                    <h2>Muchas gracias por haber llegado <br /> hasta este punto para conocerme más</h2>
                    <h4>Me presento nuevamente y les cuento de mi:</h4>
                    <h4>Soy Luciano Stanizewski, tengo {getAge(birthDate)} años</h4>
                    <h4>Graduado en el bootcamp <a href="https://www.soyhenry.com/">soyHenry</a> como
                    JavaScript Full Stack Web Developer <a href="https://certificates.soyhenry.com/cert?id=156557fd-e346-4dd2-85ba-9899fa712b4f">¡Certificado!</a></h4>
                    <h4>Me apasiona el mundo IT y considero que haciendo lo que te gusta no trabajas 1 solo día de tu vida</h4>
                    <h4>En cuanto a Hobbies me gustan mucho los videojuegos, las peliculas y las series</h4>
                    <h4 title="May the force be with us all">Mi saga favorita es Star Wars</h4>
                    <h4>Me gusta mucho lo medieval, tanto peliculas o series como videojuegos de todo tipo con esa tematica</h4>
                    <br />
                    <div className="tech">
                <ul>
                    <h3>Con las siguientes técnologias, frameworks y programas:
                        <ul>
                            <div className="table">
                                <div className="leftDown">
                                    <li>Front-End:
                                        <ul>
                                            <li>React</li>
                                            <li>Next</li>
                                            <li>Vue</li>
                                            <li>Redux</li>
                                            <li>CSS</li>
                                            <li>Bootstrap</li>
                                        </ul>
                                    </li>
                                </div>

                                <div className="center">
                                    <li>Back-End:
                                        <ul>
                                            <li>Node</li>
                                            <li>Sequelize</li>
                                            <li>Express</li>
                                            <li>Axios</li>
                                            <li>PostMan</li>
                                        </ul>
                                    </li>
                                </div>

                                <div className="rightDown">
                                    <li>Databases:
                                        <ul>
                                            <li>PostreSQL</li>
                                            <li>NoSQL</li>
                                            <li>MySQL</li>
                                            <li>MongoDB</li>
                                        </ul>
                                </li>
                                </div>
                            </div>
                        </ul>    
                    </h3>
                </ul>
            </div>
                </div>
                <div className="rightUp">
                    <img src="assets/Me.png" alt="" height="375px" width="375px"/>
                </div>
        </div>
    )
}
