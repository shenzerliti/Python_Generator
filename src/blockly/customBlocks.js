// import "blockly/blocks";
// import { pythonGenerator } from "blockly/python";
// import * as Blockly from "blockly/core";

// // ---------------- CLASS ----------------
// Blockly.Blocks['c1'] = {
//   init: function() {
//     this.appendValueInput("CLASS_NAME")
//         .setCheck(null)
//         .appendField("class (");
//     this.appendDummyInput()
//         .appendField(")");
//     this.appendStatementInput("BODY")
//         .setCheck(null);
//     this.setPreviousStatement(true);
//     this.setNextStatement(true);
//     this.setColour('#FF0000');
//   }
// };

// pythonGenerator.forBlock['c1'] = function(block) {
//   const className = pythonGenerator.valueToCode(block, 'CLASS_NAME', pythonGenerator.ORDER_ATOMIC) || "MyClass";
//   const statements = pythonGenerator.statementToCode(block, 'BODY');
//   return `class ${className}:\n${statements}`;
// };

// // ---------------- INIT METHOD ----------------
// Blockly.Blocks['c2'] = {
//   init: function() {
//     this.appendValueInput("ARGS")
//         .setCheck(null)
//         .appendField("def class_method (self,");
//     this.appendDummyInput()
//         .appendField(")")
//         .appendField(" #__init__ method");
//     this.appendStatementInput("BODY")
//         .setCheck(null);
//     this.setPreviousStatement(true);
//     this.setNextStatement(true);
//     this.setColour('#FF0000');
//   }
// };

// pythonGenerator.forBlock['c2'] = function(block) {
//   const args = pythonGenerator.valueToCode(block, 'ARGS', pythonGenerator.ORDER_ATOMIC);
//   const statements = pythonGenerator.statementToCode(block, 'BODY');
//   const argsCode = args ? `${args}` : "";
//   return `def __init__(self${argsCode ? ', ' + argsCode : ''}):\n${statements}`;
// };

// // ---------------- SELF STORE ----------------
// Blockly.Blocks['c3'] = {
//   init: function() {
//     this.appendValueInput("VALUE")
//         .appendField("store");
//     this.appendDummyInput()
//         .appendField("in (self.")
//         .appendField(new Blockly.FieldVariable("item"), "VAR")
//         .appendField(")");
//     this.setPreviousStatement(true);
//     this.setNextStatement(true);
//     this.setColour('#FF0000');
//   }
// };

// pythonGenerator.forBlock['c3'] = function(block) {
//   const value = pythonGenerator.valueToCode(block, 'VALUE', pythonGenerator.ORDER_ATOMIC);
//   const variable = pythonGenerator.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
//   return `self.${variable} = ${value}\n`;
// };

// // ---------------- SELF ACCESS ----------------
// Blockly.Blocks['c4'] = {
//   init: function() {
//     this.appendValueInput("VALUE")
//         .setCheck(null)
//         .appendField("self.");
//     this.setOutput(true, null);
//     this.setColour('#FF0000');
//   }
// };

// pythonGenerator.forBlock['c4'] = function(block) {
//   const value = pythonGenerator.valueToCode(block, 'VALUE', pythonGenerator.ORDER_ATOMIC);
//   return [`self.${value}`, pythonGenerator.ORDER_ATOMIC];
// };

// // ---------------- SELF OPERATION ----------------
// Blockly.Blocks['c5'] = {
//   init: function() {
//     this.appendValueInput("LEFT")
//         .setCheck(null);
//     this.appendDummyInput()
//         .appendField(".")
//         .appendField(new Blockly.FieldVariable("variable"), "VAR")
//         .appendField(new Blockly.FieldDropdown([["+=","+="], ["-=","-="]]), "OP");
//     this.appendValueInput("RIGHT")
//         .setCheck(null);
//     this.setPreviousStatement(true);
//     this.setNextStatement(true);
//     this.setColour('#FF0000');
//   }
// };

// pythonGenerator.forBlock['c5'] = function(block) {
//   const left = pythonGenerator.valueToCode(block, 'LEFT', pythonGenerator.ORDER_ATOMIC);
//   const variable = pythonGenerator.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
//   const op = block.getFieldValue('OP');
//   const right = pythonGenerator.valueToCode(block, 'RIGHT', pythonGenerator.ORDER_ATOMIC);
//   return `${left}.${variable}${op}${right}\n`;
// };

// // ---------------- CLASS.VARIABLE ACCESS ----------------
// Blockly.Blocks['c6'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField(new Blockly.FieldVariable("class_name"), "CLASS")
//         .appendField(".")
//         .appendField(new Blockly.FieldVariable("variable"), "VAR");
//     this.setOutput(true, null);
//     this.setColour('#FF0000');
//   }
// };

// pythonGenerator.forBlock['c6'] = function(block) {
//   const cls = pythonGenerator.variableDB_.getName(block.getFieldValue('CLASS'), Blockly.Variables.NAME_TYPE);
//   const variable = pythonGenerator.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
//   return [`${cls}.${variable}`, pythonGenerator.ORDER_ATOMIC];
// };

// // ---------------- CLASS INHERITANCE ----------------
// Blockly.Blocks['c7'] = {
//   init: function() {
//     this.appendValueInput("CLASS_NAME")
//         .setCheck(null)
//         .appendField("class");
//     this.appendDummyInput()
//         .appendField("(");
//     this.appendValueInput("PARENT")
//         .setCheck(null);
//     this.appendDummyInput()
//         .appendField(")");
//     this.appendStatementInput("BODY")
//         .setCheck(null);
//     this.setPreviousStatement(true);
//     this.setNextStatement(true);
//     this.setColour('#FF0000');
//   }
// };

// pythonGenerator.forBlock['c7'] = function(block) {
//   const cls = pythonGenerator.valueToCode(block, 'CLASS_NAME', pythonGenerator.ORDER_ATOMIC) || "MyClass";
//   const parent = pythonGenerator.valueToCode(block, 'PARENT', pythonGenerator.ORDER_ATOMIC) || "object";
//   const statements = pythonGenerator.statementToCode(block, 'BODY');
//   return `class ${cls}(${parent}):\n${statements}`;
// };

// // ---------------- FUNCTION CALL ----------------
// Blockly.Blocks['fc1'] = {
//   init: function() {
//     this.appendValueInput("FUNC")
//         .setCheck(null);
//     this.appendDummyInput()
//         .appendField(".");
//     this.appendValueInput("ARG")
//         .setCheck(null);
//     this.setPreviousStatement(true);
//     this.setNextStatement(true);
//     this.setColour('#FF0000');
//   }
// };

// pythonGenerator.forBlock['fc1'] = function(block) {
//   const fn = pythonGenerator.valueToCode(block, 'FUNC', pythonGenerator.ORDER_ATOMIC);
//   const arg = pythonGenerator.valueToCode(block, 'ARG', pythonGenerator.ORDER_ATOMIC);
//   return `${fn}(${arg})\n`;
// };

// // ---------------- FUNCTION DEFINITION ----------------
// Blockly.Blocks['fc'] = {
//   init: function() {
//     this.appendValueInput("NAME")
//         .setCheck(null)
//         .appendField("def");
//     this.appendDummyInput()
//         .appendField("(self");
//     this.appendValueInput("ARGS")
//         .setCheck(null);
//     this.appendDummyInput()
//         .appendField(")");
//     this.appendStatementInput("BODY")
//         .setCheck(null);
//     this.setPreviousStatement(true);
//     this.setNextStatement(true);
//     this.setColour('#FF0000');
//   }
// };

// pythonGenerator.forBlock['fc'] = function(block) {
//   const name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC);
//   const args = pythonGenerator.valueToCode(block, 'ARGS', pythonGenerator.ORDER_ATOMIC);
//   const statements = pythonGenerator.statementToCode(block, 'BODY');
//   const argsCode = args ? `, ${args}` : "";
//   return `def ${name}(self${argsCode}):\n${statements}`;
// };

// // ---------------- CLASS VARIABLE ASSIGN ----------------
// Blockly.Blocks['classvar'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("self.")
//         .appendField(new Blockly.FieldVariable("variable"), "VAR")
//         .appendField("=");
//     this.appendValueInput("VALUE")
//         .setCheck(null);
//     this.setPreviousStatement(true);
//     this.setNextStatement(true);
//     this.setColour('#FF0000');
//   }
// };

// pythonGenerator.forBlock['classvar'] = function(block) {
//   const variable = pythonGenerator.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
//   const value = pythonGenerator.valueToCode(block, 'VALUE', pythonGenerator.ORDER_ATOMIC);
//   return `self.${variable} = ${value}\n`;
// };
