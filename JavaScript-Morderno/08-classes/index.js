class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productWithDiscount(discount){
        return this.price * ((100-discount) / 100)
    }
}

const shirt = new Product ('Camisa gola V', 30)

console.log(shirt.name);

console.log(shirt.productWithDiscount(50));

const tenis = new Product("Tenis Adidas", 120)

console.log(tenis.productWithDiscount(20));