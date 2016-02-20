# FDA Nutrient Datbase

US Department of Agriculture, Agricultural Research Service, Nutrient Data Laboratory. USDA National Nutrient Database for Standard Reference, Release 28. Version Current:  September 2015.  Internet:  http://www.ars.usda.gov/nea/bhnrc/ndl

This package includes helper functions for processing the FDA Nutrient Database for Standard Reference.

## Usage

```
const fda = require('fda-nutrient-database')

nutrients = fda.abbreviated()
// This returns an array of objects from the abreviated datafile
// { //TODO example object goes here }
