import "blockly/blocks";
import { pythonGenerator } from "blockly/python"; // Correct for Blockly 8.x custom generators
import * as Blockly from "blockly/core";

// varnum block: User enters anything directly in the space
Blockly.Blocks['varnum'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput(" "), "VALUE")
            .appendField(" # to insert a no. or string");
        this.setOutput(true, null);
        this.setColour('#D15C08');
        this.setTooltip("Enter a number or string in the blank space.");
        this.setHelpUrl("");
    }
};

pythonGenerator.forBlock['varnum'] = function(block) {
    var value = block.getFieldValue('VALUE');
    // If value looks like a number, output as is; otherwise, quote it as a string
    if (!isNaN(value) && value.trim() !== "") {
        return [value, pythonGenerator.ORDER_ATOMIC];
    } else {
        return [`"${value}"`, pythonGenerator.ORDER_ATOMIC];
    }
};

// inputno block: User enters prompt text directly in the space
Blockly.Blocks['inputno'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["int","int"], ["float","float"], ["complex","complex"]]), "TYPE")
            .appendField("input (");
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput(" "), "PROMPT")
            .appendField(") # to input a number");
        this.setOutput(true, null);
        this.setColour('#D15C08');
        this.setTooltip("Enter prompt in the blank space.");
        this.setHelpUrl("");
    }
};

// inputno generator (updated)
pythonGenerator.forBlock['inputno'] = function(block) {
  var dropdown_type = block.getFieldValue('TYPE') || "int";
  var prompt = block.getFieldValue('PROMPT') || '';

  // If a value was collected from the web popup, emit the literal instead of input(...)
  if (typeof block.userInput !== 'undefined' && block.userInput !== null) {
    var value = block.userInput;
    // Try to coerce to the correct numeric literal if appropriate
    if (dropdown_type === 'int' && !isNaN(value)) {
      return [String(parseInt(value, 10)), pythonGenerator.ORDER_ATOMIC];
    } else if (dropdown_type === 'float' && !isNaN(value)) {
      return [String(parseFloat(value)), pythonGenerator.ORDER_ATOMIC];
    } else {
      // fallback: quote as string
      return [JSON.stringify(String(value)), pythonGenerator.ORDER_ATOMIC];
    }
  }

  var code = `${dropdown_type}(input(${JSON.stringify(prompt)}))`;
  return [code, pythonGenerator.ORDER_FUNCTION_CALL];
};

// inputstr block: User enters prompt text directly in the space
Blockly.Blocks['inputstr'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("input (");
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput(" "), "PROMPT")
            .appendField(") # to input a string value");
        this.setOutput(true, null);
        this.setColour('#D15C08');
        this.setTooltip("Enter prompt in the blank space.");
        this.setHelpUrl("");
    }
};

pythonGenerator.forBlock['inputstr'] = function(block) {
  var prompt = block.getFieldValue('PROMPT') || '';

  // If a value was collected from the web popup, emit the literal string
  if (typeof block.userInput !== 'undefined' && block.userInput !== null) {
    return [JSON.stringify(String(block.userInput)), pythonGenerator.ORDER_FUNCTION_CALL];
  }

  var code = `input(${JSON.stringify(prompt)})`;
  return [code, pythonGenerator.ORDER_FUNCTION_CALL];
};

// print block
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

// printnew block
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

// printextra block
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

// extra block
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

// end block
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

// print_default block
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

// print_input block
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

// print_concat_value block
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

// print_concat_string block
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