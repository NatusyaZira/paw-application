
function Card (props) {
    return (<div className={`card ${props.className}`}><button className="btn"type="button">{props.description}</button></div> )
}

export default  Card ;