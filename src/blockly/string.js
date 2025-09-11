import "blockly/blocks";
import { pythonGenerator } from "blockly/python";
import * as Blockly from "blockly/core";

// Access element by index
Blockly.Blocks['s1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("variable"), "NAME")
        .appendField("[");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("]");
    this.setOutput(true, null);
    this.setColour('#d39c8b');
  }
};

pythonGenerator.forBlock['s1'] = function(block) {
  var variable_name = pythonGenerator.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var text_name2 = pythonGenerator.valueToCode(block, 'NAME2', pythonGenerator.ORDER_ATOMIC) || '0';
  var code = variable_name + '[' + text_name2 + ']';
  return [code, pythonGenerator.ORDER_ATOMIC];
};

// Convert string case: lower/upper
Blockly.Blocks['strfn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["lower","lower"], ["upper","upper"]]), "NAME")
        .appendField("case")
        .appendField(new Blockly.FieldVariable("string"), "NAME1");
    this.setOutput(true, null);
    this.setColour('#d39c8b');
  }
};

pythonGenerator.forBlock['strfn'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var variable_name1 = pythonGenerator.variableDB_.getName(block.getFieldValue('NAME1'), Blockly.Variables.NAME_TYPE);
  var code = variable_name1 + '.' + dropdown_name + '()';
  return [code, pythonGenerator.ORDER_ATOMIC];
};

// Replace substring in string
Blockly.Blocks['replace'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("replace");
    this.appendValueInput('NAME').setCheck(null);
    this.appendDummyInput().appendField("by");
    this.appendValueInput('NAME1').setCheck(null);
    this.appendDummyInput()
        .appendField("of")
        .appendField(new Blockly.FieldVariable("string"), "NAME2");
    this.setOutput(true, null);
    this.setColour('#d39c8b');
  }
};

pythonGenerator.forBlock['replace'] = function(block) {
  var text_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || '""';
  var text_name1 = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_ATOMIC) || '""';
  var variable_name2 = pythonGenerator.variableDB_.getName(block.getFieldValue('NAME2'), Blockly.Variables.NAME_TYPE);
  var code = variable_name2 + '.replace(' + text_name + ', ' + text_name1 + ')';
  return [code, pythonGenerator.ORDER_ATOMIC];
};

// Split string at a given delimiter
Blockly.Blocks['split'] = {
  init: function() {
    this.appendDummyInput().appendField("split at");
    this.appendValueInput("NAME").setCheck(null);
    this.appendDummyInput()
        .appendField("of")
        .appendField(new Blockly.FieldVariable("item"), "NAME1");
    this.setOutput(true, null);
    this.setColour('#d39c8b');
  }
};

pythonGenerator.forBlock['split'] = function(block) {
  var text_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || '""';
  var variable_name1 = pythonGenerator.variableDB_.getName(block.getFieldValue('NAME1'), Blockly.Variables.NAME_TYPE);
  var code = variable_name1 + '.split(' + text_name + ')';
  return [code, pythonGenerator.ORDER_ATOMIC];
};
