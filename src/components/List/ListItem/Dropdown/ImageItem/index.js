import { create } from '../../../../../utils/index.js'

export const ImageItem = (images, title, dropdown) => {
    const imageItem = create({
        tagName: 'img',
        attributes: {
            src: images[0],
            alt: title,
        },
    })

    const countOfColumns = images.length
    let columnWidth
    let lines

    dropdown.addEventListener('mouseenter', () => {
        columnWidth = imageItem.clientWidth / countOfColumns
        lines = document.createElement('ul')

        for (let i = 0; i < countOfColumns; i++) {
            const line = document.createElement('li')
            lines.append(line)
        }

        imageItem.parentNode.append(lines)
    })

    imageItem.addEventListener('mousemove', event => {
        const x = Math.abs(event.pageX - imageItem.getBoundingClientRect().left)

        const imageIndex = Math.floor(x / columnWidth)
        imageItem.src = images[imageIndex]

        const innerNodes = lines.childNodes
        innerNodes.forEach(item => {
            item.classList.remove('active')
        })
        innerNodes[imageIndex].classList.add('active')
    })

    dropdown.addEventListener('mouseleave', () => {
        lines.remove()
    })

    return imageItem
}
