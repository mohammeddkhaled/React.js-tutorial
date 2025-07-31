
import {createRoot} from "react-dom/client"

const h1 = <h1>jsx code</h1>

const root = createRoot(document.querySelector('#root'))

root.render(h1)

console.log('hello world');