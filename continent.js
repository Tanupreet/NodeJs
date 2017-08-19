const readline = require('readline');
const fs = require('fs');
var i = 0,
    count = 0;
var indexCountry, indexGDP, indexPopulation10, indexPopulation13;
var indexPurchasingPowerByCountry13, indexPurchasingPowerByCountry10;
var country, population10, population13;
var GDP, indexGDP10;
var purchasingPowerByCountry10, purchasingPowerByCountry13;
var GrowthArray = [];
var populationArray = [];
var GDPArray = [];
var purchasingPowerByCountryArray = [];
var countryArray = [];
var populationGrowth, purchasingPowerGrowth;
var limit, limit1, index, index1;
var asiaContinent = ['India', 'China', 'Japan', 'Indonesia'];
var europeContinent = ['France', 'Russia', 'UK', 'Italy'];
var northAmericaContinent = ['Japan', 'Mexico', 'canada', 'USA'];
var southAmericaContinent = ['Saudi Arabia', 'Republic of Korea', 'Turkey'];
var australiaContinent = ['United Kingdom', 'Australia'];
var africaContinent = ['South Africa', 'Argentina', 'Brazil'];
var aggregateArray = [];
var arrContinentwisePopulation = [0, 0, 0, 0, 0, 0];
var arrContinentwiseGDP = [0, 0, 0, 0, 0, 0];
var arrContinents = ["africa", "europe", "northAmerica", "southAmerica", "australia", "asia"];
const rl = readline.createInterface({
    input: fs.createReadStream('Table1.3_g20_2013.csv')
});

function aggregate(arrContinents, arrContinentwisePopulation, arrContinentwiseGDP) {
    this.continent = arrContinents;
    this.population = arrContinentwisePopulation;
    this.GDP = arrContinentwiseGDP;
  }

 rl.on('line', function(line) {
    var lineRecords = line.trim().split(',');;

    if (i < 1) {
        indexCountry = lineRecords.indexOf('Country Name');
       // indexPopulation10 = lineRecords.indexOf('Population (Millions) 2010');
        indexPopulation13 = lineRecords.indexOf('Population (Millions) 2013');
        indexGDP = lineRecords.indexOf('GDP Billions (USD) 2013');
       // indexGDP10 = lineRecords.indexOf('GDP Billions (USD) 2010');
        indexPurchasingPowerByCountry10 = lineRecords.indexOf('Purchasing Power in Billions ( Current International Dollar) - 2010');
        indexPurchasingPowerByCountry13 = lineRecords.indexOf('Purchasing Power in Billions ( Current International Dollar) - 2013');
        i++;
    }

    GDPArray.sort(function(a, b) {
                return parseFloat(b.GDP) - parseFloat(a.GDP)
            });
            purchasingPowerByCountryArray.sort(function(a, b) {
                return parseFloat(b.purchasingPowerByCountry13) - parseFloat(a.purchasingPowerByCountry13)
            });
           


             index = parseInt(indexPopulation10);
            index1 = parseInt(indexGDP10);

            limitpop = indexPopulation10 + parseInt(6);
            limitGDP = indexGDP10+ parseInt(6);
            for (index = indexPopulation10; index < limitpop; index++) {
                if (africaContinent.indexOf(country) > -1) {
                    continent = arrContinents[0];
                    arrContinentwisePopulation[0] = parseFloat(arrContinentwisePopulation[0]) + parseFloat(lineRecords[index]);

                } else if (europeContinent.indexOf(country) > -1) {
                    continent = arrContinents[1];
                    arrContinentwisePopulation[1] = parseFloat(arrContinentwisePopulation[1]) + parseFloat(lineRecords[index]);
                } else if (northAmericaContinent.indexOf(country) > -1) {
                    continent = arrContinents[2];
                    arrContinentwisePopulation[2] = parseFloat(arrContinentwisePopulation[2]) + parseFloat(lineRecords[index]);

                } else if (southAmericaContinent.indexOf(country) > -1) {
                    continent = arrContinents[3];
                    arrContinentwisePopulation[3] = parseFloat(arrContinentwisePopulation[3]) + parseFloat(lineRecords[index]);

                } else if (australiaContinent.indexOf(country) > -1) {
                    continent = arrContinents[4];
                    arrContinentwisePopulation[4] = parseFloat(arrContinentwisePopulation[4]) + parseFloat(lineRecords[index]);

                } else if (asiaContinent.indexOf(country) > -1) {
                    continent = arrContinents[5];

                    arrContinentwisePopulation[5] = parseFloat(arrContinentwisePopulation[5]) + parseFloat(lineRecords[index]);

                }
            }

             for (index1 = indexGDP10; index1 < limitGDP; index1++) {
                if (africaContinent.indexOf(country) > -1) {
                    continent = arrContinents[0];
                    arrContinentwiseGDP[0] = parseFloat(arrContinentwiseGDP[0]) + parseFloat(lineRecords[index1]);


                } else
                if (europeContinent.indexOf(country) > -1) {
                    continent = arrContinents[1];
                    arrContinentwiseGDP[1] = parseFloat(arrContinentwiseGDP[1]) + parseFloat(lineRecords[index1]);

                } else if (northAmericaContinent.indexOf(country) > -1) {
                    continent = arrContinents[2];
                    arrContinentwiseGDP[2] = parseFloat(arrContinentwiseGDP[2]) + parseFloat(lineRecords[index1]);

                } else if (southAmericaContinent.indexOf(country) > -1) {
                    continent = arrContinents[3];
                    arrContinentwiseGDP[3] = parseFloat(arrContinentwiseGDP[3]) + parseFloat(lineRecords[index1]);

                } else if (australiaContinent.indexOf(country) > -1) {

                    continent = arrContinents[4];
                    arrContinentwiseGDP[4] = parseFloat(arrContinentwiseGDP[4]) + parseFloat(lineRecords[index]);

                } else if (asiaContinent.indexOf(country) > -1) {
                    continent = arrContinents[5];
                    arrContinentwiseGDP[5] = parseFloat(arrContinentwiseGDP[5]) + parseFloat(lineRecords[index]);

                }

            }

            if (country.length == 0) {
                for (var it = 0; it < 6; it++) {
                    aggregateArray.push(new aggregate(arrContinents[it], arrContinentwisePopulation[it], arrContinentwiseGDP[it]));
                }
                fs.writeFile("aggregate.json", JSON.stringify(aggregateArray), encoding = "utf8");
            }

            fs.writeFile("pop.json", JSON.stringify(populationArray), encoding = "utf8");
            fs.writeFile("gdpgdp.json", JSON.stringify(GDPArray), encoding = "utf8");
            fs.writeFile("Pur.json", JSON.stringify(purchasingPowerByCountryArray), encoding = "utf8");
            fs.writeFile("GrowthChart.json", JSON.stringify(GrowthArray), encoding = "utf8");
});