import "./TopBar.scss";
import {Mail, GitHub, LinkedIn, WhatsApp} from "@material-ui/icons";


export default function TopBar({ menuOpen, setMenuOpen}) {
    return (
        <div className={'topbar ' + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"><img src="/assets/logoYo.png" alt="" height={60} width={60} /></a>
                    <div className="itemContainer">
                    <WhatsApp className="icon"/>
                    <a href="https://api.whatsapp.com/send/?phone=5491163632288&text&app_absent=0">+549-011-1563632288</a>
                    {/*<img src="/assets/contact_me.png" alt="" height={50} width={50}/>*/}
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <a href = "mailto:silvina@gmail.com?subject = Feedback&body = Message">silvina.stani@gmail.com</a>
                        {/*<img src="/assets/mail.png" alt="" height={50} width={50}/>*/}
                    </div>
                    <div className="itemContainer">
                        <GitHub className="icon" />
                       <a href="https://github.com/SilviStani" className="icon">SilviStani</a>
                        {/*<img src="/assets/github_st.png" alt="" height={50} width={50}/>*/}
                       </div>
                    <div className="itemContainer">
                        <LinkedIn className="icon" />
                        <a href="https://www.linkedin.com/in/silvina-staniszewski-18493276/" className="icon">Silvina Staniszewski</a>
                       {/*} <img src="/assets/trabajo.png" alt="" height={50} width={50}/>*/}
                    </div>
                    <div className="itemContainer">
                      <a download href="assets/Resume.pdf">
                        <button class="download-cv">/Download CV/</button>
                      </a>
                    </div>
                    <div className="itemContainer">
                        <a href="#contact" class="download-cv">/Contact/</a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburguer" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
