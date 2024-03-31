import { ReviewType } from "../redux/slices/items/slice"

export const calculateRating = (reviewsArr: ReviewType[]) => {
    let allValues = 0
    reviewsArr.reduce((acc, el) => {
        allValues += el.rate
        return acc
    }, 0)
    const commonValue = (allValues / reviewsArr.length);
    let rounded = Math.round(commonValue * 100) / 100;
    return rounded
}
