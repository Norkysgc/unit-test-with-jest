
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = euro => euro * oneEuroIs.USD
const fromDollarToYen = dollar => (dollar / oneEuroIs.USD) * oneEuroIs.JPY
const fromYenToPound = yen => (yen / oneEuroIs.JPY) * oneEuroIs.GBP

module.exports = { fromEuroToDollar , fromDollarToYen , fromYenToPound }
