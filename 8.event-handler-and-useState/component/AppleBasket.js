
const AppleBasket = (props)=>{
    const {appleCount,basketName}=props
    return(
        <div>
            <h1><span>{appleCount}</span>Apple</h1>
            <p><span>{basketName}{appleCount ===10 && '(full)'}{appleCount ===0 && '(empty)'}</span></p>
        </div>
    )
}

export default AppleBasket