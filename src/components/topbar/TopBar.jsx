import "./TopBar.scss";

export default function TopBar() {
    return (
        <div className='topbar'>
            <div className="wrapper">
                <a href="#intro" className="logo"><img src="/assets/Me.png" alt="" height={60} width={60} /></a>
                <div className="itemContainer">
                    <a href="#portfolio" class="navs">Portfolio!</a>
                </div>
                <div className="itemContainer">
                    <a href="#works" class="navs">Works!</a>
                </div>
                <div className="itemContainer">
                    <a href="#aboutMe" class="navs">About me!</a>
                </div>
                <div className="itemContainer">
                    <a href="#contact" class="navs">Contact Me</a>
                </div>
            </div>
        </div>
    )
}
