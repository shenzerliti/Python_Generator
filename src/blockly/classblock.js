import "blockly/blocks";
import { pythonGenerator } from "blockly/python";
import * as Blockly from "blockly/core";

// ---------------- CLASS ----------------
Blockly.Blocks['c1'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("class (");
    this.appendDummyInput()
        .appendField(")");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF0000');
  }
};

pythonGenerator.forBlock['c1'] = function(block) {
  const className = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_ATOMIC);
  const statements = pythonGenerator.statementToCode(block, 'NAME');
  const code = `class ${className}:\n${statements}`;
  return code;
};

// ---------------- INIT METHOD ----------------
Blockly.Blocks['c2'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("def class_method (self,");
    this.appendDummyInput()
        .appendField(")")
        .appendField(" #__init__ method");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF0000');
  }
};

pythonGenerator.forBlock['c2'] = function(block) {
  const args = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_ATOMIC);
  const statements = pythonGenerator.statementToCode(block, 'NAME');
  const code = `def __init__(self,${args}):\n${statements}`;
  return code;
};

// ---------------- SELF STORE ----------------
Blockly.Blocks['c3'] = {
  init: function() {
    this.appendValueInput("NAME")
        .appendField("store");
    this.appendDummyInput()
        .appendField("in (self.")
        .appendField(new Blockly.FieldVariable("item"), "NAME2")
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF0000');
  }
};

pythonGenerator.forBlock['c3'] = function(block) {
  const value = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC);
  const variableName = pythonGenerator.variableDB_.getName(block.getFieldValue('NAME2'), Blockly.Variables.NAME_TYPE);
  const code = `self.${variableName} = ${value}\n`;
  return code;
};

// ---------------- SELF ACCESS ----------------
Blockly.Blocks['c4'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("self.");
    this.setOutput(true, null);
    this.setColour('#FF0000');
  }
};

pythonGenerator.forBlock['c4'] = function(block) {
  const value = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC);
  return [`self.${value}`, pythonGenerator.ORDER_ATOMIC];
};

// ---------------- SELF OPERATION ----------------
Blockly.Blocks['c5'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".")
        .appendField(new Blockly.FieldVariable("variable"), "NAME")
        .appendField(new Blockly.FieldDropdown([["+=","+="], ["-=","-="]]), "NAME2");
    this.appendValueInput("NAME3")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF0000');
  }
};

pythonGenerator.forBlock['c5'] = function(block) {
  const left = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_ATOMIC);
  const variableName = pythonGenerator.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  const op = block.getFieldValue('NAME2');
  const right = pythonGenerator.valueToCode(block, 'NAME3', pythonGenerator.ORDER_ATOMIC);
  const code = `${left}.${variableName}${op}${right}\n`;
  return code;
};

// ---------------- CLASS.VARIABLE ACCESS ----------------
Blockly.Blocks['c6'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("class_name"), "NAME")
        .appendField(".")
        .appendField(new Blockly.FieldVariable("variable"), "NAME1");
    this.setOutput(true, null);
    this.setColour('#FF0000');
  }
};

pythonGenerator.forBlock['c6'] = function(block) {
  const cls = pythonGenerator.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  const variable = pythonGenerator.variableDB_.getName(block.getFieldValue('NAME1'), Blockly.Variables.NAME_TYPE);
  return [`${cls}.${variable}`, pythonGenerator.ORDER_ATOMIC];
};

// ---------------- CLASS INHERITANCE ----------------
Blockly.Blocks['c7'] = {
  init: function() {
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField("class");
    this.appendDummyInput()
        .appendField("(");
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF0000');
  }
};

pythonGenerator.forBlock['c7'] = function(block) {
  const cls = pythonGenerator.valueToCode(block, 'NAME2', pythonGenerator.ORDER_ATOMIC);
  const parent = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_ATOMIC);
  const statements = pythonGenerator.statementToCode(block, 'NAME');
  return `class ${cls}(${parent}):\n${statements}`;
};

// ---------------- FUNCTION CALL ----------------
Blockly.Blocks['fc1'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".");
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF0000');
  }
};

pythonGenerator.forBlock['fc1'] = function(block) {
  const fn = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC);
  const arg = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_ATOMIC);
  const code = `${fn}(${arg})\n`;
  return code;
};

// ---------------- FUNCTION DEFINITION ----------------
Blockly.Blocks['fc'] = {
  init: function() {
    this.appendValueInput("abc")
        .setCheck(null)
        .appendField("def");
    this.appendDummyInput()
        .appendField("(self");
    this.appendValueInput("xyz")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF0000');
  }
};

pythonGenerator.forBlock['fc'] = function(block) {
  const name = pythonGenerator.valueToCode(block, 'abc', pythonGenerator.ORDER_ATOMIC);
  const args = pythonGenerator.valueToCode(block, 'xyz', pythonGenerator.ORDER_ATOMIC);
  const statements = pythonGenerator.statementToCode(block, 'NAME');
  return `def ${name}(self${args}):\n${statements}`;
};

// ---------------- CLASS VARIABLE ASSIGN ----------------
Blockly.Blocks['classvar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("self.")
        .appendField(new Blockly.FieldVariable("variable"), "NAME")
        .appendField("=");
    this.appendValueInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF0000');
  }
};

pythonGenerator.forBlock['classvar'] = function(block) {
  const variable = pythonGenerator.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  const value = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC);
  return `self.${variable} = ${value}\n`;
};
