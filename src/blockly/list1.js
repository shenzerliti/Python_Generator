import "blockly/blocks";
import { pythonGenerator } from "blockly/python";
import * as Blockly from "blockly/core";

Blockly.Blocks['list1'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField(new Blockly.FieldVariable("list1"), "NAME")
        .appendField("=")
        .appendField("[");
    this.appendDummyInput()
        .appendField("]");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#DB7093');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['list1'] = function(block) {
  var variableId = block.getFieldValue('NAME');
  var variableName = pythonGenerator.nameDB_.getName(variableId, Blockly.VARIABLE_CATEGORY_NAME);
  var text_name1 = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_FUNCTION_CALL) || '';
  var code = variableName + ' = [' + text_name1 + ']\n';
  return code;
};

Blockly.Blocks['listin'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(new Blockly.FieldVariable("list1"), "NAME")
        .appendField("[");
    this.appendDummyInput()
        .appendField("]");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#DB7093");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['listin'] = function(block) {
  var variableId = block.getFieldValue('NAME');
  var variableName = pythonGenerator.nameDB_.getName(variableId, Blockly.VARIABLE_CATEGORY_NAME);
  var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_FUNCTION_CALL) || '';
  var code = variableName + ' = [' + value_name + ']\n';
  return code;
};

Blockly.Blocks['list3'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("[");
    this.appendDummyInput()
        .appendField("]");
    this.setOutput(true, null);
    this.setColour("#DB7093");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['list3'] = function(block) {
  var text_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_FUNCTION_CALL) || '';
  var code = '[' + text_name + ']';
  return [code, pythonGenerator.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['list_in_list'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("[");
    this.appendDummyInput()
        .appendField("],");
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.setOutput(true, null);
    this.setColour("#DB7093");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['list_in_list'] = function(block) {
  var text_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_FUNCTION_CALL) || '';
  var value_name = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_FUNCTION_CALL) || '';
  var code = '[' + text_name + '],' + value_name;
  return [code, pythonGenerator.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['list'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("convert");
    this.appendDummyInput()
        .appendField("into list");
    this.setOutput(true, null);
    this.setColour("#DB7093");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['list'] = function(block) {
  var value_name = pythonGenerator.valueToCode(block, 'NAME',  pythonGenerator.ORDER_FUNCTION_CALL) || '""';
  var code = 'list(' + value_name + ')';
  return [code,  pythonGenerator.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['insert'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("insert");
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("on");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("th position of")
        .appendField(new Blockly.FieldVariable("list1"), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#DB7093");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['insert'] = function(block) {
  var text_name1 = pythonGenerator.valueToCode(block, 'NAME1',  pythonGenerator.ORDER_FUNCTION_CALL) || '""';
  var number_name2 = pythonGenerator.valueToCode(block, 'NAME2',  pythonGenerator.ORDER_FUNCTION_CALL) || '0';
  var variableId = block.getFieldValue('NAME');
  var variableName = pythonGenerator.nameDB_.getName(variableId, Blockly.VARIABLE_CATEGORY_NAME);
  var code = variableName + '.insert(' + number_name2 + ', ' + text_name1 + ')\n';
  return code;
};

Blockly.Blocks['replaced'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField(new Blockly.FieldVariable("list1"), "NAME")
        .appendField("[");
    this.appendDummyInput()
        .appendField("] =");
    this.appendValueInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#DB7093");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['replaced'] = function(block) {
  var variableId = block.getFieldValue('NAME');
  var variableName = pythonGenerator.nameDB_.getName(variableId, Blockly.VARIABLE_CATEGORY_NAME);
  var number_name1 = pythonGenerator.valueToCode(block, 'NAME1',  pythonGenerator.ORDER_FUNCTION_CALL) || '0';
  var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || '""';
  var code = variableName + '[' + number_name1 + '] = ' + value_name + '\n';
  return code;
};

Blockly.Blocks['sort'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["sort","sort"]]), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#DB7093");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['sort'] = function(block) {
  var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_FUNCTION_CALL) || 'list';
  var dropdown_name = block.getFieldValue('NAME');
  var code = value_name + '.' + dropdown_name + '()\n';
  return code;
};

Blockly.Blocks['multiple'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("create a list");
    this.appendDummyInput()
        .appendField("and repeat for");
    this.appendValueInput("xyz")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("times");
    this.setOutput(true, null);
    this.setColour("#DB7093");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['multiple'] = function(block) {
  var value_name = pythonGenerator.valueToCode(block, 'NAME',  pythonGenerator.ORDER_FUNCTION_CALL) || '[]';
  var value_xyz = pythonGenerator.valueToCode(block, 'xyz',  pythonGenerator.ORDER_FUNCTION_CALL) || '0';
  var code = value_name + ' * ' + value_xyz;
  return [code,  pythonGenerator.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['sum'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("sum of items in");
    this.appendValueInput("NAME")
        .setCheck(null);
    this.setOutput(true, null);
    this.setColour("#DB7093");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['sum'] = function(block) {
  var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_FUNCTION_CALL) || '[]';
  var code = 'sum(' + value_name + ')';
  return [code, pythonGenerator.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['del'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("delete");
    this.appendValueInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#DB7093");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['del'] = function(block) {
  var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_FUNCTION_CALL) || '""';
  var code = 'del ' + value_name + '\n';
  return code;
};

Blockly.Blocks['pop'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(new Blockly.FieldVariable("list1"), "NAME")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["append","append"], ["remove","remove"], ["pop","pop"]]), "NAME1")
        .appendField("(");
    this.appendDummyInput()
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#DB7093");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['pop'] = function(block) {
  var variableId = block.getFieldValue('NAME');
  var variableName = pythonGenerator.nameDB_.getName(variableId, Blockly.VARIABLE_CATEGORY_NAME);
  var dropdown_name1 = block.getFieldValue('NAME1');
  var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_FUNCTION_CALL) || '';
  var code = variableName + '.' + dropdown_name1 + '(' + value_name + ')\n';
  return code;
};