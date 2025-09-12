import "blockly/blocks";
import { pythonGenerator } from "blockly/python";
import * as Blockly from "blockly/core";

/* ---------- time.sleep ---------- */
Blockly.Blocks['time_sleep'] = {
  init: function () {
    this.appendValueInput("SECONDS")
      .setCheck("Number")
      .appendField("sleep for seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
  }
};
pythonGenerator.forBlock['time_sleep'] = function (block) {
  const secs =pythonGenerator.valueToCode(block, 'SECONDS', pythonGenerator.ORDER_NONE) || '1';
  pythonGenerator.definitions_['import_time'] = 'import time';
  return `time.sleep(${secs})\n`;
};