import "blockly/blocks";
import { pythonGenerator } from "blockly/python";
import * as Blockly from "blockly/core";

// --- RANDINT ---
Blockly.Blocks['randint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("randint from");
    this.appendValueInput("FROM")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("to");
    this.appendValueInput("TO")
        .setCheck("Number");
    this.setOutput(true, "Number");
    this.setColour("#20B2AA"); // Light sea green
    this.setTooltip("Generates a random integer between FROM and TO");
    this.setHelpUrl("");
  }
};
// --- RANDINT ---
pythonGenerator['randint'] = function(block) {
  const from = pythonGenerator.valueToCode(block, 'FROM', pythonGenerator.ORDER_NONE) || '0';
  const to = pythonGenerator.valueToCode(block, 'TO', pythonGenerator.ORDER_NONE) || '1';
  pythonGenerator.definitions_['import_random'] = 'import random';
  return [`random.randint(${from}, ${to})`, pythonGenerator.ORDER_FUNCTION_CALL];
};

// --- RANDRANGE ---
Blockly.Blocks['randrange'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("randrange from");
    this.appendValueInput("FROM")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("to");
    this.appendValueInput("TO")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("step");
    this.appendValueInput("STEP")
        .setCheck("Number");
    this.setOutput(true, "Number");
    this.setColour("#20B2AA"); // Light blue
    this.setTooltip("Generates a random number from a range with a step");
    this.setHelpUrl("");
  }
};
// --- RANDRANGE ---
pythonGenerator['randrange'] = function(block) {
  const from = pythonGenerator.valueToCode(block, 'FROM', pythonGenerator.ORDER_NONE) || '0';
  const to = pythonGenerator.valueToCode(block, 'TO', pythonGenerator.ORDER_NONE) || '1';
  const step = pythonGenerator.valueToCode(block, 'STEP', pythonGenerator.ORDER_NONE) || '1';
  pythonGenerator.definitions_['import_random'] = 'import random';
  return [`random.randrange(${from}, ${to}, ${step})`, pythonGenerator.ORDER_FUNCTION_CALL];
};

// --- UNIFORM ---
Blockly.Blocks['uniform'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("uniform from");
    this.appendValueInput("FROM")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("to");
    this.appendValueInput("TO")
        .setCheck("Number");
    this.setOutput(true, "Number");
    this.setColour("#20B2AA");
    this.setTooltip("Generates a random float between FROM and TO");
    this.setHelpUrl("");
  }
};

// --- UNIFORM ---
pythonGenerator.forBlock['uniform'] = function(block) {
  const from = pythonGenerator.valueToCode(block, 'FROM', pythonGenerator.ORDER_NONE) || '0';
  const to = pythonGenerator.valueToCode(block, 'TO', pythonGenerator.ORDER_NONE) || '1';
  pythonGenerator.definitions_['import_random'] = 'import random';
  return [`random.uniform(${from}, ${to})`, pythonGenerator.ORDER_FUNCTION_CALL];
};