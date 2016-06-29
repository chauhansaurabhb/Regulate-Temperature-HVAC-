var mqtt=require('mqtt');
var client=mqtt.connect('mqtt://test.mosquitto.org:1883');
function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

setInterval(function(){
	var value={"tempValue":randomInt(20,40),"unitofMeasurement":"C"};
	client.publish('tempMeasurement',JSON.stringify(value));	
	console.log("Publishing Data "+value.tempValue +" "+ value.unitofMeasurement);
},5000);
