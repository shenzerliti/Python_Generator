import "blockly/blocks";
import { pythonGenerator } from "blockly/python";
import * as Blockly from "blockly/core";

// Set a variable to a value
Blockly.Blocks['variables_set'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("set")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField("to");
    this.setOutput(true, null);
    this.setColour('#d39c8b');
  }
};

pythonGenerator.forBlock['variables_set'] = function(block) {
  const variable_name = pythonGenerator.nameDB_.getName(   // ✅ FIX
      block.getFieldValue('VAR'),
      Blockly.VARIABLE_CATEGORY_NAME);
  const value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || '0';
  const code = variable_name + ' = ' + value_name+'\n';
  return code;
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
  const variable_name = pythonGenerator.nameDB_.getName(   // ✅ FIX
      block.getFieldValue('NAME'),
      Blockly.VARIABLE_CATEGORY_NAME);
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
  const variable_name = pythonGenerator.nameDB_.getName(   // ✅ FIX
      block.getFieldValue('NAME1'),
      Blockly.VARIABLE_CATEGORY_NAME);
  const value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || '0';
  const code = variable_name + ' = ' + value_name + '\n';
  return code;
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
  const variable_name = pythonGenerator.nameDB_.getName(   // ✅ FIX
      block.getFieldValue('NAME'),
      Blockly.VARIABLE_CATEGORY_NAME);
  const code = 'type(' + variable_name + ')';
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
  const func = block.getFieldValue('NAME');
  const value = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_ATOMIC) || '0';
  const code = func + '(' + value + ')';
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
  const text = block.getFieldValue('NAME');
  const code = JSON.stringify(text); // ensures proper quotes
  return [code, pythonGenerator.ORDER_ATOMIC];
};

Blockly.Blocks['variable_index_stmt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("variable"), "NAME")
        .appendField("[")
        .appendField(new Blockly.FieldTextInput(""), "INDEX")
        .appendField("]");
    this.setPreviousStatement(true, null); // upside connection
    this.setNextStatement(true, null);
    this.setColour('#d39c8b');
    this.setTooltip("Access element by index for a variable.");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['variable_index_stmt'] = function(block) {
  const variable_name = pythonGenerator.nameDB_.getName(
      block.getFieldValue('NAME'),
      Blockly.VARIABLE_CATEGORY_NAME);
  const index = block.getFieldValue('INDEX');
  return `${variable_name}[${index}]\n`;
};