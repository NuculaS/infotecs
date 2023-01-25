/** Функция создания элементов */
export const create = ({ tagName, classes, children, attributes }) => {
    const node = document.createElement(tagName)

    if (classes) {
        node.classList.add(classes)
    }

    if (children) {
        node.innerHTML = children
    }

    if (attributes) {
        for (let attribute in attributes) {
            node.setAttribute(attribute, attributes[attribute])
        }
    }

    return node
}
