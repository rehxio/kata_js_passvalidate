const { validate } = require("../src")

/*TODO 
   - "" => false
    "asas" => false
    "Aaaaaa" => false
    "AAAAA1" => false
    "aaaaa1" => false
    "Aa1" => false, deben ser 6 caracteres
    "Aaaaa1" => true
*/

describe('Password Validation', () =>{
   test('Should be false is empty', () => {
      expect(validate('')).toBe(false)
   })
   test('Should be false if all characters mins', () => {
      expect(validate('aaaaaa')).toBe(false)
   })
   test('Should be false if all characters mayus', () => {
      expect(validate('AAAAAA')).toBe(false)
   })
   test.skip('Complex password should be valid', () => {
      expect(validate('Aaaaaa1')).toBe(true)
   })
})