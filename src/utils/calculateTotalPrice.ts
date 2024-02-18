import { CartItemType } from "../redux/slices/cart/slice"

export const calculateTotalPrice = (cartItems: CartItemType[]) => {
    const totalPrice = cartItems.reduce((acc, el) => {
        return (el.count * el.price) + acc
    }
        , 0)
    return totalPrice
}