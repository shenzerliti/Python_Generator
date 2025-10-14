import "blockly/blocks";
import { pythonGenerator } from "blockly/python"; // Correct for Blockly 8.x custom generators
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
Blockly.Blocks['for_range'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("for")
        .appendField(new Blockly.FieldVariable("i"), "VAR")
        .appendField("in range (");
    this.appendValueInput("START")
        .setCheck("Number")
        .appendField("from");
    this.appendValueInput("END")
        .setCheck("Number")
        .appendField("to");
    this.appendDummyInput().appendField(")");
    this.appendStatementInput("DO")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0000CD');
  }
};

pythonGenerator.forBlock['for_range'] = function(block) {
  var start = pythonGenerator.valueToCode(block, 'START', pythonGenerator.ORDER_NONE) || '0';
  var end = pythonGenerator.valueToCode(block, 'END', pythonGenerator.ORDER_NONE) || '0';
  var statements = pythonGenerator.statementToCode(block, 'DO') || '';
  var varId = block.getFieldValue('VAR');
  var varName = pythonGenerator.nameDB_.getName(varId, Blockly.VARIABLE_CATEGORY_NAME);
  var code = `for ${varName} in range(${start}, ${end}):\n${pythonGenerator.prefixLines(statements, pythonGenerator.INDENT)}`;
  return code;
};

/* ========= WHILE LOOP ========= */
Blockly.Blocks['while_do'] = {
  init: function() {
    this.appendDummyInput().appendField("while");
    this.appendValueInput("COND").setCheck(null);
    this.appendStatementInput("DO").setCheck(null).appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0000CD');
  }
};

pythonGenerator.forBlock['while_do'] = function(block) {
  var cond = pythonGenerator.valueToCode(block, 'COND', pythonGenerator.ORDER_ATOMIC) || 'False';
  var statements_do = pythonGenerator.statementToCode(block, 'DO') || '';
  return `while ${cond}:\n${pythonGenerator.prefixLines(statements_do, pythonGenerator.INDENT)}`;
};


Blockly.Blocks['while_loop'] = {
  init: function () {
    this.appendValueInput("CONDITION")
      .setCheck(true)
      .appendField("while");
    this.setPreviousStatement(true, null);
    this.appendStatementInput(true,null);
    this.setNextStatement(true, null);
    this.setColour('#0000CD'); 
    this.setTooltip("Repeat while the condition is true");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['while_loop'] = function (block) {
  const condition = pythonGenerator.valueToCode(block, 'CONDITION', pythonGenerator.ORDER_NONE) || 'True';
  const code = `while ${condition}:\n    pass\n`;  // empty body, just pass
  return code;
};