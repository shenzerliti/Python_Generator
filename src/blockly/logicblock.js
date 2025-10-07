import "blockly/blocks";
import { pythonGenerator } from "blockly/python"; // Correct for Blockly 8.x custom generators
import * as Blockly from "blockly/core";

Blockly.Blocks['if'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("if");
        this.appendStatementInput("NAME1")
            .setCheck(null);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#0CC0FF');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

pythonGenerator.forBlock['if'] = function (block) {
    var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || 'False';
    var statements_name1 = pythonGenerator.statementToCode(block, 'NAME1') || '';
    var code = 'if ' + value_name + ':\n' + statements_name1;
    return code;
};

Blockly.Blocks['elif3'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("elif");
        this.appendStatementInput("NAME1")
            .setCheck(null);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#0CC0FF');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

pythonGenerator.forBlock['elif3'] = function (block) {
    var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC) || 'False';
    var statements_name1 = pythonGenerator.statementToCode(block, 'NAME1') || '';
    var code = 'elif ' + value_name + ':\n' + statements_name1;
    return code;
};

Blockly.Blocks['else'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("else");
        this.appendStatementInput("NAME")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#0CC0FF');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

pythonGenerator.forBlock['else'] = function(block) {
    var statements_name = pythonGenerator.statementToCode(block, 'NAME') || '';
    var code = 'else:\n' + statements_name;
    return code;
};

Blockly.Blocks['whilenew'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("repeat forever");
        this.appendStatementInput("whilestate")
            .setCheck(null)
            .appendField("do");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#0CC0FF');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

pythonGenerator.forBlock['whilenew'] = function(block) {
    var statements_whilestate = pythonGenerator.statementToCode(block, 'whilestate') || '';
    var code = 'while True:\n' + statements_whilestate;
    return code;
};