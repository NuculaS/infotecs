import { create } from '../../../utils/index.js'
import { fetchData } from '../../../start.js'

/** Проверка правильности ввода */
function validation(event) {
    const input = event.target
    input.value = input.value.replace(/\D/g, '')

    if (input.value > 100) {
        input.value = 100

        input.classList.add('error')

        setTimeout(() => {
            input.classList.remove('error')
        }, 1000)
    } else if (input.value == 0) {
        input.value = ''
    }

    if (input.value.length < 3) {
        input.classList.remove('error')
    }
}

export const Input = () => {
    const input = create({
        tagName: 'input',
        classes: 'amount',
        attributes: {
            type: 'string',
            size: 3,
            maxlength: 3,
            value: 10,
        },
    })

    input.addEventListener('change', () => {
        if (input.value != '') {
            fetchData(input.value)
        }
    })

    input.addEventListener('input', validation)

    return input
}
