import "blockly/blocks";
import { pythonGenerator } from "blockly/python";
import * as Blockly from "blockly/core";

// Assign a tuple to a variable
Blockly.Blocks['t1'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField(new Blockly.FieldVariable("tuple1"), "NAME")
        .appendField("=(");
    this.appendDummyInput()
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#801e33");
  }
};

pythonGenerator.forBlock['t1'] = function(block) {
  var variable_name = pythonGenerator.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var text_name1 = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_ATOMIC) || '';
  var code = variable_name + ' = (' + text_name1 + ')';
  return code + '\n';
};

// Convert value into a tuple
Blockly.Blocks['tuple'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("convert");
    this.appendDummyInput()
        .appendField("into tuple");
    this.setOutput(true, null);
    this.setColour("#801e33");
  }
};

pythonGenerator.forBlock['tuple'] = function(block) {
  var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || '';
  var code = 'tuple(' + value_name + ')';
  return [code, pythonGenerator.ORDER_ATOMIC];
};
