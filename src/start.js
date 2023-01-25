import { Controls } from './components/Controls/index.js'
import { List } from './components/List/index.js'
import { Loader } from './components/Loader/index.js'
import { getProductsState, setState } from './state.js'
import { sortItems } from './utils/index.js'

const root = document.querySelector('#root')

export function fetchData(limit) {
    const url = `https://dummyjson.com/products?limit=${limit}`

    deleteList()

    const loader = Loader()
    root.append(loader)

    fetch(url)
        .then((data) => data.json())
        .then(({ products }) => {
            setState('products', products)
            drawProductsList()

            loader.remove()
        })
}

export function drawProductsList() {
    deleteList()
    sortItems()
    root.append(List(getProductsState()))
}

function deleteList() {
    const list = root.querySelector('.list')
    if (list) {
        while (list.firstChild) {
            list.firstChild.remove()
        }
        list.remove()
    }
}

function start() {
    root.append(Controls())
    fetchData(10)
}

start()
