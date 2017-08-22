var output6 = []
var output7 = []

//var arrContinents = ["africa", "europe", "northAmerica", "southAmerica", "australia", "asia"]
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('Table1.3_g20_2013.csv')
})

var myWriteStream6= require("fs").createWriteStream("Continent.json")
lineReader.on('line', function (line) {
  var jsonFromLine6 = {}

  // this is my conditional. Set line 2
    var lineSplit = line.split(',')
    // select columns you want
    //jsonFromLine.Continent=lineSplit[0]
    
  if(lineSplit[0]=="Australia"){
    	jsonFromLine6.Continent="Australia"
    	jsonFromLine6.Population=lineSplit[5]
    output6.push(jsonFromLine6)
   
}
 if(lineSplit[0]=="India" || lineSplit[0]=="China" || lineSplit[0]=="Japan" || lineSplit[0]=="Indonesia" || lineSplit[0]=="Saudi Arabia" 
	|| lineSplit[0]=="Turkey" || lineSplit[0]=="Republic of Korea"){
	jsonFromLine6.Continent="Asia"
	jsonFromLine6.Population=lineSplit[5]

	output6.push(jsonFromLine6)
	output7.push(jsonFromLine6)
}

    })

lineReader.on('close', function (line) {
var r = output7.reduce((c,data)=>{
	if(data.Continent=="Asia")
c+=parseFloat(data.Population)
return c
}, 0)
console.log(r)
output6[1].Population=r
if(output6[1]){
	//console.log(output6[1].Population)
	myWriteStream6.write(JSON.stringify(output6,null,2))
    myWriteStream6.write(JSON.stringify(r,null,2))
}
})