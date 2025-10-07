import "blockly/blocks";
import { pythonGenerator } from "blockly/python";
import * as Blockly from "blockly/core";

// turtle = Turtle()
Blockly.Blocks['turtle_create'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "NAME")
        .appendField("= Turtle()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#801E33");
  }
};
pythonGenerator.forBlock['turtle_create'] = function(block) {
  const varName = pythonGenerator.nameDB_.getName(block.getFieldValue('NAME'), Blockly.VARIABLE_CATEGORY_NAME);
  return `${varName} = Turtle()\n`;
};

// screen = Screen()
Blockly.Blocks['screen_create'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("screen"), "NAME")
        .appendField("= Screen()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#801E33");
  }
};
pythonGenerator.forBlock['screen_create'] = function(block) {
  const varName = pythonGenerator.nameDB_.getName(block.getFieldValue('NAME'), Blockly.VARIABLE_CATEGORY_NAME);
  return `${varName} = Screen()\n`;
};

// screen.setup(width, height)
Blockly.Blocks['screen_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("screen"), "NAME")
        .appendField(".setup(");
    this.appendValueInput("WIDTH").setCheck("Number");
    this.appendDummyInput().appendField(",");
    this.appendValueInput("HEIGHT").setCheck("Number");
    this.appendDummyInput().appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#801E33");
  }
};
pythonGenerator.forBlock['screen_setup'] = function(block) {
  const varName = pythonGenerator.nameDB_.getName(block.getFieldValue('NAME'), Blockly.VARIABLE_CATEGORY_NAME);
  const width = pythonGenerator.valueToCode(block, 'WIDTH', pythonGenerator.ORDER_NONE) || '800';
  const height = pythonGenerator.valueToCode(block, 'HEIGHT', pythonGenerator.ORDER_NONE) || '600';
  return `${varName}.setup(${width}, ${height})\n`;
};

// screen.bgcolor(r, g, b)
Blockly.Blocks['screen_bgcolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("screen"), "NAME")
        .appendField(".bgcolor(");
    this.appendValueInput("R").setCheck("Number");
    this.appendDummyInput().appendField(",");
    this.appendValueInput("G").setCheck("Number");
    this.appendDummyInput().appendField(",");
    this.appendValueInput("B").setCheck("Number");
    this.appendDummyInput().appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#801E33");
  }
};
pythonGenerator.forBlock['screen_bgcolor'] = function(block) {
  const varName = pythonGenerator.nameDB_.getName(block.getFieldValue('NAME'), Blockly.VARIABLE_CATEGORY_NAME);
  const r = pythonGenerator.valueToCode(block, 'R', pythonGenerator.ORDER_NONE) || '255';
  const g = pythonGenerator.valueToCode(block, 'G', pythonGenerator.ORDER_NONE) || '255';
  const b = pythonGenerator.valueToCode(block, 'B', pythonGenerator.ORDER_NONE) || '255';
  return `${varName}.bgcolor(${r}, ${g}, ${b})\n`;
};

// turtle.forward(distance)
Blockly.Blocks['turtle_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "NAME")
        .appendField(".forward(");
    this.appendValueInput("DIST").setCheck("Number");
    this.appendDummyInput().appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#801E33");
  }
};
pythonGenerator.forBlock['turtle_forward'] = function(block) {
  const varName = pythonGenerator.nameDB_.getName(block.getFieldValue('NAME'), Blockly.VARIABLE_CATEGORY_NAME);
  const dist = pythonGenerator.valueToCode(block, 'DIST', pythonGenerator.ORDER_NONE) || '0';
  return `${varName}.forward(${dist})\n`;
};

// turtle.circle(radius)
Blockly.Blocks['turtle_circle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "NAME")
        .appendField(".circle(");
    this.appendValueInput("RADIUS").setCheck("Number");
    this.appendDummyInput().appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#801E33");
  }
};
pythonGenerator.forBlock['turtle_circle'] = function(block) {
  const varName = pythonGenerator.nameDB_.getName(block.getFieldValue('NAME'), Blockly.VARIABLE_CATEGORY_NAME);
  const radius = pythonGenerator.valueToCode(block, 'RADIUS', pythonGenerator.ORDER_NONE) || '50';
  return `${varName}.circle(${radius})\n`;
};

// turtle.speed(speed)
Blockly.Blocks['turtle_speed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "NAME")
        .appendField(".speed(");
    this.appendValueInput("SPEED").setCheck("Number");
    this.appendDummyInput().appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#801E33");
  }
};
pythonGenerator.forBlock['turtle_speed'] = function(block) {
  const varName = pythonGenerator.nameDB_.getName(block.getFieldValue('NAME'), Blockly.VARIABLE_CATEGORY_NAME);
  const speed = pythonGenerator.valueToCode(block, 'SPEED', pythonGenerator.ORDER_NONE) || '10';
  return `${varName}.speed(${speed})\n`;
};

// turtle.goto(x, y)
Blockly.Blocks['turtle_goto'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "NAME")
        .appendField(".goto(");
    this.appendValueInput("X").setCheck("Number");
    this.appendDummyInput().appendField(",");
    this.appendValueInput("Y").setCheck("Number");
    this.appendDummyInput().appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#801E33");
  }
};
pythonGenerator.forBlock['turtle_goto'] = function(block) {
  const varName = pythonGenerator.nameDB_.getName(block.getFieldValue('NAME'), Blockly.VARIABLE_CATEGORY_NAME);
  const x = pythonGenerator.valueToCode(block, 'X', pythonGenerator.ORDER_NONE) || '0';
  const y = pythonGenerator.valueToCode(block, 'Y', pythonGenerator.ORDER_NONE) || '0';
  return `${varName}.goto(${x}, ${y})\n`;
};

// turtle.shape("turtle")
Blockly.Blocks['turtle_shape'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "NAME")
        .appendField('.shape("turtle")');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#801E33");
  }
};
pythonGenerator.forBlock['turtle_shape'] = function(block) {
  const varName = pythonGenerator.nameDB_.getName(block.getFieldValue('NAME'), Blockly.VARIABLE_CATEGORY_NAME);
  return `${varName}.shape("turtle")\n`;
};

// turtle.width(width)
Blockly.Blocks['turtle_width'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "NAME")
        .appendField(".width(");
    this.appendValueInput("WIDTH").setCheck("Number");
    this.appendDummyInput().appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#801E33");
  }
};
pythonGenerator.forBlock['turtle_width'] = function(block) {
  const varName = pythonGenerator.nameDB_.getName(block.getFieldValue('NAME'), Blockly.VARIABLE_CATEGORY_NAME);
  const width = pythonGenerator.valueToCode(block, 'WIDTH', pythonGenerator.ORDER_NONE) || '1';
  return `${varName}.width(${width})\n`;
};

// turtle.color(r, g, b)
Blockly.Blocks['turtle_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "NAME")
        .appendField(".color(");
    this.appendValueInput("R").setCheck("Number");
    this.appendDummyInput().appendField(",");
    this.appendValueInput("G").setCheck("Number");
    this.appendDummyInput().appendField(",");
    this.appendValueInput("B").setCheck("Number");
    this.appendDummyInput().appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#801E33");
  }
};
pythonGenerator.forBlock['turtle_color'] = function(block) {
  const varName = pythonGenerator.nameDB_.getName(block.getFieldValue('NAME'), Blockly.VARIABLE_CATEGORY_NAME);
  const r = pythonGenerator.valueToCode(block, 'R', pythonGenerator.ORDER_NONE) || '0';
  const g = pythonGenerator.valueToCode(block, 'G', pythonGenerator.ORDER_NONE) || '0';
  const b = pythonGenerator.valueToCode(block, 'B', pythonGenerator.ORDER_NONE) || '0';
  return `${varName}.color(${r}, ${g}, ${b})\n`;
};

// turtle.pencolor(r, g, b)
Blockly.Blocks['turtle_pencolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "NAME")
        .appendField(".pencolor(");
    this.appendValueInput("R").setCheck("Number");
    this.appendDummyInput().appendField(",");
    this.appendValueInput("G").setCheck("Number");
    this.appendDummyInput().appendField(",");
    this.appendValueInput("B").setCheck("Number");
    this.appendDummyInput().appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#801E33");
  }
};
pythonGenerator.forBlock['turtle_pencolor'] = function(block) {
  const varName = pythonGenerator.nameDB_.getName(block.getFieldValue('NAME'), Blockly.VARIABLE_CATEGORY_NAME);
  const r = pythonGenerator.valueToCode(block, 'R', pythonGenerator.ORDER_NONE) || '0';
  const g = pythonGenerator.valueToCode(block, 'G', pythonGenerator.ORDER_NONE) || '0';
  const b = pythonGenerator.valueToCode(block, 'B', pythonGenerator.ORDER_NONE) || '0';
  return `${varName}.pencolor(${r}, ${g}, ${b})\n`;
};

// turtle.fillcolor(r, g, b)
Blockly.Blocks['turtle_fillcolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "NAME")
        .appendField(".fillcolor(");
    this.appendValueInput("R").setCheck("Number");
    this.appendDummyInput().appendField(",");
    this.appendValueInput("G").setCheck("Number");
    this.appendDummyInput().appendField(",");
    this.appendValueInput("B").setCheck("Number");
    this.appendDummyInput().appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#801E33");
  }
};
pythonGenerator.forBlock['turtle_fillcolor'] = function(block) {
  const varName = pythonGenerator.nameDB_.getName(block.getFieldValue('NAME'), Blockly.VARIABLE_CATEGORY_NAME);
  const r = pythonGenerator.valueToCode(block, 'R', pythonGenerator.ORDER_NONE) || '0';
  const g = pythonGenerator.valueToCode(block, 'G', pythonGenerator.ORDER_NONE) || '0';
  const b = pythonGenerator.valueToCode(block, 'B', pythonGenerator.ORDER_NONE) || '0';
  return `${varName}.fillcolor(${r}, ${g}, ${b})\n`;
};

// turtle.begin_fill()
Blockly.Blocks['turtle_begin_fill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "NAME")
        .appendField(".begin_fill()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#801E33");
  }
};
pythonGenerator.forBlock['turtle_begin_fill'] = function(block) {
  const varName = pythonGenerator.nameDB_.getName(block.getFieldValue('NAME'), Blockly.VARIABLE_CATEGORY_NAME);
  return `${varName}.begin_fill()\n`;
};

// turtle.penup() or turtle.pendown()
Blockly.Blocks['turtle_penupdown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "NAME")
        .appendField(new Blockly.FieldDropdown([["up", "up"], ["down", "down"]]), "STATE")
        .appendField("pen");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#801E33");
  }
};
pythonGenerator.forBlock['turtle_penupdown'] = function(block) {
  const varName = pythonGenerator.nameDB_.getName(block.getFieldValue('NAME'), Blockly.VARIABLE_CATEGORY_NAME);
  const state = block.getFieldValue('STATE');
  if (state === "up") {
    return `${varName}.penup()\n`;
  } else {
    return `${varName}.pendown()\n`;
  }
};