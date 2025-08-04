
const Button = (props) => {
    const { imageUrl, title,alt} = props
    return (
        <button title={title}>
            <img src={imageUrl} alt={alt}/>
        </button>
    )
}
export default Button
