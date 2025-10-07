import "blockly/blocks";
import { pythonGenerator } from "blockly/python";
import * as Blockly from "blockly/core";

// ---------------- OBJECT CALL WITH ARGUMENT ----------------
Blockly.Blocks['o1'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("(");
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setOutput(true, null);
    this.setColour('#FF0000');
  }
};

pythonGenerator.forBlock['o1'] = function(block) {
  const obj = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC);
  const arg = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_ATOMIC);
  return [`${obj}(${arg})`, pythonGenerator.ORDER_ATOMIC];
};

// ---------------- STORE OBJECT ----------------
Blockly.Blocks['o2'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("store ");
    this.appendDummyInput()
        .appendField("in")
        .appendField(new Blockly.FieldVariable("object_name"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF0000');
  }
};

pythonGenerator.forBlock['o2'] = function(block) {
  const value = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC);
  const variable = pythonGenerator.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  return `${variable} = ${value}\n`;
};

// ---------------- OBJECT ATTRIBUTE ACCESS ----------------
Blockly.Blocks['o3'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".");
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.setOutput(true, null);
    this.setColour('#FF0000');
  }
};

pythonGenerator.forBlock['o3'] = function(block) {
  const obj = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC);
  const attr = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_ATOMIC);
  return [`${obj}.${attr}`, pythonGenerator.ORDER_ATOMIC];
};

// ---------------- OBJECT METHOD WITHOUT ARGUMENT ----------------
Blockly.Blocks['o4'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("()");
    this.setOutput(true, null);
    this.setColour('#FF0000');
  }
};

pythonGenerator.forBlock['o4'] = function(block) {
  const obj = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC);
  return [`${obj}()`, pythonGenerator.ORDER_ATOMIC];
};

// ---------------- OBJECT METHOD CALL ----------------
Blockly.Blocks['method'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField(new Blockly.FieldVariable("object name"), "NAME")
        .appendField(".");
    this.appendDummyInput()
        .appendField("(");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FFA07A');
  }
};

pythonGenerator.forBlock['method'] = function(block) {
  const variable = pythonGenerator.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  const method = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_ATOMIC);
  const arg = pythonGenerator.valueToCode(block, 'NAME2', pythonGenerator.ORDER_ATOMIC);
  return `${variable}.${method}(${arg})\n`;
};

// ---------------- MODIFY OBJECT ATTRIBUTE ----------------
Blockly.Blocks['modify'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("modify ");
    this.appendDummyInput()
        .appendField("in")
        .appendField(new Blockly.FieldVariable("object_name"), "NAME1")
        .appendField("as");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FFA07A');
  }
};

pythonGenerator.forBlock['modify'] = function(block) {
  const attr = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC);
  const obj = pythonGenerator.variableDB_.getName(block.getFieldValue('NAME1'), Blockly.Variables.NAME_TYPE);
  const value = pythonGenerator.valueToCode(block, 'NAME2', pythonGenerator.ORDER_ATOMIC);
  return `${obj}.${attr} = ${value}\n`;
};
