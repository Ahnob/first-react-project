import Product from "./Product";
import products from "./products";


function productCard(item){
  return(
    <Card
    key={item.id}
     title={item.title} 
    img={item.image}
    desc={item.description}
    price={item.price} /> 
  )
}
 
function App() {
  return (
    <>
      <h1 className="heading">Our Products</h1>
      {products.map(productCard)}
      {/* <div className="main-container">
        <Product
          title={products[0].title}
          img={products[0].image}
          desc={products[0].description}
          price={products[0].price}
        />

        <Product
          title={products[1].title}
          img={products[1].image}
          desc={products[1].description}
          price={products[1].price}
        />

        <Product
          title={products[2].title}
          img={products[2].image}
          desc={products[2].description}
          price={products[2].price}
        />

        <Product
          title={products[3].title}
          img={products[3].image}
          desc={products[3].description}
          price={products[3].price}
        />

        <Product
          title={products[4].title}
          img={products[4].image}
          desc={products[4].description}
          price={products[4].price}
        />

        <Product
          title={products[5].title}
          img={products[5].image}
          desc={products[5].description}
          price={products[5].price}
        />

        <Product
          title={products[6].title}
          img={products[6].image}
          desc={products[6].description}
          price={products[6].price}
        />

        <Product
          title={products[7].title}
          img={products[7].image}
          desc={products[7].description}
          price={products[7].price}
        />

        <Product
          title={products[8].title}
          img={products[8].image}
          desc={products[8].description}
          price={products[8].price}
        />
      </div> */}
    </>
  );
}

export default App;
