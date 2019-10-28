

goog.provide('Blockly.Arduino.custom');

goog.require('Blockly.Arduino');


Blockly.Arduino.pwm_set = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var value_degree = Blockly.Arduino.valueToCode(this, 'PULSELENGTH', Blockly.Arduino.ORDER_ATOMIC);
	  
  Blockly.Arduino.definitions_['define_pwm'] = '#include <Wire.h> \n  #include <Adafruit_PWMServoDriver.h> \n  Adafruit_PWMServoDriver pwm = Adafruit_PWMServoDriver(); \n  #define SERVOMIN  119 \n  #define SERVOMAX  445 \n  uint8_t servonum = 0;';
  
  Blockly.Arduino.setups_['setup_pwm_' + dropdown_pin] = 'Serial.begin(9600); \n  Serial.println("Created by EIE, HKPU"); \n  pwm.begin(); \n  pwm.setPWMFreq(50);';

  var code = 'pwm.setPWM(' + dropdown_pin + ', 0, ' + value_degree + ');\n';
  return code;
};
	
	
Blockly.Arduino.pwm_moveTo = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['define_pwm'] = '#include <Wire.h> \n#include <Adafruit_PWMServoDriver.h> \nAdafruit_PWMServoDriver pwm = Adafruit_PWMServoDriver();';
  
  Blockly.Arduino.setups_['setup_pwm_'] = 'Serial.begin(9600); \n  int pulselength; \n  pwm.begin(); \n  pwm.setPWMFreq(50);';

  var code = 'pwm.setPWM(' + dropdown_pin + ', 0, map(' + value_degree + ', 0, 180, 119, 445)); \n';
  return code;
};


Blockly.Arduino.BTReceive = function() {

	Blockly.Arduino.setups_['setup_serial_' + profile.default.serial] = 'Serial.begin(' + profile.default.serial + ');\n';
	  
	  var branch = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC)
	  var code = 'if (Serial.available()>0) {\n  ' + branch + ' = Serial.read(); \n}';
	  return code + '\n';
	};