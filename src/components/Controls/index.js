import { create } from '../../utils/index.js'
import { Input } from './Input/index.js'
import { Select } from './Select/index.js'

export const Controls = () => {
    const controls = create({
        tagName: 'div',
        classes: 'controls',
        children: `
            <div class="amountOfItems">
                <label>Количество элементов в списке:</label>
            </div>
            <div class="sorting">
                <label>Сортировка:</label>
            </div>
        `,
    })

    controls.querySelector('.amountOfItems').append(Input())
    controls.querySelector('.sorting').append(Select())

    return controls
}
