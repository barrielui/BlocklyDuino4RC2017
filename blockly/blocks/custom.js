

goog.provide('Blockly.Blocks.custom');

goog.require('Blockly.Blocks');


Blockly.Blocks['pwm_set'] = { //rename block name at this line		
//Created with reference to 'https://github.com/BlocklyDuino/BlocklyDuino/blob/gh-pages/blockly/blocks/base.js','http://www.seeedstudio.com/depot/emax-9g-es08a-high-sensitive-mini-servo-p-760.html?'
		helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
        .appendField("adafruit servo")
        .appendField(new Blockly.FieldImage("http://www.jameco.com/Jameco/Products/MakeImag/2128198.jpg", 64, 64)) 
        .appendField("PIN#")
        .appendField(new Blockly.FieldDropdown([ 
                                                 [ "0", "0" ], [ "1", "1" ], [ "2", "2" ], [ "3", "3" ], [ "4", "4" ], [ "5", "5" ], [ "6", "6" ], [ "7", "7" ], [ "8", "8" ] ]), "PIN")
    this.appendValueInput("PULSELENGTH", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pulselength");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('enter a pulse length'); //rename 
  }
};


Blockly.Blocks['pwm_moveTo'] = { //rename block name at this line		
		//Created with reference to 'https://github.com/BlocklyDuino/BlocklyDuino/blob/gh-pages/blockly/blocks/base.js','http://www.seeedstudio.com/depot/emax-9g-es08a-high-sensitive-mini-servo-p-760.html?'
				helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',
		  init: function() {
		    this.setColour(190);
		    this.appendDummyInput()
		        .appendField("Adafruit Servo")
		        .appendField(new Blockly.FieldImage("http://www.jameco.com/Jameco/Products/MakeImag/2128198.jpg", 64, 64)) 
		        .appendField("PIN#")
		        .appendField(new Blockly.FieldDropdown([ 
		                                                 [ "0", "0" ], [ "1", "1" ], [ "2", "2" ], [ "3", "3" ], [ "4", "4" ], [ "5", "5" ], [ "6", "6" ], [ "7", "7" ], [ "8", "8" ] ]), "PIN")
		    this.appendValueInput("DEGREE", 'Number')
		        .setCheck('Number')
		        .setAlign(Blockly.ALIGN_RIGHT)
		        .appendField("Degree");
		    this.setPreviousStatement(true, null);
		    this.setNextStatement(true, null);
		    this.setTooltip('Choose the servo and enter the target degree: '); 
		  }
		};

Blockly.Blocks['BTReceive'] = {
		  helpUrl: 'http://www.arduino.cc/en/Serial/Print',
		  init: function() {
		    this.setColour(230);
		    this.appendValueInput("CONTENT", 'String')
		        .appendField("Bluetooth Receive");
		    this.setPreviousStatement(false, null);
		    this.setNextStatement(false, null);
		    this.setTooltip('Start reading serial message from Bluetooth, and store the received message as: ');
		  }
		};
