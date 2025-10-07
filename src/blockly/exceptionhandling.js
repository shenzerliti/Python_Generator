import "blockly/blocks";
import { pythonGenerator } from "blockly/python"; // Correct for Blockly 8.x custom generators
import * as Blockly from "blockly/core";

// ---------------- TRY Block ----------------
Blockly.Blocks['e1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("try");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#ff3396');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['e1'] = function(block) {
  const statements_name = pythonGenerator.statementToCode(block, 'NAME');
  const code = `try:\n${statements_name}`;
  return code;
};

// ---------------- EXCEPT Block ----------------
Blockly.Blocks['e2'] = {
  init: function () {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("except");
    this.appendStatementInput("NAME1")
        .setCheck(null);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#ff3396');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['e2'] = function (block) {
  const value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_NONE) || "";
  const statements_name1 = pythonGenerator.statementToCode(block, 'NAME1');
  const code = `except ${value_name}:\n${statements_name1}`;
  return code;
};

// ---------------- ZeroDivisionError Block ----------------
Blockly.Blocks['e3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ZeroDivisionError");
    this.setOutput(true, null);
    this.setColour('#ff3396');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['e3'] = function(block) {
  const code = 'ZeroDivisionError';
  return [code, pythonGenerator.ORDER_ATOMIC];
};

// ---------------- IOError Block ----------------
Blockly.Blocks['e4'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("IOError");
    this.setOutput(true, null);
    this.setColour('#ff3396');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['e4'] = function(block) {
  const code = 'IOError';
  return [code, pythonGenerator.ORDER_ATOMIC];
};