import "./app.js"

test("One euro should be 1.206 dollars", function(){
    
    const { fromEuroToDollar } = require('./app.js')

    
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test('One dollar should be 106.58 yens', () => {
    
    const { fromDollarToYen } = require('./app.js')
    const yens = fromDollarToYen(5)
    const expected = (5/1.2)*127.9

    expect(yens).toBe(expected);
});

test('One yen should be 0.006 pounds', () => {

    const { fromYenToPound } = require('./app.js')
    const pounds = fromYenToPound(300)
    const expected = (300/127.9)*0.8

    expect(pounds).toBe(expected);
});