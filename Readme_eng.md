# Sunat Utils

`Sunat Utils` is a library developed to simplify and automate validations and calculations commonly required by the National Superintendency of Customs and Tax Administration (SUNAT) in Peru. Originally created for a personal project, it is now openly offered in the hope that it can be useful to other developers working with Peruvian tax requirements.

## Features

The library offers the following functionalities:

### RUC Validation

Allows verifying if a RUC number is valid using the modulo 11 algorithm.

```typescript
import { Sunat } from 'sunat-utils';

Sunat.ruc().isValid("20131312955");
```

### DNI Validation

Facilitates the validation of a DNI by checking the correct number of characters.

```typescript
import { Sunat } from 'sunat-utils';

Sunat.dni().isValid("23412341");
```

### IGV Calculator

Provides methods to calculate the IGV (General Sales Tax) both from the taxable base and from the total, including the possibility of defining a specific IGV rate.

```typescript
import { Sunat } from 'sunat-utils';

// Calculate the total including IGV from the taxable base
Sunat.igv().fromBase(100).getTotal();

// Calculate the taxable base from the total
Sunat.igv().fromTotal(118).getBase();

// Set a specific IGV % and calculate the total
Sunat.igv().setIgvRate(10).fromBase(100).getTotal();
```

### Currency Formatting

Offers tools for formatting monetary amounts in Soles (PEN) and US Dollars (USD).

```typescript
import { Sunat } from 'sunat-utils';

Sunat.currency().formatSoles(121314);
Sunat.currency().formatDollars(142123);
```

## Installation

You can install `Sunat Utils` using npm:

```sh
npm install @kembec/sunat-utils
```

Or with yarn:

```sh
yarn add @kembec/sunat-utils
```

## Usage

To use `Sunat Utils` in your project, you must first import the library:

```typescript
import { Sunat } from 'sunat-utils';
```

Then, you can access any of the functionalities provided by the library as shown in the feature examples.

## Contributions

We appreciate your interest and any contribution you can make to this project. Since my time to review contributions may be limited, I ask for your patience in the review process. However, I greatly value your ideas and suggestions for expanding and improving this library. If you have any, please do not hesitate to create a fork of the repository, implement your changes, and send a pull request. I will do my best to review it and follow up as soon as possible.

## License

`Sunat Utils` is licensed under the [AGPL-3.0](https://opensource.org/licenses/AGPL-3.0). Its use, modification, and distribution are allowed under the terms of this license.

