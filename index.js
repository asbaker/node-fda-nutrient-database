const fs = require('fs');
const _ = require('lodash');

module.exports = {
  abbreviated(cb) {
    var data = [];

    var lineReader = require('readline').createInterface({
      input: require('fs').createReadStream('data/ABBREV.txt')
    });

    lineReader.on('line', function (line) {
      data.push(line);
    });

    lineReader.on('close', function() {
      cb(data);
    });
  },
  _parseLineToObject(line) {
    var fields = _.split(line, '^');
    var strippedFields = _.map(fields, function(field) {
      return _.trim(field, '~');
    });

    return {
      ndbNo: _.toInteger(strippedFields[0]),
      shortDescription: strippedFields[1],
      water: _.toNumber(strippedFields[2]),
      calories: _.toNumber(strippedFields[3]),
      protein: _.toNumber(strippedFields[4]),
      fat: _.toNumber(strippedFields[5]),
      ash: _.toNumber(strippedFields[6]),
      carbohydrate: _.toNumber(strippedFields[7]),
      fiber: _.toNumber(strippedFields[8]),
      sugar: _.toNumber(strippedFields[9]),
      calcium: _.toNumber(strippedFields[10]),
      iron: _.toNumber(strippedFields[11]),
      magnesium: _.toNumber(strippedFields[12]),
      phosphorus: _.toNumber(strippedFields[13]),
      potassium: _.toNumber(strippedFields[14]),
      sodium: _.toNumber(strippedFields[15]),
      zinc: _.toNumber(strippedFields[16]),
      copper: _.toNumber(strippedFields[17]),
      manganese: _.toNumber(strippedFields[18]),
      selenium: _.toNumber(strippedFields[19]),
      vitaminC: _.toNumber(strippedFields[20]),
      thiamin: _.toNumber(strippedFields[21]),
      riboflavin: _.toNumber(strippedFields[22]),
      niacin: _.toNumber(strippedFields[23]),
      pantoAcid: _.toNumber(strippedFields[24]),
      vitaminB6: _.toNumber(strippedFields[25]),
      folateTotal: _.toNumber(strippedFields[26]),
      folicAcid: _.toNumber(strippedFields[27]),
      foodFolate: _.toNumber(strippedFields[28]),
      folateDFE: _.toNumber(strippedFields[29]),
      choline: _.toNumber(strippedFields[30]),
      vitaminB12: _.toNumber(strippedFields[31]),
      vitaminAIU: _.toNumber(strippedFields[32]),
      vitaminARAE: _.toNumber(strippedFields[33]),
      retinol: _.toNumber(strippedFields[34]),
      alphaCarot: _.toNumber(strippedFields[35]),
      betaCarot: _.toNumber(strippedFields[36]),
      betaCrypt: _.toNumber(strippedFields[37]),
      lycopene: _.toNumber(strippedFields[38]),
      luteinZeazanthin: _.toNumber(strippedFields[39]),
      vitaminE: _.toNumber(strippedFields[40]),
      vitaminDMCG: _.toNumber(strippedFields[41]),
      vitaminDIU: _.toNumber(strippedFields[42]),
      vitaminK: _.toNumber(strippedFields[43]),
      saturatedFat: _.toNumber(strippedFields[44]),
      monosaturatedFat: _.toNumber(strippedFields[45]),
      polyunsaturatedFat: _.toNumber(strippedFields[46]),
      cholesterol: _.toNumber(strippedFields[47]),
      weight1: _.toNumber(strippedFields[48]),
      weight1Description: strippedFields[49],
      weight2: _.toNumber(strippedFields[50]),
      weight2Description: strippedFields[51],
      refusePercent: _.toNumber(strippedFields[52])
    }

  }


}
