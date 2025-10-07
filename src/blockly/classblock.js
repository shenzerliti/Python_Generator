import "blockly/blocks";
import { pythonGenerator } from "blockly/python"; // Correct import for custom Python generators
import * as Blockly from "blockly/core";

// ---------------- CLASS ----------------
Blockly.Blocks['c1'] = {
  init: function() {
    this.appendValueInput("CLASSNAME")
        .setCheck(null)
        .appendField("class (");
    this.appendDummyInput()
        .appendField(")");
    this.appendStatementInput("BODY")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF0000');
  }
};

pythonGenerator.forBlock['c1'] = function(block) {
  const className = pythonGenerator.valueToCode(block, 'CLASSNAME', pythonGenerator.ORDER_ATOMIC) || "MyClass";
  const statements = pythonGenerator.statementToCode(block, 'BODY');
  const code = `class ${className}:\n${statements || "    pass\n"}`;
  return code;
};

// ---------------- INIT METHOD ----------------
Blockly.Blocks['c2'] = {
  init: function() {
    this.appendValueInput("ARGS")
        .setCheck(null)
        .appendField("def class_method (self,");
    this.appendDummyInput()
        .appendField(")")
        .appendField(" #__init__ method");
    this.appendStatementInput("BODY")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF0000');
  }
};

pythonGenerator.forBlock['c2'] = function(block) {
  const args = pythonGenerator.valueToCode(block, 'ARGS', pythonGenerator.ORDER_ATOMIC);
  const statements = pythonGenerator.statementToCode(block, 'BODY');
  const code = args ? `def __init__(self, ${args}):\n${statements || "    pass\n"}` : `def __init__(self):\n${statements || "    pass\n"}`;
  return code;
};

// ---------------- SELF STORE ----------------
Blockly.Blocks['c3'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .appendField("store");
    this.appendDummyInput()
        .appendField("in (self.")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF0000');
  }
};

pythonGenerator.forBlock['c3'] = function(block) {
  const value = pythonGenerator.valueToCode(block, 'VALUE', pythonGenerator.ORDER_ATOMIC);
  const variableName = pythonGenerator.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return `self.${variableName} = ${value}\n`;
};

// ---------------- SELF ACCESS ----------------
Blockly.Blocks['c4'] = {
  init: function() {
    this.appendValueInput("VAR")
        .setCheck(null)
        .appendField("self.");
    this.setOutput(true, null);
    this.setColour('#FF0000');
  }
};

pythonGenerator.forBlock['c4'] = function(block) {
  const value = pythonGenerator.valueToCode(block, 'VAR', pythonGenerator.ORDER_ATOMIC);
  return [`self.${value}`, pythonGenerator.ORDER_ATOMIC];
};

// ---------------- SELF OPERATION ----------------
Blockly.Blocks['c5'] = {
  init: function() {
    this.appendValueInput("LEFT")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".")
        .appendField(new Blockly.FieldVariable("variable"), "VAR")
        .appendField(new Blockly.FieldDropdown([["+=","+="], ["-=","-="]]), "OP");
    this.appendValueInput("RIGHT")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF0000');
  }
};

pythonGenerator.forBlock['c5'] = function(block) {
  const left = pythonGenerator.valueToCode(block, 'LEFT', pythonGenerator.ORDER_ATOMIC);
  const variableName = pythonGenerator.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  const op = block.getFieldValue('OP');
  const right = pythonGenerator.valueToCode(block, 'RIGHT', pythonGenerator.ORDER_ATOMIC);
  return `${left}.${variableName}${op}${right}\n`;
};

// ---------------- CLASS.VARIABLE ACCESS ----------------
Blockly.Blocks['c6'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("class_name"), "CLASS")
        .appendField(".")
        .appendField(new Blockly.FieldVariable("variable"), "VAR");
    this.setOutput(true, null);
    this.setColour('#FF0000');
  }
};

pythonGenerator.forBlock['c6'] = function(block) {
  const cls = pythonGenerator.variableDB_.getName(block.getFieldValue('CLASS'), Blockly.Variables.NAME_TYPE);
  const variable = pythonGenerator.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return [`${cls}.${variable}`, pythonGenerator.ORDER_ATOMIC];
};

// ---------------- CLASS INHERITANCE ----------------
Blockly.Blocks['c7'] = {
  init: function() {
    this.appendValueInput("CLASS")
        .setCheck(null)
        .appendField("class");
    this.appendDummyInput()
        .appendField("(");
    this.appendValueInput("PARENT")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.appendStatementInput("BODY")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF0000');
  }
};

pythonGenerator.forBlock['c7'] = function(block) {
  const cls = pythonGenerator.valueToCode(block, 'CLASS', pythonGenerator.ORDER_ATOMIC);
  const parent = pythonGenerator.valueToCode(block, 'PARENT', pythonGenerator.ORDER_ATOMIC);
  const statements = pythonGenerator.statementToCode(block, 'BODY');
  return `class ${cls}(${parent}):\n${statements || "    pass\n"}`;
};

// ---------------- FUNCTION CALL ----------------
Blockly.Blocks['fc1'] = {
  init: function() {
    this.appendValueInput("FUNC")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".");
    this.appendValueInput("ARGS")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF0000');
  }
};

pythonGenerator.forBlock['fc1'] = function(block) {
  const fn = pythonGenerator.valueToCode(block, 'FUNC', pythonGenerator.ORDER_ATOMIC);
  const args = pythonGenerator.valueToCode(block, 'ARGS', pythonGenerator.ORDER_ATOMIC) || "";
  return `${fn}(${args})\n`;
};

// ---------------- FUNCTION DEFINITION ----------------
Blockly.Blocks['fc'] = {
  init: function() {
    this.appendValueInput("FUNCNAME")
        .setCheck(null)
        .appendField("def");
    this.appendDummyInput()
        .appendField("(self");
    this.appendValueInput("ARGS")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.appendStatementInput("BODY")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF0000');
  }
};

pythonGenerator.forBlock['fc'] = function(block) {
  const name = pythonGenerator.valueToCode(block, 'FUNCNAME', pythonGenerator.ORDER_ATOMIC);
  const args = pythonGenerator.valueToCode(block, 'ARGS', pythonGenerator.ORDER_ATOMIC);
  const statements = pythonGenerator.statementToCode(block, 'BODY');
  return `def ${name}(self${args ? `, ${args}` : ""}):\n${statements || "    pass\n"}`;
};

// ---------------- CLASS VARIABLE ASSIGN ----------------
Blockly.Blocks['classvar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("self.")
        .appendField(new Blockly.FieldVariable("variable"), "VAR")
        .appendField("=");
    this.appendValueInput("VALUE")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF0000');
  }
};

pythonGenerator.forBlock['classvar'] = function(block) {
  const variable = pythonGenerator.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  const value = pythonGenerator.valueToCode(block, 'VALUE', pythonGenerator.ORDER_ATOMIC);
  return `self.${variable} = ${value}\n`;
};