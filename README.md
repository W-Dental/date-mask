# date-mask
    Lib for using as maks for date input
    Lib para ser usada como máscara de entrada de data

## Funcionamento
 ``import dateMask from date-mask;``

    The used params must be string and must be a valid value with these patterns: DD/MM/YYYY or MM/DD/YYYY 
    O parâmetro usado tem que ser do tipo string e deve ser um valor válido com estes padrões: DD/MM/YYYY ou MM/DD/YYYY
 ``const date: string = dateMask('13081992');``

    If not be a valid value, it will throw an error
    Caso não seja um valor válido, ele irá disparar um erro 
 `` 'You must to pass a digits as string with pattern DD/MM/YYYY or MM/DD/YYYY'``   

## Dependencies
   * node >= 12

## Configuration
1. Install packages using `npm i`
2. Update package's name and description on `package.json`
3. Update {{LIB_NAME}} on `.bilirc.ts`