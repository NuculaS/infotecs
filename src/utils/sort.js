import {
    INEXPENSIVE_TO_EXPENSIVE_VALUE,
    EXPENSIVE_TO_INEXPENSIVE_VALUE,
    BEST_RATING_VALUE,
    DISCOUNT_VALUE,
} from '../constants.js'
import { getProductsState, getSortingTypeState, setState } from '../state.js'

/** Сортировка элементов */
export function sortItems() {
    let products = getProductsState()
    let sortingType = getSortingTypeState()

    if (sortingType === INEXPENSIVE_TO_EXPENSIVE_VALUE) {
        products.sort((a, b) => a.price - b.price)
    } else if (sortingType === EXPENSIVE_TO_INEXPENSIVE_VALUE) {
        products.sort((a, b) => b.price - a.price)
    } else if (sortingType === BEST_RATING_VALUE) {
        products.sort((a, b) => b.rating - a.rating)
    } else if (sortingType === DISCOUNT_VALUE) {
        products.sort((a, b) => b.discountPercentage - a.discountPercentage)
    }

    setState('products', products)
}
