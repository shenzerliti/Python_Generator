import * as Blockly from "blockly/core";
import "blockly/blocks";
import { pythonGenerator } from "blockly/python";

/* ========= INFINITE WHILE LOOP ========= */
Blockly.Blocks["infinitewhile"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("repeat forever");
    this.appendStatementInput("BODY")
      .setCheck(null)
      .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0000CD");
    this.setTooltip("Runs the inner code forever (infinite loop).");
    this.setHelpUrl("");
  },
};

pythonGenerator.forBlock["infinitewhile"] = function (block) {
  const body = pythonGenerator.statementToCode(block, "BODY") || "";
  return `while True:\n${pythonGenerator.prefixLines(body, pythonGenerator.INDENT)}`;
};

/* ========= FOR LOOP (range) ========= */
Blockly.Blocks["for_range"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("for")
      .appendField(new Blockly.FieldVariable("i"), "VAR")
      .appendField("in range(");
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
    this.setColour("#0000CD");
    this.setTooltip("Loop from start to end (range).");
    this.setHelpUrl("");
  },
};

pythonGenerator.forBlock["for_range"] = function (block) {
  const start = pythonGenerator.valueToCode(block, "START", pythonGenerator.ORDER_NONE) || "0";
  const end = pythonGenerator.valueToCode(block, "END", pythonGenerator.ORDER_NONE) || "0";
  const body = pythonGenerator.statementToCode(block, "DO") || "";
  const varId = block.getFieldValue("VAR");
  const varName = pythonGenerator.nameDB_.getName(varId, Blockly.VARIABLE_CATEGORY_NAME);
  return `for ${varName} in range(${start}, ${end}):\n${pythonGenerator.prefixLines(body, pythonGenerator.INDENT)}`;
};

/* ========= WHILE LOOP (with body) ========= */
Blockly.Blocks["while_do"] = {
  init: function () {
    this.appendValueInput("COND")
      .setCheck(null)
      .appendField("while"); // condition appears inline with "while"
    this.appendStatementInput("DO")
      .setCheck(null)
      .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0000CD");
    this.setTooltip("Repeat while the condition is true.");
    this.setHelpUrl("");
  },
};

pythonGenerator.forBlock["while_do"] = function (block) {
  const cond = pythonGenerator.valueToCode(block, "COND", pythonGenerator.ORDER_ATOMIC) || "False";
  const body = pythonGenerator.statementToCode(block, "DO") || "";
  return `while ${cond}:\n${pythonGenerator.prefixLines(body, pythonGenerator.INDENT)}`;
};

/* ========= WHILE LOOP (no body, single line) ========= */
Blockly.Blocks["while_loop"] = {
  init: function () {
    this.appendValueInput("CONDITION")
      .setCheck(null)
      .appendField("while");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0000CD");
    this.setTooltip("Repeat while the condition is true (no body).");
    this.setHelpUrl("");
  },
};

pythonGenerator.forBlock["while_loop"] = function (block) {
  const condition = pythonGenerator.valueToCode(block, "CONDITION", pythonGenerator.ORDER_NONE) || "True";
  return `while ${condition}:\n${pythonGenerator.INDENT}pass\n`;
};