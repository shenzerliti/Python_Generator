import "blockly/blocks";
import { pythonGenerator } from "blockly/python";
import * as Blockly from "blockly/core";

// Add element to set
Blockly.Blocks['set'] = {
  init: function() {
    this.appendValueInput("NAME").setCheck(null).appendField("add");
    this.appendDummyInput().appendField("on").appendField(new Blockly.FieldVariable("set1"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0c99a7");
  }
};

pythonGenerator.forBlock['set'] = function(block) {
  var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || 'None';
  var variable_name = pythonGenerator.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var code = variable_name + '.add(' + value_name + ')\n';
  return code;
};

// Remove element from set
Blockly.Blocks['setremove'] = {
  init: function() {
    this.appendValueInput("NAME").setCheck(null).appendField("remove");
    this.appendDummyInput().appendField("on").appendField(new Blockly.FieldVariable("set1"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0c99a7");
  }
};

pythonGenerator.forBlock['setremove'] = function(block) {
  var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || 'None';
  var variable_name = pythonGenerator.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var code = variable_name + '.remove(' + value_name + ')\n';
  return code;
};

// Convert to set
Blockly.Blocks['set1'] = {
  init: function() {
    this.appendValueInput("NAME").setCheck(null).appendField("convert");
    this.appendDummyInput().appendField("into list");
    this.setOutput(true, null);
    this.setColour("#0c99a7");
  }
};

pythonGenerator.forBlock['set1'] = function(block) {
  var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || '[]';
  var code = 'set(' + value_name + ')';
  return [code, pythonGenerator.ORDER_ATOMIC];
};

// Add element to set (alternative)
Blockly.Blocks['setadd'] = {
  init: function() {
    this.appendDummyInput().appendField("add");
    this.appendValueInput("NAME").setCheck(null);
    this.appendDummyInput().appendField("to").appendField(new Blockly.FieldVariable("set1"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0c99a7");
  }
};

pythonGenerator.forBlock['setadd'] = function(block) {
  var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || 'None';
  var variable_name = pythonGenerator.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var code = variable_name + '.add(' + value_name + ')\n';
  return code;
};

// Set methods: intersection, union, subset, superset
Blockly.Blocks['setmethods'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("set1"), "NAME")
        .appendField(new Blockly.FieldDropdown([["intersection","intersection"], ["union","union"], ["issubset","issubset"], ["issuperset","issuperset"]]), "abc")
        .appendField(new Blockly.FieldVariable("set2"), "zxc");
    this.setOutput(true, null);
    this.setColour("#0c99a7");
  }
};

pythonGenerator.forBlock['setmethods'] = function(block) {
  var variable_name = pythonGenerator.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_abc = block.getFieldValue('abc');
  var variable_zxc = pythonGenerator.variableDB_.getName(block.getFieldValue('zxc'), Blockly.Variables.NAME_TYPE);
  var code = variable_name + '.' + dropdown_abc + '(' + variable_zxc + ')';
  return [code, pythonGenerator.ORDER_ATOMIC];
};
