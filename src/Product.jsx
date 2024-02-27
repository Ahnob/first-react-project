
function Product(props) {
    return(
        <>
            <div className="container">
                <h1>{props.title}</h1>
                <img src= {props.img}alt={props.title} />
                <p>{props.description}</p>
                <h1>$ {props.price}</h1>
                <button>Add to chart</button>
            </div>         
        </>
    )
}

export default Product