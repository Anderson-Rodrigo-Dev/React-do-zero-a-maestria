const fruits = ['maçã', 'laranja', 'uva']

const [f1, f2, f3] = fruits

console.log(fruits);
console.log(f1, f2, f3)

const productDetails = {
    name: 'mouse',
    price: 49.90,
    category: 'periféricos',
    color: 'red'
}

const {name, price: preço, category, color: cor} = productDetails

console.log(name, preço, category, cor)