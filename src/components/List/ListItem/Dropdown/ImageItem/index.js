import { create } from '../../../../../utils/index.js'

//TODO: сделать быстрый просмотр фотографий
export const ImageItem = (images, title) => {
    const imageItem = create({
        tagName: 'img',
        attributes: {
            src: images[0],
            alt: title,
        },
    })

    let imageIndex = 0

    function changeImage() {
        imageIndex++

        if (imageIndex === images.length) {
            imageIndex = 0
        }

        imageItem.src = images[imageIndex]
    }

    imageItem.addEventListener('mouseenter', () => {
        setInterval(changeImage, 700)
    })

    imageItem.addEventListener('mouseleave', () => {
        clearInterval(changeImage)
        imageIndex = 0
        imageItem.src = images[imageIndex]
    })

    return imageItem
}
