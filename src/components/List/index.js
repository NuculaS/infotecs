import { ListItem } from './ListItem/index.js'
import { create } from '../../utils/index.js'

const getDragAfterElement = (container, y) => {
    const draggableElements = [
        ...container.querySelectorAll('.item:not(.dragging)'),
    ]

    return draggableElements.reduce(
        (closest, child) => {
            const box = child.getBoundingClientRect()
            const offset = y - box.top - box.height / 2

            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child }
            } else {
                return closest
            }
        },
        { offset: Number.NEGATIVE_INFINITY }
    ).element
}

export const List = array => {
    const list = create({
        tagName: 'div',
        classes: 'list',
    })

    list.addEventListener('dragover', event => {
        event.preventDefault()
        const afterElement = getDragAfterElement(list, event.clientY)
        const draggable = document.querySelector('.dragging')

        if (afterElement == null) {
            list.append(draggable)
        } else {
            list.insertBefore(draggable, afterElement)
        }
    })

    array.forEach(elem => {
        list.append(ListItem(elem))
    })

    return list
}
