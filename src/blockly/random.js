import "blockly/blocks";
import { pythonGenerator } from "blockly/python";
import * as Blockly from "blockly/core";

/* ---------- Random.choice ---------- */
Blockly.Blocks['random_choice'] = {
  init: function () {
    this.appendValueInput("LIST")
      .setCheck("Array")
      .appendField("random choice from list");
    this.setOutput(true, null);
    this.setColour(230);
  }
};
pythonGenerator.forBlock['random_choice'] = function (block) {
  const list = pythonGenerator.valueToCode(block, 'LIST', pythonGenerator.ORDER_NONE) || '[]';
  pythonGenerator.definitions_['import_random'] = 'import random';
  return [`random.choice(${list})`, pythonGenerator.ORDER_FUNCTION_CALL];
};