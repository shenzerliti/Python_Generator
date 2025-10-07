import "blockly/blocks";
import * as Blockly from "blockly/core";
import { pythonGenerator } from "blockly/python"; // Correct import for Blockly 8.x custom generators

// Sleep block
Blockly.Blocks['m1'] = {
  init: function () {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("sleep (");
    this.appendDummyInput()
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b533ff');
  }
};

pythonGenerator.forBlock['m1'] = function(block) {
  var text_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || '0';
  return 'sleep(' + text_name + ')\n';
};

// Random time block
Blockly.Blocks['m2'] = {
  init: function () {
    this.appendDummyInput()
        .appendField("Select random time")
        .appendField(new Blockly.FieldNumber(0, 0), "NAME1")
        .appendField(new Blockly.FieldNumber(0, 0), "NAME2");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b533ff');
  }
};

pythonGenerator.forBlock['m2'] = function(block) {
  var number_name1 = block.getFieldValue('NAME1');
  var number_name2 = block.getFieldValue('NAME2');
  return 'time = random.uniform(' + number_name1 + ',' + number_name2 + ')\n';
};

// Pause block
Blockly.Blocks['m3'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Pause (");
    this.appendDummyInput()
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b533ff');
  }
};

pythonGenerator.forBlock['m3'] = function(block) {
  var text_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || '0';
  return 'pause(' + text_name + ')\n';
};

// Randint block
Blockly.Blocks['m4'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("randint (");
    this.appendDummyInput()
        .appendField(")");
    this.setOutput(true, null);
    this.setColour('#b533ff');
  }
};

pythonGenerator.forBlock['m4'] = function(block) {
  var text_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || '0';
  return ['randint(' + text_name + ')', pythonGenerator.ORDER_ATOMIC];
};

// Choice block
Blockly.Blocks['randchar'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("choice (");
    this.appendDummyInput()
        .appendField(")");
    this.setOutput(true, null);
    this.setColour('#b533ff');
  }
};

pythonGenerator.forBlock['randchar'] = function(block) {
  var text_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || '[]';
  return ['choice(' + text_name + ')', pythonGenerator.ORDER_ATOMIC];
};

// Len block
Blockly.Blocks['m5'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("len(")
        .appendField(new Blockly.FieldVariable("item"), "NAME")
        .appendField(")");
    this.setOutput(true, null);
    this.setColour('#b533ff');
  }
};

pythonGenerator.forBlock['m5'] = function(block) {
  var variable_name = pythonGenerator.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  return ['len(' + variable_name + ')', pythonGenerator.ORDER_ATOMIC];
};

// Count block
Blockly.Blocks['count'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("count ");
    this.appendDummyInput()
        .appendField("from")
        .appendField(new Blockly.FieldVariable("variable"), "NAME1");
    this.setOutput(true, null);
    this.setColour('#b533ff');
  }
};

pythonGenerator.forBlock['count'] = function(block) {
  var text_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || '0';
  var variable_name1 = pythonGenerator.variableDB_.getName(block.getFieldValue('NAME1'), Blockly.Variables.NAME_TYPE);
  var code = variable_name1 + '.count(' + text_name + ')';
  return [code, pythonGenerator.ORDER_ATOMIC];
};

// Pass, Break, Continue block
Blockly.Blocks['pass'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["pass","pass"], ["break","break"], ["continue","continue"]]), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b533ff');
  }
};

pythonGenerator.forBlock['pass'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  return dropdown_name + '\n';
};

// Boolean True/False block
Blockly.Blocks['true'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["True","True"], ["False","False"]]), "NAME");
    this.setOutput(true, null);
    this.setColour('#b533ff');
  }
};

pythonGenerator.forBlock['true'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  return [dropdown_name, pythonGenerator.ORDER_ATOMIC];
};

// Month block
Blockly.Blocks['year'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("month(");
    this.appendDummyInput()
        .appendField(")");
    this.setOutput(true, null);
    this.setColour('#b533ff');
  }
};

pythonGenerator.forBlock['year'] = function(block) {
  var text_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || '0';
  return ['month(' + text_name + ')', pythonGenerator.ORDER_ATOMIC];
};

// Calendar block
Blockly.Blocks['year1'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("calendar(");
    this.appendDummyInput()
        .appendField(")");
    this.setOutput(true, null);
    this.setColour('#b533ff');
  }
};

pythonGenerator.forBlock['year1'] = function(block) {
  var text_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || '0';
  return ['calendar(' + text_name + ')', pythonGenerator.ORDER_ATOMIC];
};

// Join block
Blockly.Blocks['join'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".")
        .appendField("join");
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.setOutput(true, null);
    this.setColour('#b533ff');
  }
};

pythonGenerator.forBlock['join'] = function(block) {
  var text_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || '""';
  var value_name = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_ATOMIC) || '[]';
  return [text_name + '.join(' + value_name + ')', pythonGenerator.ORDER_ATOMIC];
};