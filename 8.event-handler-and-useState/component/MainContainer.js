import Button from "./Button";
import AppleBasket from "./AppleBasket"

import leftArrow from '../images/left-arrow.png'
import rightArrow from '../images/right-arrow.png'

import { useState } from "react"
import "./MainContainer.css"





const MainContainer = () => {

    const totalApples = 10

    const [rightAppleCount, setRightAppleCount] = useState(0)
    const [leftAppleCount, setLeftAppleCount] = useState(totalApples - rightAppleCount)

    const leftClick = () => {

        if (rightAppleCount > 0) {
            setRightAppleCount(rightAppleCount-1)
            setLeftAppleCount(leftAppleCount+1)

        }
    }
    const rightClick = () => {
        if (leftAppleCount > 0) {
            setLeftAppleCount(leftAppleCount-1)
            setRightAppleCount(rightAppleCount+1)
        }
    }
    return (
        <section>
            <AppleBasket appleCount={leftAppleCount} basketName='Basket-1' />
            <Button click={leftClick} imageUrl={leftArrow} title='left-arrow' alt='left arrow' />
            <Button click={rightClick} imageUrl={rightArrow} title='right-arrow' alt='right arrow' />
            <AppleBasket appleCount={rightAppleCount} basketName='Basket-2' />
        </section>
    )
}

export default MainContainer