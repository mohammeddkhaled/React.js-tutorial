
import { createRoot } from "react-dom/client"
import './style.css'

function Card(key, title, images, brand, category, price) {
    return (
        <div className="card" key={key}>
            <img src={images}></img>
            <div className="card-content">
                <h1>{title}</h1>
                <p>{brand}</p>
                <p>{category}</p>
                <p><b>{price}</b></p>
            </div>
        </div>
    )
}
// const container = [Card(1),Card(2),Card(3),Card(4),Card(5),Card(6)]
const root = createRoot(document.querySelector('#root'))

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => {
        // console.log(data);
        const container2 = data.products.map((products) => {
            return Card(products.id, products.title, products.thumbnail, products.brand, products.category, products.price)

        })
        // console.log(container2);
        root.render(<div className="container2">{container2}</div>)
    });





