var mqtt = require('mqtt'); 
var client = mqtt.connect('mqtt://test.mosquitto.org:1883');
client.subscribe('setTemp'); 
client.on('message', function(topic, payload) { 
	if (topic.toString() == "setTemp") {
		var sensorMeasurement = JSON.parse(payload);
		tempMeasurement = sensorMeasurement.tempValue;
		console.log("Heater is set to 30 C temperature");	
	}
}); 