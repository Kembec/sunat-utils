# Sunat Utils

`Sunat Utils` es una biblioteca desarrollada para simplificar y automatizar las validaciones y cálculos comúnmente requeridos por la Superintendencia Nacional de Aduanas y de Administración Tributaria (SUNAT) en Perú. Originalmente creada para un proyecto personal, ahora se ofrece de manera abierta con la esperanza de que pueda ser de utilidad para otros desarrolladores que trabajen con requerimientos tributarios peruanos.

## Características

La biblioteca ofrece las siguientes funcionalidades:

### Validación de RUC

Permite verificar si un número de RUC es válido utilizando el algoritmo módulo 11.

```typescript
import { Sunat } from 'sunat-utils';

Sunat.ruc().isValid("20131312955");
```

### Validación de DNI

Facilita la validación de un DNI verificando la cantidad correcta de caracteres.

```typescript
import { Sunat } from 'sunat-utils';

Sunat.dni().isValid("23412341");
```

### Calculadora de IGV

Proporciona métodos para calcular el IGV tanto a partir de la base imponible como del total, incluyendo la posibilidad de definir una tasa de IGV específica.

```typescript
import { Sunat } from 'sunat-utils';

// Calcular el total incluyendo IGV a partir de la base imponible
Sunat.igv().fromBase(100).getTotal();

// Calcular la base imponible a partir del total
Sunat.igv().fromTotal(118).getBase();

// Definir un % de IGV específico y calcular el total
Sunat.igv().setIgvRate(10).fromBase(100).getTotal();
```

### Formateo de Moneda

Ofrece herramientas para el formateo de cantidades monetarias en Soles (PEN) y Dólares Americanos (USD).

```typescript
import { Sunat } from 'sunat-utils';

Sunat.currency().formatSoles(121314);
Sunat.currency().formatDollars(142123);
```

## Instalación

Puedes instalar `Sunat Utils` usando npm:

```sh
npm install @kembec/sunat-utils
```

O mediante yarn:

```sh
yarn add @kembec/sunat-utils
```

## Uso

Para utilizar `Sunat Utils` en tu proyecto, primero debes importar la biblioteca:

```typescript
import { Sunat } from 'sunat-utils';
```

A continuación, puedes acceder a cualquiera de las funcionalidades proporcionadas por la biblioteca como se muestra en los ejemplos de características.

## Contribuciones

Agradecemos tu interés y cualquier contribución que puedas hacer a este proyecto. Dado que mi tiempo para revisar las contribuciones puede ser limitado, te pido paciencia en el proceso de revisión. Sin embargo, valoro mucho tus ideas y sugerencias para expandir y mejorar esta librería. Si tienes alguna, por favor, no dudes en crear un fork del repositorio, implementar tus cambios y enviar un pull request. Haré mi mejor esfuerzo para revisarlo y darle seguimiento tan pronto como me sea posible.

## Licencia

`Sunat Utils` está licenciado bajo [AGPL-3.0](https://opensource.org/licenses/AGPL-3.0). Se permite su uso, modificación y distribución bajo los términos de esta licencia.
