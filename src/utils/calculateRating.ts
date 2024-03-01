import { ReviewType } from "../redux/slices/items/slice"

export const calculateRating = (reviewsArr: ReviewType[]) => {
    let commonValue = 0
    reviewsArr.reduce((acc, el) => {
        commonValue += el.rate
        return acc
    }, 0)
    console.log(commonValue / reviewsArr.length);

    return (commonValue / reviewsArr.length)
}
