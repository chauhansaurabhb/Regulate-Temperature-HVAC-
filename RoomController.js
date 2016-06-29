var mqtt = require('mqtt'); 
var client = mqtt.connect('mqtt://test.mosquitto.org:1883');
client.subscribe('roomAvgTempMeasurement'); 
client.on('message', function(topic, payload) { 
	if (topic.toString() == "roomAvgTempMeasurement") {
		var sensorMeasurement = JSON.parse(payload);
		tempMeasurement = sensorMeasurement.tempValue;
		if(tempMeasurement > 40 && tempMeasurement < 25){
			var data = {
					"tempValue" : tempMeasurement,
					"unitOfMeasurement" : "C"
				};
			client.publish('setTemp', JSON.stringify(data));	
		}
		
	}
}); 