import "./portfolioList.scss";

export default function portfolioList({title, web, src}) {
    return (
        <div className="portfolioList">
        <h3 >{title}</h3>
        <h3>{web}</h3>
        <h3>{src}</h3>
        </div>
    )
}
