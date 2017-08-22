var output6 = []
var count = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]
var arrContinents = ["Africa", "Europe", "NorthAmerica", "SouthAmerica", "Australia", "Asia"]
var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('Table1.3_g20_2013.csv')
})
var myWriteStream6 = require("fs").createWriteStream("Continent.json")
lineReader.on('line', function(line) {
    var lineSplit = line.split(',')
    if (lineSplit[0] == "South Africa") {
        count[0][0] += parseFloat(lineSplit[5])
        count[1][0] += parseFloat(lineSplit[9])
    } else if (lineSplit[0] == 'Germany' || lineSplit[0] == "Italy" || lineSplit[0] == "France" || lineSplit[0] == "Russia") {
        count[0][1] += parseFloat(lineSplit[5])
        count[1][1] += parseFloat(lineSplit[9])
    } else if (lineSplit[0] == 'USA' || lineSplit[0] == "Canada" || lineSplit[0] == "Mexico") {
        count[0][2] += parseFloat(lineSplit[5])
        count[1][2] += parseFloat(lineSplit[9])
    } else if (lineSplit[0] == 'Brazil' || lineSplit[0] == "Argentina") {
        count[0][3] += parseFloat(lineSplit[5])
        count[1][3] += parseFloat(lineSplit[9])
    } else if (lineSplit[0] == "Australia") {
        count[0][4] += parseFloat(lineSplit[5])
        count[1][4] += parseFloat(lineSplit[9])
    } else if (lineSplit[0] == "India" || lineSplit[0] == "China" || lineSplit[0] == "Japan" || lineSplit[0] == "Indonesia" || lineSplit[0] == "Saudi Arabia" ||
        lineSplit[0] == "Turkey" || lineSplit[0] == "Republic of Korea") {
        count[0][5] += parseFloat(lineSplit[5])
        count[1][5] += parseFloat(lineSplit[9])
    }
})
lineReader.on('close', function(line) {
    for (i = 0; i < 6; i++) {
        var result = {
            Continent: arrContinents[i],
            Population: count[0][i],
            GDP: count[1][i]
        }
        output6.push(result)
    }
    myWriteStream6.write(JSON.stringify(output6, null, 2))
})