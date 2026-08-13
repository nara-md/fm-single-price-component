import './myComponent.css'

function  myComponent(props) {
    return (
        <div className="container">
            <div className="item1">
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
                <p>{props.description}</p>
            </div>
            <div className="item2">
                <h2>{props.title2}</h2>
                <span>{props.price2}</span>
                <p>{props.description2}</p>
                <button>{props.button2}</button>
            </div>
            <div className="item3">
                <h2>{props.title3}</h2>
                <p>{props.description3}</p>
            </div>
        </div>
    )
}

export default myComponent
