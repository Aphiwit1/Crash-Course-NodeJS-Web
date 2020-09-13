function calculateVat(money, vat) {
    return vat/100 * money
}

function sayHello() {
    console.log("Hello Aphiwit!")
}

module.exports = {
    calculateVat,
    sayHello
}