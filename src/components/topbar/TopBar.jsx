import "./TopBar.scss";

export default function TopBar() {
    return (
        <div className='topbar'>
            <div className="wrapper">
                <div className="itemContainer">
                    <a href="#intro" className="logo"><img src="/assets/Me.png" alt="" height={60} width={60} /></a>
                </div>
                <div className="itemContainer">
                    <a href="#portfolio" class="navs"><h4>Portfolio!</h4>
                        <img src="/assets/portfolio.png" alt="portfolio" className="responsiveImg"/>
                    </a>
                </div>
                <div className="itemContainer">
                    <a href="#works" class="navs"><h4>Works!</h4>
                        <img src="/assets/works.png" alt="works" className="responsiveImg"/>
                    </a>
                </div>
                <div className="itemContainer">
                    <a href="#aboutMe" class="navs"><h4>About me!</h4>
                        <img src="/assets/aboutme.png" alt="about" className="responsiveImg"/>
                    </a>
                </div>
                <div className="itemContainer">
                    <a href="#contact" class="navs"><h4>Contact Me!</h4>
                        <img src="/assets/contactme.png" alt="contact" className="responsiveImg"/>
                    </a>
                </div>
            </div>
        </div>
    )
}
