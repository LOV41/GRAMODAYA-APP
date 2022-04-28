/**
 * 
 * @param {number} convFctr - The conversion factor to kg
 * @param {number} price - Price corresponding to that unit
 */
function priceInKgConverter(convFctr, price){
    return price/convFctr
}

module.exports = {
    priceInKgConverter
}