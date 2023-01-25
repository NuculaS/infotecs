import { create } from '../../../utils/index.js'
import { drawProductsList } from '../../../start.js'
import { pageState, setState } from '../../../state.js'
import {
    DEFAULT_VALUE,
    INEXPENSIVE_TO_EXPENSIVE_VALUE,
    EXPENSIVE_TO_INEXPENSIVE_VALUE,
    BEST_RATING_VALUE,
    DISCOUNT_VALUE,
} from '../../../constants.js'

export const Select = () => {
    const select = create({
        tagName: 'select',
        classes: 'sort',
        children: `
            <option selected value="${DEFAULT_VALUE}">По умолчанию</option>
            <option value="${INEXPENSIVE_TO_EXPENSIVE_VALUE}">Сначала недорогие</option>
            <option value="${EXPENSIVE_TO_INEXPENSIVE_VALUE}">Сначала дорогие</option>
            <option value="${BEST_RATING_VALUE}">Сначала с лучшей оценкой</option>
            <option value="${DISCOUNT_VALUE}">По скидке (%)</option>
        `,
    })

    select.addEventListener('change', () => {
        if (Object.entries(pageState).length) {
            setState('sortingType', select.value)
            drawProductsList()
        }
    })

    select.dispatchEvent(new Event('change'))

    return select
}
