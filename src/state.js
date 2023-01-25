export const pageState = {}

export function setState(state, value) {
    pageState[state] = value
}

export function getProductsState() {
    return pageState.products
}

export function getSortingTypeState() {
    return pageState.sortingType
}
