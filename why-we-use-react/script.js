
const basket1 = document.querySelector('#basket-1 span')
const basket2 = document.querySelector('#basket-2 span')

const leftArrow = document.querySelector("#left-arrow")
const rightArrow = document.querySelector("#right-arrow")


const totalApples = 10

let secondBasketAppleCount = 0
let firstBasketAppleCount = totalApples - secondBasketAppleCount



basket1.innerText = firstBasketAppleCount
basket2.innerText = secondBasketAppleCount





rightArrow.addEventListener('click', () => {
    if (firstBasketAppleCount > 0) {
        firstBasketAppleCount--
        basket1.innerText = firstBasketAppleCount
        secondBasketAppleCount++
        basket2.innerText = secondBasketAppleCount
    }
})


leftArrow.addEventListener('click', () => {
    if (secondBasketAppleCount > 0) {
        firstBasketAppleCount++
        basket1.innerText = firstBasketAppleCount
        secondBasketAppleCount--
        basket2.innerText = secondBasketAppleCount
    }
})