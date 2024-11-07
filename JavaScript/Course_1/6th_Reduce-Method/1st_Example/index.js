
const data = [["658460eaf1a99d97b7c922cf", [{price: 1, name: "ab"}, 1]], ["658460eaf1a99d97b7c922cd", [{price: 2, name: "ab"}, 1]]];

// const totalPrice = data.reduce((sum, [, items]) => 
//     sum + items.reduce((itemSum, [{ price }]) => itemSum + price, 0), 0);

const totatPrice = data.reduce((sum, [, items]) => {
console.log('items:', items)
console.log('items:', items[0].price)
// console.log('sum:', sum)
    return (
        sum + items[1]

    )

},0)

console.log("Total Price:", totatPrice);