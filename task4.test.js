const capitalize = require('./task4.js');

test('"hola" should return "hello"', ()=> {
//Arrange
const str = "hello";
//Act
const capitali = capitalize(str);
//Asset
expect(capitali).toMatch(/hello/)
})