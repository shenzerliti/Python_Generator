import "blockly/blocks";
import { pythonGenerator } from "blockly/python";
import * as Blockly from "blockly/core";


// ---------------- Function Definition ----------------
Blockly.Blocks['fu1'] = {
  init: function() {
    this.appendValueInput("abc")
        .setCheck(null)
        .appendField("def");
    this.appendDummyInput()
        .appendField("(");
    this.appendValueInput("xyz")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF4500');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['fu1'] = function(block) {
  const text_abc = pythonGenerator.valueToCode(block, 'abc', pythonGenerator.ORDER_NONE) || "func";
  const text_xyz = pythonGenerator.valueToCode(block, 'xyz', pythonGenerator.ORDER_NONE) || "";
  const statements_name = pythonGenerator.statementToCode(block, 'NAME');
  const code = `def ${text_abc}(${text_xyz}):\n${pythonGenerator.prefixLines(statements_name, pythonGenerator.INDENT)}`;
  return code;
};

// ---------------- Function Call (output) ----------------
Blockly.Blocks['fu2'] = {
  init: function() {
    this.appendValueInput("abc")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("(");
    this.appendValueInput("pqr")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(") # function call");
    this.setOutput(true, null);
    this.setColour('#FF4500');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['fu2'] = function(block) {
  const text_abc = pythonGenerator.valueToCode(block, 'abc', pythonGenerator.ORDER_NONE) || "func";
  const text_pqr = pythonGenerator.valueToCode(block, 'pqr', pythonGenerator.ORDER_NONE) || "";
  const code = `${text_abc}(${text_pqr})`;
  return [code, pythonGenerator.ORDER_FUNCTION_CALL];
};

// ---------------- Return Statement ----------------
Blockly.Blocks['fu3'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("return(");
    this.appendDummyInput()
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF4500');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['fu3'] = function(block) {
  const value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_NONE) || "";
  const code = `return(${value_name})\n`;
  return code;
};

// ---------------- Lambda Function ----------------
Blockly.Blocks['fu4'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(new Blockly.FieldVariable("fn"), "NAME")
        .appendField("= lambda :")
        .appendField(new Blockly.FieldVariable("variable"), "NAME1")
        .appendField("=");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF4500');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['fu4'] = function(block) {
  const variable_name = pythonGenerator.nameDB_.getName(
    block.getFieldValue('NAME'),
    Blockly.VARIABLE_CATEGORY_NAME
  );
  const variable_name1 = pythonGenerator.nameDB_.getName(
    block.getFieldValue('NAME1'),
    Blockly.VARIABLE_CATEGORY_NAME
  );
  const value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_NONE) || "0";
  const code = `${variable_name} = lambda ${variable_name1}: ${value_name}\n`;
  return code;
};

// ---------------- Function Assignment ----------------
Blockly.Blocks['fu5'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(new Blockly.FieldVariable("function"), "NAME");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF4500');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['fu5'] = function(block) {
  const variable_name = pythonGenerator.nameDB_.getName(
    block.getFieldValue('NAME'),
    Blockly.VARIABLE_CATEGORY_NAME
  );
  const value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_NONE) || "None";
  const code = `${variable_name} = ${value_name}\n`;
  return code;
};

// ---------------- Function Call (statement) ----------------
Blockly.Blocks['fun'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("(");
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(") # function call");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF4500');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['fun'] = function(block) {
  const text_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_NONE) || "func";
  const text_name1 = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_NONE) || "";
  const code = `${text_name}(${text_name1})\n`;
  return code;
};

// ---------------- Global Statement ----------------
Blockly.Blocks['global'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("global");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF4500');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['global'] = function(block) {
  const value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_NONE) || "x";
  const code = `global ${value_name}\n`;
  return code;
};