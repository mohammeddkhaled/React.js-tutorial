
const Button = (props) => {
    const { imageUrl, alt, title, click } = props
    return (
        <button onClick={click} title={title} >
            <img src={imageUrl} alt={alt} />
        </button>
    )
}

export default Button