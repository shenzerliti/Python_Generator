import "blockly/blocks";
import { pythonGenerator } from "blockly/python";
import * as Blockly from "blockly/core";


// ---------------- INLINE TEXT ----------------
const OUTPUT_SHAPE_ROUND = 0;
Blockly.Blocks['inlinetxt'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput(""), "text");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("#FFFFFF", "#FFFFFF", "#FFFFFF");
        this.setOutputShape(OUTPUT_SHAPE_ROUND);
        this.setTooltip("Text input for inline input");
        this.setHelpUrl("");
    }
};

pythonGenerator.forBlock['inlinetxt'] = function (block) {
    var text_text = block.getFieldValue('text');
    var code = text_text;
    return [code, pythonGenerator.ORDER_ATOMIC];
};


// ---------------- IMPORT FROM ----------------
Blockly.Blocks['import_from'] = {
    init: function () {
        this.appendDummyInput().appendField("From");
        this.appendValueInput("NAME").setCheck(null);
        this.appendDummyInput().appendField("Import");
        this.appendValueInput("NAME1").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#c93664');
    }
};

pythonGenerator.forBlock['import_from'] = function (block) {
    var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_FUNCTION_CALL);
    var value_name1 = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_FUNCTION_CALL);
    return `\nfrom ${value_name} import ${value_name1}`;
};


// ---------------- IMPORT AS ----------------
Blockly.Blocks['import_as'] = {
    init: function () {
        this.appendDummyInput().appendField("Import");
        this.appendValueInput("NAME").setCheck(null);
        this.appendDummyInput().appendField("As");
        this.appendValueInput("NAME1").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#c93664');
    }
};

pythonGenerator.forBlock['import_as'] = function (block) {
    var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_FUNCTION_CALL);
    var value_name1 = pythonGenerator.valueToCode(block, 'NAME1', pythonGenerator.ORDER_FUNCTION_CALL);
    return `\nimport ${value_name} as ${value_name1}`;
};


// ---------------- IMPORT ----------------
Blockly.Blocks['import'] = {
    init: function() {
        this.appendDummyInput().appendField("Import");
        this.appendValueInput("NAME").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#c93664');
    }
};

pythonGenerator.forBlock['import'] = function(block) {
  var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_FUNCTION_CALL);
  return `\nimport ${value_name}`;
};


// ---------------- CALENDAR ----------------
Blockly.Blocks['calender'] = {
    init: function () {
        this.appendDummyInput().appendField("calendar");
        this.setOutput(true, null);
        this.setColour('#c93664');
    }
};

pythonGenerator.forBlock['calender'] = function () {
    return ['calendar', pythonGenerator.ORDER_FUNCTION_CALL];
};


// ---------------- MONTH ----------------
Blockly.Blocks['month'] = {
    init: function () {
        this.appendDummyInput().appendField("month");
        this.setOutput(true, null);
        this.setColour('#c93664');
    }
};

pythonGenerator.forBlock['month'] = function () {
    return ['month', pythonGenerator.ORDER_FUNCTION_CALL];
};

// ---------------- SLEEP BLOCK ----------------
Blockly.Blocks['sleep'] = {
    init: function () {
        this.appendDummyInput().appendField("sleep");
        this.setOutput(true, null);
        this.setColour('#c93664');
    }
};

pythonGenerator.forBlock['sleep'] = function () {
    return ['sleep', pythonGenerator.ORDER_FUNCTION_CALL];
};
// ---------------- TIME ----------------
Blockly.Blocks['time'] = {
    init: function () {
        this.appendDummyInput().appendField("time");
        this.setOutput(true,'value');
        this.setColour('#c93664');
    }
};

pythonGenerator.forBlock['time'] = function () {
    return ['time', pythonGenerator.ORDER_FUNCTION_CALL];
};


// ---------------- WAIT ----------------
Blockly.Blocks['wait'] = {
    init: function () {
        this.appendDummyInput().appendField("wait");
        this.setOutput(true, null);
        this.setColour('#c93664');
    }
};

pythonGenerator.forBlock['wait'] = function () {
    return ['sleep', pythonGenerator.ORDER_FUNCTION_CALL];
};


// ---------------- RANDOM ----------------
Blockly.Blocks['random1'] = {
    init: function () {
        this.appendDummyInput().appendField("random");
        this.setOutput(true, null);
        this.setColour('#c93664');
    }
};

pythonGenerator.forBlock['random1'] = function () {
    return ['random', pythonGenerator.ORDER_FUNCTION_CALL];
};


Blockly.Blocks['random2'] = {
    init: function () {
        this.appendDummyInput().appendField("randint");
        this.setOutput(true, null);
        this.setColour('#c93664');
    }
};

pythonGenerator.forBlock['random2'] = function () {
    return ['randint', pythonGenerator.ORDER_FUNCTION_CALL];
};


// ---------------- SIGNAL ----------------
Blockly.Blocks['signal'] = {
    init: function() {
      this.appendDummyInput().appendField("signal");
      this.setOutput(true, null);
      this.setColour('#c93664');
    }
};

pythonGenerator.forBlock['signal'] = function() {
    return ['signal', pythonGenerator.ORDER_FUNCTION_CALL];
};


// ---------------- PAUSE ----------------
Blockly.Blocks['pause'] = {
    init: function () {
        this.appendDummyInput().appendField("pause");
        this.setOutput(true, null);
        this.setColour('#c93664');
    }
};

pythonGenerator.forBlock['pause'] = function () {
    return ['pause', pythonGenerator.ORDER_FUNCTION_CALL];
};


// ---------------- CHOICE ----------------
Blockly.Blocks['choice'] = {
    init: function () {
        this.appendDummyInput().appendField("choice");
        this.setOutput(true, null);
        this.setColour('#c93664');
    }
};

pythonGenerator.forBlock['choice'] = function () {
    return ['choice', pythonGenerator.ORDER_FUNCTION_CALL];
};


// ---------------- DIR ----------------
Blockly.Blocks['dir'] = {
  init: function() {
    this.appendDummyInput().appendField("dir(");
    this.appendValueInput("NAME").setCheck(null);
    this.appendDummyInput().appendField(")");
    this.setOutput(true, null);
    this.setColour('#c93664');
  }
};

pythonGenerator.forBlock['dir'] = function(block) {
  var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_FUNCTION_CALL);
  return [`dir(${value_name})`, pythonGenerator.ORDER_FUNCTION_CALL];
};


// ---------------- MODULE CALL ----------------
Blockly.Blocks['module_call'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("module"), "NAME")
        .appendField(".");
    this.appendValueInput("NAME").setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#c93664');
  }
};

pythonGenerator.forBlock['module_call'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_FUNCTION_CALL);
  return `\n${text_name}.${value_name}`;
};


// ---------------- MODULE CALL 2 ----------------
Blockly.Blocks['module_call2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("module"), "NAME")
        .appendField(".");
    this.appendValueInput("NAME").setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#c93664');
  }
};

pythonGenerator.forBlock['module_call2'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_FUNCTION_CALL);
  return [`${text_name}.${value_name}`, pythonGenerator.ORDER_FUNCTION_CALL];
};


// ---------------- RE ----------------
Blockly.Blocks['re'] = {
    init: function() {
      this.appendDummyInput().appendField("re");
      this.setOutput(true, null);
      this.setColour('#c93664');
    }
};

pythonGenerator.forBlock['re'] = function() {
    return ['re', pythonGenerator.ORDER_FUNCTION_CALL];
};