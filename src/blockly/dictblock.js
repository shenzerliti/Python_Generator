import "blockly/blocks";
import { pythonGenerator } from "blockly/python";
import * as Blockly from "blockly/core";

/* ---------- d1 block (dictionary init with values) ---------- */
Blockly.Blocks['d1'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField(new Blockly.FieldVariable("dictionary"), "NAME")
        .appendField("= {");
    this.appendDummyInput()
        .appendField("}");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0ca76a");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['d1'] = function(block) {
  const variable_name = pythonGenerator.nameDB_.getName(
    block.getFieldValue('NAME'),
    Blockly.VARIABLE_CATEGORY_NAME
  );
  const text_name1 = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_NONE) || "";
  const code = `${variable_name} = {${text_name1}}\n`;
  return code;
};


/* ---------- empty dictionary ---------- */
Blockly.Blocks['emptyd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("create empty dictionary")
        .appendField(new Blockly.FieldVariable("item"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0ca76a");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['emptyd'] = function(block) {
  const variable_name = pythonGenerator.nameDB_.getName(
    block.getFieldValue('NAME'),
    Blockly.VARIABLE_CATEGORY_NAME
  );
  const code = `${variable_name} = dict()\n`;
  return code;
};


/* ---------- dictionary access ---------- */
Blockly.Blocks['d2'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField(new Blockly.FieldVariable("dictionary"), "NAME")
        .appendField("[");
    this.appendDummyInput()
        .appendField("]");
    this.setOutput(true, null);
    this.setColour("#0ca76a");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['d2'] = function(block) {
  const variable_name = pythonGenerator.nameDB_.getName(
    block.getFieldValue('NAME'),
    Blockly.VARIABLE_CATEGORY_NAME
  );
  const text_name1 = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_NONE) || "''";
  const code = `${variable_name}[${text_name1}]`;
  return [code, pythonGenerator.ORDER_FUNCTION_CALL];
};


/* ---------- dictionary insert via [ ] ---------- */
Blockly.Blocks['dictinsert'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .appendField(new Blockly.FieldVariable("dictionary"), "NAME")
        .appendField("[");
    this.appendDummyInput()
        .appendField("]");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0ca76a");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['dictinsert'] = function(block) {
  const variable_name = pythonGenerator.nameDB_.getName(
    block.getFieldValue('NAME'),
    Blockly.VARIABLE_CATEGORY_NAME
  );
  const text_name1 = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_NONE) || "''";
  const value_name = pythonGenerator.valueToCode(block, 'NAME2', pythonGenerator.ORDER_NONE) || "None";
  const code = `${variable_name}[${text_name1}] = ${value_name}\n`;
  return code;
};


/* ---------- dictionary method call (update etc.) ---------- */
Blockly.Blocks['dinsert'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("d1"), "NAME")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["update","update"]]), "NAME1")
        .appendField("(");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0ca76a");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['dinsert'] = function(block) {
  const variable_name = pythonGenerator.nameDB_.getName(
    block.getFieldValue('NAME'),
    Blockly.VARIABLE_CATEGORY_NAME
  );
  const dropdown_name1 = block.getFieldValue('NAME1');
  const value_name = pythonGenerator.valueToCode(block, 'NAME2', pythonGenerator.ORDER_NONE) || "";
  const code = `${variable_name}.${dropdown_name1}(${value_name})\n`;
  return code;
};


/* ---------- dictionary get() ---------- */
Blockly.Blocks['dget'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get the value of");
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("from")
        .appendField(new Blockly.FieldVariable("dictionary"), "NAME");
    this.setOutput(true, null);
    this.setColour("#0ca76a");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['dget'] = function(block) {
  const value_name = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_NONE) || "''";
  const variable_name = pythonGenerator.nameDB_.getName(
    block.getFieldValue('NAME'),
    Blockly.VARIABLE_CATEGORY_NAME
  );
  const code = `${variable_name}.get(${value_name})`;
  return [code, pythonGenerator.ORDER_FUNCTION_CALL];
};


/* ---------- dictionary add ---------- */
Blockly.Blocks['dadd'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField(new Blockly.FieldVariable("dictionary"), "NAME")
        .appendField("[");
    this.appendDummyInput()
        .appendField("] =");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0ca76a");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['dadd'] = function(block) {
  const variable_name = pythonGenerator.nameDB_.getName(
    block.getFieldValue('NAME'),
    Blockly.VARIABLE_CATEGORY_NAME
  );
  const text_name1 = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_NONE) || "''";
  const value_name = pythonGenerator.valueToCode(block, 'NAME2', pythonGenerator.ORDER_ATOMIC) || "None";
  const code = `${variable_name}[${text_name1}] = ${value_name}\n`;
  return code;
};
