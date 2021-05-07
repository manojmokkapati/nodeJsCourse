// object property shorthand



const name = 'manoj'
const userAge = 23

const user = {
    name,
    age: userAge,
    location: 'sri kalahasthi'

}
console.log(user)


// object  destructuring

const product = {
    label: 'Red notebook',
    price: 10,
    stock: 201,
    salePrice: undefined,
    rating: 4.1
}


// const label= product.label
// const stock= product.stock

// const {label:productLable,stock,rating=4.5} = product
// console.log(productLable)
// console.log(stock)
// console.log(rating)


const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)