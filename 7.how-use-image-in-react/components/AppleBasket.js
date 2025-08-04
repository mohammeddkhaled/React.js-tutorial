
function AppleBasket(props) {
    const {appleCount,basketName} = props
    return (
        <div className="apple-basket">
            <h1><span>{appleCount}</span>Apples</h1>
            <p>{basketName}</p>
        </div>
    )
}

export default AppleBasket