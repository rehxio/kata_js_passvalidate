const { validate } = require("../src")

/*TODO 
   - "" => false
    "AAAAAA" => false
    "aaaaaa" => false
    "AAAAA1" => false
    "aaaaa1" => false
    "Aa1" => false, deben ser 6 caracteres
    "Aaaaa1" => true
*/

describe('Password Validation', () =>{
   test('Should be false is empty', () => {
      expect(validate('')).toBe(false)
   })
   test('Should be false if not contains number and mayus', () => {
      expect(validate('aaaaaa')).toBe(false)
   })
   test('Should be false if not contains number and minus', () => {
      expect(validate('AAAAAA')).toBe(false)
   })
   test('Should be false if not contains minus', () => {
      expect(validate('AAAAA1')).toBe(false)
   })
   test('Should be false if not contains at less 6 characters', () => {
      expect(validate('Aa1')).toBe(false)
   })
   test.skip('Complex password should be valid', () => {
      expect(validate('Aaaaaa1')).toBe(true)
   })
})