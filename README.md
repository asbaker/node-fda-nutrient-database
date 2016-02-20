# FDA Nutrient Datbase

US Department of Agriculture, Agricultural Research Service, Nutrient Data Laboratory. USDA National Nutrient Database for Standard Reference, Release 28. Version Current:  September 2015.  Internet:  http://www.ars.usda.gov/nea/bhnrc/ndl

This package includes helper functions for processing the FDA Nutrient Database for Standard Reference.


## Fields

The fields are defined on page 44 of the sr28_doc.pdf


| Field              | Description                                 | Example                                                 |
| ------------------ | ------------------------------------------- | ------------------------------------------------------- |
| ndbNo              | primarykey                                  | 9522                                                    |
| shortDescription   | 60 character abbreviated description        | 'CRANBERRY JUC BLEND,100% JUC,BTLD,W/ ADDED VIT C & CA' |
| water              | g/100g                                      | 88.6                                                    |
| calories           | kcal/100g                                   | 45                                                      |
| protein            | g/100g                                      | 0.27                                                    |
| fat                | g/100g                                      | 0.12                                                    |
| ash                | g/100g                                      | 0.1                                                     |
| carbohydrate       | g/100g                                      | 10.91                                                   |
| fiber              | g/100g                                      | 0.1                                                     |
| sugar              | g/100g                                      | 9.8                                                     |
| calcium            | mg/100g                                     | 19                                                      |
| iron               | mg/100g                                     | 0.08                                                    |
| magnesium          | mg/100g                                     | 5                                                       |
| phosphorus         | mg/100g                                     | 8                                                       |
| potassium          | mg/100g                                     | 76                                                      |
| sodium             | mg/100g                                     | 6                                                       |
| zinc               | mg/100g                                     | 0.05                                                    |
| copper             | mg/100g                                     | 0.016                                                   |
| manganese          | mg/100g                                     | 0.067                                                   |
| selenium           | ug/100g                                     | 0.1                                                     |
| vitaminC           | mg/100g                                     | 31.5                                                    |
| thiamin            | mg/100g                                     | 0.005                                                   |
| riboflavin         | mg/100g                                     | 0.015                                                   |
| niacin             | mg/100g                                     | 0.094                                                   |
| pantoAcid          | mg/100g                                     | 0                                                       |
| vitaminB6          | mg/100g                                     | 0.018                                                   |
| folateTotal        | ug/100g                                     | 18                                                      |
| folicAcid          | ug/100g                                     | 0                                                       |
| foodFolate         | ug/100g                                     | 18                                                      |
| folateDFE          | ug/100g                                     | 18                                                      |
| choline            | mg/100g                                     | 1.8                                                     |
| vitaminB12         | ug/100g                                     | 0                                                       |
| vitaminAIU         | IU/100g                                     | 25                                                      |
| vitaminARAE        | ug retinol activity equivalents/100g        | 1                                                       |
| retinol            | ug/100g                                     | 0                                                       |
| alphaCarot         | ug/100g                                     | 0                                                       |
| betaCarot          | ug/100g                                     | 15                                                      |
| betaCrypt          | ug/100g                                     | 0                                                       |
| lycopene           | ug/100g                                     | 0                                                       |
| luteinZeazanthin   | ug/100g                                     | 68                                                      |
| vitaminE           | mg/100g                                     | 0.01                                                    |
| vitaminDMCG        | ug/100g                                     | 0                                                       |
| vitaminDIU         | IU/100g                                     | 0                                                       |
| vitaminK           | ug/100g                                     | 0                                                       |
| saturatedFat       | g/100g                                      | 0.002                                                   |
| monosaturatedFat   | g/100g                                      | 0.002                                                   |
| polyunsaturatedFat | g/100g                                      | 0.002                                                   |
| cholesterol        | mg/100g                                     | 0                                                       |
| weight1            | W in the Weights and Measures formula below | 200                                                     |
| weight1Description | Description of weight 1                     | '6.75 fl oz'                                            |
| weight2            | W in the Weights and measures formula below | 240                                                     |
| weight2Description | Description of weight 2                     | '8 fl oz'                                               |
| refusePercent      | Percent Refuse                              | 0                                                       |


## Weights and Measures
(From page 31 of sr28_doc.pdf)

Information is provided on household measures for food items (for example, 1 cup, 1 tablespoon, 1 fruit, 1 leg). Weights are given for edible material without refuse, that is, the weight of an apple without the core or stem, or a chicken leg without the bone, and so forth. The Weight file contains the gram weights and measure descriptions for each food item. This file can be used to calculate nutrient values for food portions from the values provided per 100 g of food. The following formula is used to calculate the nutrient content per household measure:
```
N = (V*W)/100

N = nutrient value per household measure,
V = nutrient value per 100 g (Nutr_Val in the Nutrient Data file), and W = g weight of portion (Gm_Wgt in the Weight file).

```

The Weight file can be used to produce reports showing the household measure and nutrient values calculated for that portion. The weights are derived from published sources, industry files, studies conducted by USDA (Adams, 1975; Fulton et al., 1977), and the weights and measures used in the FNDDS (2014). However, weight information is not available for all food items in the database. Though special efforts have been made to provide representative values, weights and measures obtained from different sources vary considerably for some foods.


## Usage

```
const fda = require('fda-nutrient-database')

nutrients = fda.abbreviated(cb)
// This invokes the callback with an array of objects from the abreviated datafile

{
  ndbNo: 9522,
  shortDescription: 'CRANBERRY JUC BLEND,100% JUC,BTLD,W/ ADDED VIT C & CA',
  water: 88.6,
  calories: 45,
  protein: 0.27,
  fat: 0.12,
  ash: 0.1,
  carbohydrate: 10.91,
  fiber: 0.1,
  sugar: 9.8,
  calcium: 19,
  iron: 0.08,
  magnesium: 5,
  phosphorus: 8,
  potassium: 76,
  sodium: 6,
  zinc: 0.05,
  copper: 0.016,
  manganese: 0.067,
  selenium: 0.1,
  vitaminC: 31.5,
  thiamin: 0.005,
  riboflavin: 0.015,
  niacin: 0.094,
  pantoAcid: 0,
  vitaminB6: 0.018,
  folateTotal: 18,
  folicAcid: 0,
  foodFolate: 18,
  folateDFE: 18,
  choline: 1.8,
  vitaminB12: 0,
  vitaminAIU: 25,
  vitaminARAE: 1,
  retinol: 0,
  alphaCarot: 0,
  betaCarot: 15,
  betaCrypt: 0,
  lycopene: 0,
  luteinZeazanthin: 68,
  vitaminE: 0.01,
  vitaminDMCG: 0,
  vitaminDIU: 0,
  vitaminK: 0,
  saturatedFat: 0.002,
  monosaturatedFat: 0.002,
  polyunsaturatedFat: 0.002,
  cholesterol: 0,
  weight1: 200,
  weight1Description: '6.75 fl oz',
  weight2: 240,
  weight2Description: '8 fl oz',
  refusePercent: 0
}
```

