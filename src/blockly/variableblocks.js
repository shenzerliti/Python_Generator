import "blockly/blocks";
import { pythonGenerator } from "blockly/python";
import * as Blockly from "blockly/core";

// Set a variable to a value
Blockly.Blocks['variables_set'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("set")
        .appendField(new Blockly.FieldVariable("%{BKY_VARIABLES_DEFAULT_NAME}"), "VAR")
        .appendField("to");
    this.setOutput(true, null);
    this.setColour('#d39c8b');
  }
};

pythonGenerator.forBlock['variables_set'] = function(block) {
  var variable_name = pythonGenerator.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || '0';
  var code = variable_name + ' = ' + value_name;
  return [code, pythonGenerator.ORDER_ATOMIC];
};

// Variable block
Blockly.Blocks['variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("variable name"), "NAME");
    this.setOutput(true, null);
    this.setColour('#d39c8b');
  }
};

pythonGenerator.forBlock['variable'] = function(block) {
  var variable_name = pythonGenerator.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  return [variable_name, pythonGenerator.ORDER_ATOMIC];
};

// Assign value to variable (statement)
Blockly.Blocks['varinput'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(new Blockly.FieldVariable("variable name"), "NAME1")
        .appendField("=");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#d39c8b');
  }
};

pythonGenerator.forBlock['varinput'] = function(block) {
  var variable_name = pythonGenerator.variableDB_.getName(block.getFieldValue('NAME1'), Blockly.Variables.NAME_TYPE);
  var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || '0';
  var code = variable_name + ' = ' + value_name + '\n';
  return code;
};

// Access element by index
Blockly.Blocks['m6'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("variable"), "NAME")
        .appendField("[");
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("]");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#d39c8b');
  }
};

pythonGenerator.forBlock['m6'] = function(block) {
  var variable_name = pythonGenerator.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var index = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_ATOMIC) || '0';
  var code = variable_name + '[' + index + ']';
  return [code, pythonGenerator.ORDER_ATOMIC];
};

// Type of a variable
Blockly.Blocks['type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("type of")
        .appendField(new Blockly.FieldVariable("variable"), "NAME");
    this.setOutput(true, null);
    this.setColour('#d39c8b');
  }
};

pythonGenerator.forBlock['type'] = function(block) {
  var variable_name = pythonGenerator.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var code = 'type(' + variable_name + ')';
  return [code, pythonGenerator.ORDER_ATOMIC];
};

// Data type conversion
Blockly.Blocks['conv'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["int","int"], ["float","float"], ["str","str"]]), "NAME")
        .appendField("(");
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(") #datatype conversion");
    this.setOutput(true, null);
    this.setColour('#d39c8b');
  }
};

pythonGenerator.forBlock['conv'] = function(block) {
  var func = block.getFieldValue('NAME');
  var value = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_ATOMIC) || '0';
  var code = func + '(' + value + ')';
  return [code, pythonGenerator.ORDER_ATOMIC];
};

// Insert a string
Blockly.Blocks['varstr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "NAME")
        .appendField(" # to insert a string");
    this.setOutput(true, null);
    this.setColour('#d39c8b');
  }
};

pythonGenerator.forBlock['varstr'] = function(block) {
  var text = block.getFieldValue('NAME');
  var code = JSON.stringify(text); // ensures proper quotes
  return [code, pythonGenerator.ORDER_ATOMIC];
};
