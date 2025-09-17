import "blockly/blocks";
import { pythonGenerator } from "blockly/python";
import * as Blockly from "blockly/core";

/* ========= INFINITE WHILE ========= */
Blockly.Blocks['infinitewhile'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("repeat forever");
    this.appendStatementInput("whilestate")
        .setCheck(null)
        .appendField("do");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0000CD');
    this.setTooltip("Runs the inner code forever (infinite loop).");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['infinitewhile'] = function(block) {
  var statements_whilestate = pythonGenerator.statementToCode(block, 'whilestate') || '';
  var code = 'while True:\n' + pythonGenerator.prefixLines(statements_whilestate, pythonGenerator.INDENT);
  return code;
};

/* ========= FOR LOOP (range) ========= */
Blockly.Blocks['for'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("for")
        .appendField(new Blockly.FieldVariable("i"), "NAME")
        .appendField("in range");
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendStatementInput("NAME2")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0000CD');
    this.setTooltip("For loop using range.");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['for'] = function(block) {
  var variable_name = pythonGenerator.variableDB_.getName(block.getFieldValue('NAME'), Blockly.VARIABLE_CATEGORY_NAME);
  var value_name1 = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_ATOMIC) || '0';
  var statements_name2 = pythonGenerator.statementToCode(block, 'NAME2') || '';
  var code = 'for ' + variable_name + ' in range(' + value_name1 + '):\n' +
             pythonGenerator.prefixLines(statements_name2, pythonGenerator.INDENT);
  return code;
};

/* ========= FOR LOOP (iterable) ========= */
Blockly.Blocks['fori'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("for")
        .appendField(new Blockly.FieldVariable("i"), "NAME")
        .appendField("in");
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendStatementInput("NAME2")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0000CD');
    this.setTooltip("For loop over iterable.");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['fori'] = function(block) {
  var variable_name = pythonGenerator.variableDB_.getName(block.getFieldValue('NAME'), Blockly.VARIABLE_CATEGORY_NAME);
  var value_name1 = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_ATOMIC) || '[]';
  var statements_name2 = pythonGenerator.statementToCode(block, 'NAME2') || '';
  var code = 'for ' + variable_name + ' in ' + value_name1 + ':\n' +
             pythonGenerator.prefixLines(statements_name2, pythonGenerator.INDENT);
  return code;
};

/* ========= WHILE LOOP ========= */
Blockly.Blocks['while'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("while");
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendStatementInput("NAME1")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0000CD');
    this.setTooltip("While loop with condition.");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['while'] = function(block) {
  var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || 'False';
  var statements_name1 = pythonGenerator.statementToCode(block, 'NAME1') || '';
  var code = 'while ' + value_name + ':\n' +
             pythonGenerator.prefixLines(statements_name1, pythonGenerator.INDENT);
  return code;
};

/* ========= TRUE/FALSE DROPDOWN ========= */
Blockly.Blocks['true'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["True","True"], ["False","False"]]), "NAME");
    this.setOutput(true, null);
    this.setColour('#0000CD');
    this.setTooltip("Boolean True/False.");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['true'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var code = dropdown_name;
  return [code, pythonGenerator.ORDER_ATOMIC];
};
