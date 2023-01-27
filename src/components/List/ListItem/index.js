/**
 * Описание свойств объекта product
 * @param {number} id
 * @param {string} title - Название
 * @param {string} category - Категория
 * @param {string} brand - Бренд
 * @param {string} description - Описание
 * @param {string[]} images - Ссылки на изображения
 * @param {number} discountPercentage - Скидка в процентах
 * @param {number} price - Стоимость продукта в долларах
 * @param {number} rating - Рейтинг
 * @param {number} stock - Количество
 * @param {string} thumbnail - Ссылка на миниатюру изображения
 */

import { Dropdown } from './Dropdown/index.js'
import { create } from '../../../utils/index.js'

export const ListItem = elem => {
    const listItem = create({
        tagName: 'div',
        classes: 'item',
        children: elem.title,
        attributes: {
            draggable: true,
        },
    })

    listItem.addEventListener('dragstart', () => {
        listItem.classList.remove('active')
        listItem.classList.add('dragging')
    })

    listItem.addEventListener('dragend', () => {
        listItem.classList.remove('dragging')
    })

    const dropdown = Dropdown(elem)
    listItem.append(dropdown)

    listItem.addEventListener('mouseenter', () => {
        if (!document.querySelector('.dragging')) {
            listItem.classList.add('active')
            dropdown.classList.add('active')

            const dropdownTop = dropdown.getBoundingClientRect().top
            const dropdownBottom = dropdown.clientHeight + dropdownTop

            if (dropdownTop < 0) {
                dropdown.style.top = `${-1 - dropdownTop}px`
            } else if (dropdownBottom >= window.innerHeight) {
                dropdown.style.top = `-${dropdownBottom - window.innerHeight}px`
            }
        }
    })

    listItem.addEventListener('mouseleave', () => {
        listItem.classList.remove('active')
        dropdown.classList.remove('active')
        dropdown.style.top = '-1px'
    })

    return listItem
}
