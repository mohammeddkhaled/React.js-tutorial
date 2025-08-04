import Button from "./Button"

import leftArrow from '../images/left-arrow.png'
import rightArrow from '../images/right-arrow.png'

import AppleBasket from "./AppleBasket"

import "./AppleCounter.css"


const AppleCounter = () => {
    return (
        <section>
            <AppleBasket appleCount={10} basketName={1} />
            <Button imageUrl={leftArrow} title={'leftArrow'} alt={"leftButton"}/>
            <Button imageUrl={rightArrow}  title={'rightArrow'} alt={"rightButton"} />
            <AppleBasket appleCount={0} basketName={2} />
        </section>
    )
}

export default AppleCounter