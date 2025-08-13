// import { useState } from "react"


// const UseState = () => {
//     const useStateCount = useState(10)

//     return (
//         <div>
//             <h1>{useStateCount [0]}</h1>
//             <button
//             onClick={()=>{useStateCount[1](useStateCount [0]+1)}}
//             >increase count</button>
//         </div>
//     )
// }

// export default UseState


/////////////////////////////////////////good way /////////////////////////
import { useState } from "react"

const App = () => {
    const [ count, setCount ] = useState(0)


    return (
        <div>
            <h1>{count}</h1>
            <button
                onClick={() => { setCount(count + 1) }}
            >increase count</button>

        </div>
    )
}
export default App