import "blockly/blocks";
import { pythonGenerator } from "blockly/python";
import * as Blockly from "blockly/core";

// Define custom input block
Blockly.Blocks['text_prompt_input'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Enter text with prompt")
      .appendField(new Blockly.FieldTextInput("Enter your name:"), "PROMPT");
    this.setOutput(true, "String");
    this.setColour(160);
    this.setTooltip("Prompts the user for input");
    this.setHelpUrl("");
  }
};

// Python generator
pythonGenerator.forBlock['text_prompt_input'] = function (block) {
  const prompt = block.getFieldValue('PROMPT');
  const code = `input("${prompt}")`;
  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock['text_print'] = function(block) {
  const msg = pythonGenerator.valueToCode(block, 'TEXT', pythonGenerator.ORDER_NONE) || "''";
  return `print(${msg})\n`;
};
