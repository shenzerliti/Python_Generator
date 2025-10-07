import "blockly/blocks";
import * as Blockly from "blockly/core";
import { pythonGenerator } from "blockly/python"; // Correct import for Blockly 8.x custom generators

/* ---------------------------
        MATH BLOCKS
--------------------------- */

// --- Number ---
Blockly.Blocks['math_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NUM");
    this.setOutput(true, "Number");
    this.setColour(230);
  }
};
pythonGenerator.forBlock['math_number'] = function(block) {
  return [block.getFieldValue('NUM'), pythonGenerator.ORDER_ATOMIC];
};

// --- Arithmetic ---
Blockly.Blocks['math_arithmetic'] = {
  init: function() {
    this.appendValueInput("A").setCheck("Number");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["+", "ADD"], ["-", "MINUS"], ["×", "MULTIPLY"], ["÷", "DIVIDE"]
        ]), "OP");
    this.appendValueInput("B").setCheck("Number");
    this.setOutput(true, "Number");
    this.setColour(230);
  }
};
pythonGenerator.forBlock['math_arithmetic'] = function(block) {
  const op = block.getFieldValue('OP');
  const A = pythonGenerator.valueToCode(block, 'A', pythonGenerator.ORDER_ATOMIC) || '0';
  const B = pythonGenerator.valueToCode(block, 'B', pythonGenerator.ORDER_ATOMIC) || '0';
  let operator;
  switch(op){
    case 'ADD': operator = '+'; break;
    case 'MINUS': operator = '-'; break;
    case 'MULTIPLY': operator = '*'; break;
    case 'DIVIDE': operator = '/'; break;
    default: operator = '+'; break;
  }
  return [`${A} ${operator} ${B}`, pythonGenerator.ORDER_ATOMIC];
};

// --- Modulo ---
Blockly.Blocks['math_modulo'] = {
  init: function() {
    this.appendValueInput("A").setCheck("Number");
    this.appendDummyInput().appendField("%");
    this.appendValueInput("B").setCheck("Number");
    this.setOutput(true, "Number");
    this.setColour(230);
  }
};
pythonGenerator.forBlock['math_modulo'] = function(block){
  const A = pythonGenerator.valueToCode(block, 'A', pythonGenerator.ORDER_ATOMIC) || '0';
  const B = pythonGenerator.valueToCode(block, 'B', pythonGenerator.ORDER_ATOMIC) || '1';
  return [`${A} % ${B}`, pythonGenerator.ORDER_ATOMIC];
};

// --- Single Math ---
Blockly.Blocks['math_single'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["sqrt", "ROOT"], ["abs", "ABS"], ["- (neg)", "NEG"], ["ln", "LN"], ["log10", "LOG10"]
        ]), "OP");
    this.appendValueInput("NUM").setCheck("Number");
    this.setOutput(true, "Number");
    this.setColour(230);
  }
};
pythonGenerator.forBlock['math_single'] = function(block){
  const op = block.getFieldValue('OP');
  const num = pythonGenerator.valueToCode(block, 'NUM', pythonGenerator.ORDER_NONE) || '0';
  pythonGenerator.definitions_['import_math'] = 'import math';
  let code;
  switch(op){
    case 'ROOT': code = `math.sqrt(${num})`; break;
    case 'ABS': code = `abs(${num})`; break;
    case 'NEG': code = `-(${num})`; break;
    case 'LN': code = `math.log(${num})`; break;
    case 'LOG10': code = `math.log10(${num})`; break;
    default: code = num;
  }
  return [code, pythonGenerator.ORDER_FUNCTION_CALL];
};

// --- Trig ---
Blockly.Blocks['math_trig'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["sin", "SIN"], ["cos", "COS"], ["tan", "TAN"], 
          ["asin", "ASIN"], ["acos", "ACOS"], ["atan", "ATAN"]
        ]), "OP");
    this.appendValueInput("NUM").setCheck("Number");
    this.setOutput(true, "Number");
    this.setColour(230);
  }
};
pythonGenerator.forBlock['math_trig'] = function(block){
  const op = block.getFieldValue('OP');
  const num = pythonGenerator.valueToCode(block, 'NUM', pythonGenerator.ORDER_NONE) || '0';
  pythonGenerator.definitions_['import_math'] = 'import math';
  let code;
  switch(op){
    case 'SIN': code = `math.sin(${num})`; break;
    case 'COS': code = `math.cos(${num})`; break;
    case 'TAN': code = `math.tan(${num})`; break;
    case 'ASIN': code = `math.asin(${num})`; break;
    case 'ACOS': code = `math.acos(${num})`; break;
    case 'ATAN': code = `math.atan(${num})`; break;
    default: code = num;
  }
  return [code, pythonGenerator.ORDER_FUNCTION_CALL];
};

// --- Constants ---
Blockly.Blocks['math_constant'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["PI", "PI"], ["E", "E"], ["GOLDEN_RATIO", "GOLDEN_RATIO"], 
          ["SQRT2", "SQRT2"], ["SQRT1_2", "SQRT1_2"]
        ]), "CONSTANT");
    this.setOutput(true, "Number");
    this.setColour(230);
  }
};
pythonGenerator.forBlock['math_constant'] = function(block){
  pythonGenerator.definitions_['import_math'] = 'import math';
  const CONSTANTS = {
    'PI':'math.pi',
    'E':'math.e',
    'GOLDEN_RATIO':'(1+math.sqrt(5))/2',
    'SQRT2':'math.sqrt(2)',
    'SQRT1_2':'math.sqrt(1/2)'
  };
  const code = CONSTANTS[block.getFieldValue('CONSTANT')];
  return [code, pythonGenerator.ORDER_ATOMIC];
};

// --- Round ---
Blockly.Blocks['math_round'] = {
  init: function() {
    this.appendValueInput("NUM").setCheck("Number");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["round", "ROUND"], ["floor", "FLOOR"], ["ceil", "CEIL"]]), "OP");
    this.setOutput(true, "Number");
    this.setColour(230);
  }
};
pythonGenerator.forBlock['math_round'] = function(block){
  const op = block.getFieldValue('OP');
  const num = pythonGenerator.valueToCode(block, 'NUM', pythonGenerator.ORDER_NONE) || '0';
  pythonGenerator.definitions_['import_math'] = 'import math';
  let code;
  switch(op){
    case 'ROUND': code = `round(${num})`; break;
    case 'FLOOR': code = `math.floor(${num})`; break;
    case 'CEIL': code = `math.ceil(${num})`; break;
    default: code = num;
  }
  return [code, pythonGenerator.ORDER_FUNCTION_CALL];
};

// --- On List ---
Blockly.Blocks['math_on_list'] = {
  init: function() {
    this.appendValueInput("LIST").setCheck("Array");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["sum", "SUM"], ["min", "MIN"], ["max", "MAX"], ["average", "AVERAGE"]
        ]), "OP");
    this.setOutput(true, "Number");
    this.setColour(230);
  }
};
pythonGenerator.forBlock['math_on_list'] = function(block){
  const list = pythonGenerator.valueToCode(block, 'LIST', pythonGenerator.ORDER_NONE) || '[]';
  const op = block.getFieldValue('OP');
  let code;
  switch(op){
    case 'SUM': code = `sum(${list})`; break;
    case 'MIN': code = `min(${list})`; break;
    case 'MAX': code = `max(${list})`; break;
    case 'AVERAGE': code = `sum(${list})/len(${list})`; break;
    default: code = list;
  }
  return [code, pythonGenerator.ORDER_FUNCTION_CALL];
};

// --- Change ---
Blockly.Blocks['math_change'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("change")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField("by");
    this.appendValueInput("DELTA").setCheck("Number");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);
  }
};
pythonGenerator.forBlock['math_change'] = function(block){
  const varName = pythonGenerator.nameDB_.getName(block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
  const delta = pythonGenerator.valueToCode(block, 'DELTA', pythonGenerator.ORDER_NONE) || '0';
  return `${varName} += ${delta}\n`;
};