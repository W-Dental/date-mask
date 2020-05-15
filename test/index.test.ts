import getCreditCardOperatorByInitalsNumber from '../src';

describe('#getCreditCardOperatorByInitalsNumber', () => {
  describe('success cases', () => {
    test.each`
    payload                     |     expected
    ${'401200'}                 |     ${'visa'}
    ${'545301'}                 |     ${'mastercard'}
    ${'376449'}                 |     ${'amex'}
    ${'636297'}                 |     ${'elo'}
    ${'6362 9723 1234 12442'}   |     ${'elo'}
    ${'507860'}                 |     ${'aura'}
    ${'384100'}                 |     ${'hipercard'}
`('getCreditCardOperatorByInitalsNumber should return $expected', ({ payload, expected }) => {
      expect(getCreditCardOperatorByInitalsNumber(payload)).toEqual(expected)
    });
  })

  describe('exceptions cases', () => {
    test.each`
    payload       |   expected 
    ${'123123'}   |   ${'123123'} 
    ${'teste'}    |   ${'teste'}  
    ${939321}     |   ${939321}   
    ${401200}     |   ${401200}   
    ${''}         |   ${''}       
    ${null}       |   ${null}     
    ${undefined}  |   ${''}
`('getCreditCardOperatorByInitalsNumber should throw an error with $expected prefix', async ({ payload, expected }) => {
      expect(() => { getCreditCardOperatorByInitalsNumber(payload) }).toThrow(`${expected} is an invalid value or type, please see documentations for more infos!`)
    });

  })


});
