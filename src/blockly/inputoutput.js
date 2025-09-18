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


// Simple print block with default text
Blockly.Blocks['print_default'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("print")
        .appendField(new Blockly.FieldTextInput("default"), "TEXT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#D15C08');
    this.setTooltip("Print default text");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['print_default'] = function(block) {
  const text = block.getFieldValue('TEXT');
  return `print(${JSON.stringify(text)})\n`;
};



// Print block with input field
Blockly.Blocks['print_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Print")
        .appendField(new Blockly.FieldTextInput("default"), "TEXT");
    this.setOutput(true, null);
    this.setColour('#D15C08');
    this.setTooltip("Print input text");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['print_input'] = function(block) {
  const text = block.getFieldValue('TEXT');
  return [`print(${JSON.stringify(text)})`, pythonGenerator.ORDER_FUNCTION_CALL];
};

// Print block: print default + value
Blockly.Blocks['print_concat_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("print")
        .appendField(new Blockly.FieldTextInput("default"), "TEXT")
        .appendField("+ value");
    this.appendValueInput("VALUE")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#D15C08');
    this.setTooltip("Print default + value");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['print_concat_value'] = function(block) {
  const text = block.getFieldValue('TEXT');
  const value = pythonGenerator.valueToCode(block, 'VALUE', pythonGenerator.ORDER_NONE) || '""';
  return `print(${JSON.stringify(text)} + str(${value}))\n`;
};

// Print block: print default + string
Blockly.Blocks['print_concat_string'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("print")
        .appendField(new Blockly.FieldTextInput("default"), "TEXT")
        .appendField("+ string");
    this.appendValueInput("STRING")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#D15C08');
    this.setTooltip("Print default + string");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['print_concat_string'] = function(block) {
  const text = block.getFieldValue('TEXT');
  const string = pythonGenerator.valueToCode(block, 'STRING', pythonGenerator.ORDER_NONE) || '""';
  return `print(${JSON.stringify(text)} + str(${string}))\n`;
};