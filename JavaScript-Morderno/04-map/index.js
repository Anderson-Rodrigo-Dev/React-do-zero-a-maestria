const products = [
    {name: 'Camisa', price: 10.99, category: 'Roupas'},
    {name: 'Chaleira Elétrica', price: 49.99, category: 'Eletro'},
    {name: 'Fogão', price: 399, category: 'Eletro'},
    {name: 'Calça Jeans', price: 49.99, category: 'Roupas'},
]

products.map((product) =>{
    if (product.category === 'Roupas'){
        product.onSale = true
    }
})

console.log(products);