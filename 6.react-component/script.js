import { createRoot } from 'react-dom/client'
import './style.css'


function Card({ title, image, brand, price }) {

    return (
        <div className="card" >
            <img src={image} alt="iphone" />
            <div className="card-content">
                <h3>{title}</h3>
                <p>{brand}</p>
                <p>
                    <b>${price}</b>
                </p>
            </div>
        </div>
    )
}

const root = createRoot(document.getElementById('root'))

fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data) => {
        root.render(
            <div className="container">
                {data.products.map((product) => {
                    return (
                        <Card
                            key={product.id}
                            title={product.title}
                            brand={product.brand}
                            price={product.price}
                            image={product.thumbnail}
                        />
                    )
                })}
            </div>
        )
    })


//////////////////////////////////////////////////////////////////////////////////////////////////
// root.render(<Card
//     title='iphone 16'
//     image='https://i.dummyjson.com/data/products/1/thumbnail.jpg'
//     brand='apple'
//     price='900'

// />)



////////////////////////////////////////////////////////////////////////////////////////////////
// root.render({
//     $$typeof: Symbol.for('react.element'),
//     type: Card,
//     ref:null,
//     props: {
//         title:'iphone 16',
//         image:'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
//         brand:'apple',
//         price:900,
//         kay:1
//     }
// })

