import "./AboutMe.scss";

const birthDate = "1997-06-05"
const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

export default function AboutMe() {
    return (
        <div className="AboutMe" id="aboutMe">
                <div className="leftUp">
                    <h1 className="title">¡Hola visitante!</h1>
                    <h3>Muchas gracias por haber llegado <br /> hasta este punto para conocerme más</h3>
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
                        <table border="1px solid" className="tableCenter">
                            <tr>
                                <th>
                                    Front-End
                                </th>
                                <th>
                                    Back-End
                                </th>
                                <th>
                                    Bases de Datos
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    React
                                </td>
                                <td>
                                    Node
                                </td>
                                <td rowSpan="2">
                                    PostgreSQL
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Next
                                </td>
                                <td>
                                    Sequelize
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Vue
                                </td>
                                <td>
                                    Express
                                </td>
                                <td>
                                    NoSQL
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Redux
                                </td>
                                <td>
                                    Axios
                                </td>
                                <td>
                                    MySQL
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    CSS
                                </td>
                                <td>
                                    PostMan
                                </td>
                                <td>
                                    MongoDB
                                </td>
                            </tr>

                        </table>
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
