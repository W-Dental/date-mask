# date-mask
[![DeepScan grade](https://deepscan.io/api/teams/9337/projects/11811/branches/175572/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=9337&pid=11811&bid=175572)
[![codecov](https://codecov.io/gh/W-Dental/date-mask/branch/master/graph/badge.svg)](https://codecov.io/gh/W-Dental/date-mask)
![Minified Size](https://img.shields.io/bundlephobia/min/@w.dental/date-mask)
![Minzipped Size](https://img.shields.io/bundlephobia/minzip/@w.dental/date-mask)

Lib for using as maks for date input
Lib para ser usada como máscara de entrada de data

## Installation | Instalação
`npm i @w.dental/date-mask`
### CDN Installation | Instalação via CDN
This package is available on CDNs too ([JSDelivr](https://www.jsdelivr.com/) and [UNPKG](https://unpkg.com/)).

```html
<!-- Using JSDelivr -->
<script src="https://cdn.jsdelivr.net/npm/@w.dental/date-mask"></script>

<!-- Using UNPKG -->
<script src="https://unpkg.com/@w.dental/date-mask"></script>

<script>
  const selectedDate = dateMask('13081992');
  console.log(selectedDate); // => 13/08/1992
</script>
```

## How to use | Como usar
 ```import dateMask from date-mask;```

    The used params must be string and must be a valid value with these patterns: DD/MM/YYYY or MM/DD/YYYY 
    O parâmetro usado tem que ser do tipo string e deve ser um valor válido com estes padrões: DD/MM/YYYY ou MM/DD/YYYY
 ```const date: string = dateMask('13081992');```

    If not be a valid value, it will throw an error
    Caso não seja um valor válido, ele irá disparar um erro 
 ``` 'You must to pass a digits as string with pattern DD/MM/YYYY or MM/DD/YYYY'```   

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FW-Dental%2Fdate-mask.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FW-Dental%2Fdate-mask?ref=badge_shield)