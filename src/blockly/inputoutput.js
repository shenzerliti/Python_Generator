import "blockly/blocks";
import { pythonGenerator } from "blockly/python";
import * as Blockly from "blockly/core";


Blockly.Blocks['varnum'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(" # to insert a no. or string");
        this.setOutput(true, null);
        this.setColour('#D15C08');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

pythonGenerator.forBlock['varnum'] = function(block) {
    var text_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_FUNCTION_CALL) || '""';
    var code = text_name;
    return [code, pythonGenerator.ORDER_FUNCTION_CALL];
};


Blockly.Blocks['inputno'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["int","int"], ["float","float"], ["complex","complex"]]), "abc")
            .appendField("input (");
        this.appendValueInput("NAME")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(") # to input a number");
        this.setOutput(true, null);
        this.setColour('#D15C08');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

pythonGenerator.forBlock['inputno'] = function(block) {
    var dropdown_abc = block.getFieldValue('abc');
    var text_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_FUNCTION_CALL) || '""';
    var code = dropdown_abc + '(input(' + text_name + '))';
    return [code, pythonGenerator.ORDER_FUNCTION_CALL];
};


Blockly.Blocks['inputstr'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("input (");
        this.appendValueInput("NAME")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(") # to input a string value");
        this.setOutput(true, null);
        this.setColour('#D15C08');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

pythonGenerator.forBlock['inputstr'] = function(block) {
    var text_name =  pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_FUNCTION_CALL) || '""';
    var code = 'input(' + text_name + ')';
    return [code, pythonGenerator.ORDER_FUNCTION_CALL];
};


Blockly.Blocks['print'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("print")
            .appendField(new Blockly.FieldTextInput("default"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#D15C08');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

pythonGenerator.forBlock['print'] = function (block) {
    var text_name = block.getFieldValue('NAME');
    var code = 'print("' + text_name + '")\n';
    return code;
};


Blockly.Blocks['printnew'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Print");
        this.appendValueInput("NAME")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#D15C08');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

pythonGenerator.forBlock['printnew'] = function (block) {
    var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_FUNCTION_CALL) || '""';
    var code = 'print(' + value_name + ')\n';
    return code;
};


Blockly.Blocks['printextra'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("print");
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#D15C08');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['printextra'] = function(block) {
  var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_NONE) || '""';
  var value_name1 = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_NONE) || '""';
  var code = 'print(' + value_name + ', ' + value_name1 + ')\n';
  return code;
};


Blockly.Blocks['extra'] = {
    init: function() {
        this.appendValueInput("NAME1")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(",");
        this.appendValueInput("NAME")
            .setCheck(null);
        this.setOutput(true, null);
        this.setColour('#D15C08');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

pythonGenerator.forBlock['extra'] = function(block) {
  var value_name1 = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_FUNCTION_CALL) || '""';
  var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_FUNCTION_CALL) || '""';
  var code = value_name1 + ',' + value_name;
  return [code, pythonGenerator.ORDER_FUNCTION_CALL];
};


Blockly.Blocks['end'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("end =\" \"");
    this.setOutput(true, null);
    this.setColour('#D15C08');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['end'] = function(block) {
  var code = 'end=" "';
  return [code, pythonGenerator.ORDER_FUNCTION_CALL];
};
