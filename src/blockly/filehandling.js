import "blockly/blocks";
import { pythonGenerator } from "blockly/python";
import * as Blockly from "blockly/core";


// ---------------- Open File Block ----------------
Blockly.Blocks['f1'] = {
  init: function() {
    this.appendValueInput("xyz")
        .setCheck(null)
        .appendField("open the file ");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["read", "r"],
          ["write", "w"],
          ["append", "a"]
        ]), "NAME")
        .appendField("and save in")
        .appendField(new Blockly.FieldVariable("f"), "NAME1");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#99cc00');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['f1'] = function(block) {
  const text_xyz = pythonGenerator.valueToCode(block, 'xyz', pythonGenerator.ORDER_NONE) || "''";
  const dropdown_name = block.getFieldValue('NAME');
  const variable_name1 = pythonGenerator.nameDB_.getName(
    block.getFieldValue('NAME1'),
    Blockly.VARIABLE_CATEGORY_NAME
  );
  const code = `${variable_name1} = open(${text_xyz}, "${dropdown_name}")\n`;
  return code;
};

// ---------------- Read File Block ----------------
Blockly.Blocks['f2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("read the file")
        .appendField(new Blockly.FieldVariable("file name"), "NAME");
    this.setOutput(true, null);
    this.setColour('#99cc00');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['f2'] = function(block) {
  const variable_name = pythonGenerator.nameDB_.getName(
    block.getFieldValue('NAME'),
    Blockly.VARIABLE_CATEGORY_NAME
  );
  const code = `${variable_name}.read()`;
  return [code, pythonGenerator.ORDER_FUNCTION_CALL];
};

// ---------------- Write into File Block ----------------
Blockly.Blocks['f3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["write","write"]]), "NAME");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("into")
        .appendField(new Blockly.FieldVariable("file name"), "NAME1");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#99cc00');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['f3'] = function(block) {
  const dropdown_name = block.getFieldValue('NAME');
  const value_name = pythonGenerator.valueToCode(block, 'NAME2', pythonGenerator.ORDER_NONE) || "''";
  const variable_name1 = pythonGenerator.nameDB_.getName(
    block.getFieldValue('NAME1'),
    Blockly.VARIABLE_CATEGORY_NAME
  );
  const code = `${variable_name1}.${dropdown_name}(${value_name})\n`;
  return code;
};

// ---------------- Close File Block ----------------
Blockly.Blocks['f4'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("close the file")
        .appendField(new Blockly.FieldVariable("file name"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#99cc00');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['f4'] = function(block) {
  const variable_name = pythonGenerator.nameDB_.getName(
    block.getFieldValue('NAME'),
    Blockly.VARIABLE_CATEGORY_NAME
  );
  const code = `${variable_name}.close()\n`;
  return code;
};

// ---------------- Readline / Readlines Block ----------------
Blockly.Blocks['readline'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([
          ["readline","readline"],
          ["readlines","readlines"]
        ]), "NAME1")
        .appendField("()");
    this.setOutput(true, null);
    this.setColour('#99cc00');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['readline'] = function(block) {
  const text_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_NONE) || "''";
  const dropdown_name1 = block.getFieldValue('NAME1');
  const code = `${text_name}.${dropdown_name1}()`;
  return [code, pythonGenerator.ORDER_FUNCTION_CALL];
};