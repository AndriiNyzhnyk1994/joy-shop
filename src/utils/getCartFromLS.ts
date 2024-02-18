import { CartItemType } from "../redux/slices/cart/slice"
import { calculateTotalPrice } from "./calculateTotalPrice"


export const getCartFromLS = () => {
    const data = localStorage.getItem('cartData')
    const items = data ? JSON.parse(data) : []
    const totalPrice = calculateTotalPrice(items)
    return {items: items as CartItemType[], totalPrice}
}