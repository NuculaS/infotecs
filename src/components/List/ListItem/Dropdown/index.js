import { create } from '../../../../utils/index.js'
import { ImageItem } from './ImageItem/index.js'

export const Dropdown = ({
    images,
    title,
    discountPercentage,
    category,
    brand,
    description,
    rating,
    price,
}) => {
    const dropdown = create({
        tagName: 'div',
        classes: 'dropdown',
    })

    dropdown.innerHTML = `
        <div class="image">
            <div class="discount">${discountPercentage}%</div>
        </div>
        <h3>${category}</h3>
        <h1>${title}</h1>
        <h2>${brand}</h2>
        <p>${description}</p>
        <div class="marketing">
            <div class="rating">
                <div class="star"></div>
                <p>${rating}</p>
            </div>
            <button class="buy">${price}$</button>
        </div>
    `

    dropdown.querySelector('.image').append(ImageItem(images, title))

    return dropdown
}
