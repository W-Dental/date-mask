# credit-card-name
    Lib for get credit card flag by initials numbers
    Lib para pegar bandeira do cartão de crédito pelos números iniciais

## Funcionamento:
 ``import getCreditCardOperatorByInitalsNumber from credit-card-name;``

    The used params must be string and must be a valid value
    O parâmetro usado tem que ser do tipo string e deve ser um valor válido
 ``const creditCardFlag: string = getCreditCardOperatorByInitalsNumber('4230 9130 2912 1023');``

    If not be a valid value, it will throw an error
    Caso não seja um valor válido, ele irá disparar um erro 
 `` {YOUR_VALUE} is an invalid value or type, please see documentations for more infos!``   

# Dependencies
* node >= 12

# Configuration
1. Install packages using `npm i`
2. Update package's name and description on `package.json`
3. Update {{LIB_NAME}} on `.bilirc.ts`