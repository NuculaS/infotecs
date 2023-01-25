import { create } from '../../utils/index.js'

export const Loader = () => {
    const loader = create({
        tagName: 'div',
        classes: 'lds-ellipsis',
        children: `
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        `,
    })

    return loader
}
