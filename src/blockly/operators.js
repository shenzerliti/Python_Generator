import "blockly/blocks";
import { pythonGenerator } from "blockly/python";
import * as Blockly from "blockly/core";

// Math operator block
Blockly.Blocks['mathoperator'] = {
    init: function() {
        this.appendValueInput("NAME1").setCheck(null);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["+","+"],["-","-"],["*","*"],["/","/"],["%","%"],["**","**"]]), "NAME");
        this.appendValueInput("NAME").setCheck(null);
        this.appendDummyInput().appendField("# numbers only");
        this.setOutput(true, null);
        this.setColour('#32CD32');
    }
};

pythonGenerator.forBlock['mathoperator'] = function(block) {
  var value_name1 = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_ATOMIC) || '0';
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || '0';
  var code = value_name1+' '+dropdown_name+' '+value_name;
  return [code, pythonGenerator.ORDER_ATOMIC];
};

// String operator block
Blockly.Blocks['stringoperator'] = {
    init: function() {
        this.appendValueInput("NAME1").setCheck(null);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["+","+"],["*","*"]]), "NAME");
        this.appendValueInput("NAME").setCheck(null);
        this.appendDummyInput().appendField("# string only");    
        this.setOutput(true, null);
        this.setColour('#32CD32');
    }
};

pythonGenerator.forBlock['stringoperator'] = function(block) {
  var value_name1 = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_ATOMIC) || '""';
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || '""';
  var code = value_name1+' '+dropdown_name+' '+value_name;
  return [code, pythonGenerator.ORDER_ATOMIC];
};

// And/Or block
Blockly.Blocks['andextra'] = {
    init: function() {
        this.appendValueInput("NAME1").setCheck(null);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["and","and"], ["or","or"]]), "NAME");
        this.appendValueInput("NAME").setCheck(null);
        this.setOutput(true, null);
        this.setColour('#32CD32');
    }
};

pythonGenerator.forBlock['andextra'] = function(block) {
  var value_name1 = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_ATOMIC) || 'False';
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || 'False';
  var code = value_name1+' '+dropdown_name+' '+value_name;
  return [code, pythonGenerator.ORDER_ATOMIC];
};

// Comparison block
Blockly.Blocks['compextra'] = {
  init: function() {
    this.appendValueInput("NAME1").setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[">",">"], ["<","<"], [">=",">="], ["<=","<="], ["==","=="], ["!=","!="]]), "NAME");
    this.appendValueInput("NAME").setCheck(null);
    this.setOutput(true, null);
    this.setColour('#32CD32');
  }
};

pythonGenerator.forBlock['compextra'] = function(block) {
  var value_name1 = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_ATOMIC) || '0';
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || '0';
  var code = value_name1+' '+dropdown_name+' '+value_name;
  return [code, pythonGenerator.ORDER_ATOMIC];
};

// In/Is block
Blockly.Blocks['inblock'] = {
    init: function() {
        this.appendValueInput("NAME1").setCheck(null);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["in","in"], ["is","is"]]), "NAME");
        this.appendValueInput("NAME").setCheck(null);
        this.setOutput(true, null);
        this.setColour('#32CD32');
    }
};

pythonGenerator.forBlock['inblock'] = function(block) {
  var value_name1 = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_ATOMIC) || '""';
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || '""';
  var code = value_name1+' '+dropdown_name+' '+value_name;
  return [code, pythonGenerator.ORDER_ATOMIC];
};

// Splicing block
Blockly.Blocks['splicing'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("item"), "NAME")
            .appendField("[")
            .appendField(new Blockly.FieldTextInput(""), "NAME1")
            .appendField(new Blockly.FieldDropdown([[":",":"], ["::","::"]]), "NAME2")
            .appendField(new Blockly.FieldTextInput(""), "NAME3")
            .appendField("]");
        this.setOutput(true, null);
        this.setColour('#32CD32');
    }
};

pythonGenerator.forBlock['splicing'] = function(block) {
  var variable_name = pythonGenerator.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var text_name1 = block.getFieldValue('NAME1');
  var dropdown_name2 = block.getFieldValue('NAME2');
  var text_name3 = block.getFieldValue('NAME3');
  var code = variable_name+'['+text_name1+dropdown_name2+text_name3+']';
  return [code, pythonGenerator.ORDER_ATOMIC];
};

// Increment/Decrement block
Blockly.Blocks['increment'] = {
    init: function() {
        this.appendValueInput("NAME").setCheck(null);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["+=","+="], ["-=","-="]]), "NAME");
        this.appendValueInput("xyz").setCheck(null);
        this.appendDummyInput().appendField("# increment and decrement");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#32CD32');
    }
};

pythonGenerator.forBlock['increment'] = function(block) {
  var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || '0';
  var dropdown_name = block.getFieldValue('NAME');
  var value_xyz = pythonGenerator.valueToCode(block, 'xyz', pythonGenerator.ORDER_ATOMIC) || '0';
  var code = value_name+dropdown_name+value_xyz+'\n';
  return code;
};

Blockly.Blocks['math_assignment'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("item"), "VAR") // variable picker
        .appendField("=");
    this.appendValueInput("LEFT")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["+","+"],["-","-"],["*","*"],["/","/"]]), "OPERATOR");
    this.appendValueInput("RIGHT")
        .setCheck("Number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#32CD32');
    this.setTooltip("Assign result of operation to a variable (e.g., sum = a + b)");
    this.setHelpUrl("");
  }
};

pythonGenerator.forBlock['math_assignment'] = function(block) {
  var variable = pythonGenerator.nameDB_.getName(
    block.getFieldValue('VAR'),
    Blockly.VARIABLE_CATEGORY_NAME
  );
  var left = pythonGenerator.valueToCode(block, 'LEFT', pythonGenerator.ORDER_ATOMIC) || '0';
  var operator = block.getFieldValue('OPERATOR');
  var right = pythonGenerator.valueToCode(block, 'RIGHT', pythonGenerator.ORDER_ATOMIC) || '0';
  var code = variable + " = " + left + " " + operator + " " + right + "\n";
  return code;
};
