
function Product(props) {
    return(
        <>
            <div className="container">
                <h1>{props.title}</h1>
                <img src= {props.img}alt={props.title} />
                <p className="me">{props.desc}</p>
                <h1>$ {props.price}</h1>
                <button>Add to chart</button>
            </div>         
        </>
    )
}

export default Product