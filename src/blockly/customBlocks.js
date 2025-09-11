// src/blockly/customBlocks.js
import * as Blockly from "blockly";
import { FieldTextInput } from "blockly/core";
// ===================================================================
// === IMPORTS ===
// ===================================================================
Blockly.Blocks["import_module"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("import")
      .appendField(new Blockly.FieldTextInput("math"), "MODULE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
    this.setTooltip("Import a Python module");
  },
};

Blockly.Blocks["from_import"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("from")
      .appendField(new Blockly.FieldTextInput("math"), "MODULE")
      .appendField("import")
      .appendField(new Blockly.FieldTextInput("sqrt"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
    this.setTooltip("From module import function/class");
  },
};
Blockly.Blocks["import_random"] = {
  init: function () {
    this.appendDummyInput().appendField("import random");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
  },
};

Blockly.Blocks["import_time"] = {
  init: function () {
    this.appendDummyInput().appendField("import time");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
  },
};


// ===================================================================
// === OPERATORS (Math, Comparison, Logic) ===
// ===================================================================
const arithmeticBlocks = ["add", "subtract", "multiply", "divide", "mod", "power"];
const arithmeticSymbols = { add: "+", subtract: "-", multiply: "*", divide: "/", mod: "%", power: "**" };

arithmeticBlocks.forEach((type) => {
  Blockly.Blocks[`operator_${type}`] = {
    init: function () {
      this.appendValueInput("A").setCheck("Number").appendField("number");
      this.appendValueInput("B").setCheck("Number").appendField(arithmeticSymbols[type]);
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(210);
    },
  };
});

const comparisonBlocks = ["equals", "not_equals", "less", "less_equal", "greater", "greater_equal"];
const comparisonSymbols = { equals: "==", not_equals: "!=", less: "<", less_equal: "<=", greater: ">", greater_equal: ">=" };

comparisonBlocks.forEach((type) => {
  Blockly.Blocks[`operator_${type}`] = {
    init: function () {
      this.appendValueInput("A").appendField("number");
      this.appendValueInput("B").appendField(comparisonSymbols[type]);
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour(210);
    },
  };
});

Blockly.Blocks["operator_and"] = {
  init: function () {
    this.appendValueInput("A").setCheck("Boolean").appendField("boolean");
    this.appendValueInput("B").setCheck("Boolean").appendField("and");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(210);
  },
};

Blockly.Blocks["operator_or"] = {
  init: function () {
    this.appendValueInput("A").setCheck("Boolean").appendField("boolean");
    this.appendValueInput("B").setCheck("Boolean").appendField("or");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(210);
  },
};

Blockly.Blocks["operator_not"] = {
  init: function () {
    this.appendValueInput("A").setCheck("Boolean").appendField("not");
    this.setOutput(true, "Boolean");
    this.setColour(210);
  },
};

/* -----------------------
       STRING BLOCKS
------------------------- */
Blockly.Blocks["string_reverse"] = {
  init: function () {
    this.appendValueInput("TEXT").setCheck("String").appendField("reverse string");
    this.setOutput(true, "String");
    this.setColour(160);
  },
};

Blockly.Blocks["string_update"] = {
  init: function () {
    this.appendValueInput("TEXT").setCheck("String").appendField("update string");
    this.appendValueInput("INDEX").setCheck("Number").appendField("at index");
    this.appendValueInput("CHAR").setCheck("String").appendField("with");
    this.setOutput(true, "String");
    this.setColour(160);
  },
};


// ===================================================================
// === PRINT & INPUT ===
// ===================================================================
Blockly.Blocks["print_text"] = {
  init: function () {
    this.appendValueInput("TEXT").setCheck(null).appendField("print");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
  },
};
Blockly.Blocks["print_hello"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("print")
      .appendField(new Blockly.FieldTextInput(" "), "TEXT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
  },
};

Blockly.Blocks["input"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("input")
      .appendField(new Blockly.FieldTextInput("Enter text:"), "PROMPT");
    this.setOutput(true, "String");
    this.setColour(160);
  },
};

Blockly.Blocks["input_number"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("input number")
      .appendField(new Blockly.FieldTextInput("Enter a number"), "PROMPT");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("Takes numeric input");
  },
};

// ===================================================================
// === TYPE CONVERSIONS ===
// ===================================================================
Blockly.Blocks["str"] = {
  init: function () {
    this.appendValueInput("VALUE").appendField("str");
    this.setOutput(true, "String");
    this.setColour(65);
  },
};

Blockly.Blocks["int"] = {
  init: function () {
    this.appendValueInput("VALUE").appendField("int");
    this.setOutput(true, "Number");
    this.setColour(65);
  },
};

Blockly.Blocks["int_base"] = {
  init: function () {
    this.appendValueInput("VALUE").appendField("int");
    this.appendValueInput("BASE").appendField("base");
    this.setOutput(true, "Number");
    this.setColour(65);
  },
};

Blockly.Blocks["float"] = {
  init: function () {
    this.appendValueInput("VALUE").appendField("float");
    this.setOutput(true, "Number");
    this.setColour(65);
  },
};

// ===================================================================
// === GLOBAL / CUSTOM / CONTROL ===
// ===================================================================
Blockly.Blocks["global"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("global")
      .appendField(new Blockly.FieldTextInput("x"), "VARNAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
  },
};

Blockly.Blocks["custom_code"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("code")
      .appendField(new Blockly.FieldTextInput("pass"), "CODE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
  },
};

Blockly.Blocks["break_loop"] = {
  init: function () {
    this.appendDummyInput().appendField("break");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("Exit the nearest enclosing loop");
  },
};

// ===================================================================
// === DATA STRUCTURES (Tuple, Set, Dict) ===
// ===================================================================
Blockly.Blocks["tuple_create_with"] = {
  init: function () {
    this.appendDummyInput().appendField("create tuple");
    this.appendValueInput("ITEMS").setCheck(null);
    this.setOutput(true, null);
    this.setColour(300);
  },
};

Blockly.Blocks["set_create_with"] = {
  init: function () {
    this.appendDummyInput().appendField("create set");
    this.appendValueInput("ITEMS").setCheck(null);
    this.setOutput(true, null);
    this.setColour(330);
  },
};

Blockly.Blocks["dict_create_with"] = {
  init: function () {
    this.appendDummyInput().appendField("create dictionary");
    this.appendValueInput("ITEMS").setCheck(null);
    this.setOutput(true, null);
    this.setColour(0);
  },
};

/* -----------------------
        LIST BLOCKS
------------------------- */
Blockly.Blocks["list_append"] = {
  init: function () {
    this.appendValueInput("LIST").setCheck("Array").appendField("append to list");
    this.appendValueInput("ITEM").setCheck(null).appendField("item");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
  },
};

Blockly.Blocks["list_slice"] = {
  init: function () {
    this.appendValueInput("LIST").setCheck("Array").appendField("slice list");
    this.appendValueInput("START").setCheck("Number").appendField("start");
    this.appendValueInput("END").setCheck("Number").appendField("end");
    this.setOutput(true, "Array");
    this.setColour(260);
  },
};

Blockly.Blocks["list_reverse"] = {
  init: function () {
    this.appendValueInput("LIST").setCheck("Array").appendField("reverse list");
    this.setOutput(true, "Array");
    this.setColour(260);
  },
};

/* -----------------------
       TUPLE BLOCK
------------------------- */
Blockly.Blocks["create_tuple"] = {
  init: function () {
    this.appendDummyInput().appendField("create tuple");
    this.appendValueInput("ITEMS").setCheck("Array");
    this.setOutput(true, "Array");
    this.setColour(45);
  },
};

/* -----------------------
     DICTIONARY BLOCKS
------------------------- */
Blockly.Blocks["dict_set"] = {
  init: function () {
    this.appendValueInput("DICT").setCheck("Object").appendField("set in dictionary");
    this.appendValueInput("KEY").setCheck("String").appendField("key");
    this.appendValueInput("VALUE").setCheck(null).appendField("value");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(20);
  },
};

Blockly.Blocks["dict_get"] = {
  init: function () {
    this.appendValueInput("DICT").setCheck("Object").appendField("get from dictionary");
    this.appendValueInput("KEY").setCheck("String").appendField("key");
    this.setOutput(true, null);
    this.setColour(20);
  },
};


// ===================================================================
// === CLASSES ===
// ===================================================================
Blockly.Blocks["class_create"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("class")
      .appendField(new Blockly.FieldTextInput("MyClass"), "CLASSNAME");
    this.appendStatementInput("BODY").setCheck(null).appendField("body");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9A57E7");
    this.setTooltip("Define a Python class");
  },
};

Blockly.Blocks["class_method"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("def")
      .appendField(new Blockly.FieldTextInput("method"), "METHODNAME");
    this.appendValueInput("ARGS").setCheck("String").appendField("args (comma separated)");
    this.appendStatementInput("BODY").setCheck(null).appendField("body");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9A57E7");
    this.setTooltip("Define a method inside a class");
  },
};

Blockly.Blocks["class_instance"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("obj"), "INSTANCENAME")
      .appendField("=")
      .appendField(new Blockly.FieldTextInput("MyClass"), "CLASSNAME")
      .appendField("()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9A57E7");
    this.setTooltip("Create an object instance");
  },
};

Blockly.Blocks["class_call_method"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("obj"), "INSTANCENAME")
      .appendField(".")
      .appendField(new Blockly.FieldTextInput("method"), "METHODNAME")
      .appendField("()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9A57E7");
    this.setTooltip("Call a method on an instance");
  },
};
Blockly.Blocks["class_with_constructor"] = {
  init: function () {
    this.appendDummyInput().appendField("create class").appendField(new Blockly.FieldTextInput("ClassName"), "CLASS");
    this.appendStatementInput("BODY").setCheck(null).appendField("with body");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#9A57E7");
  },
};

Blockly.Blocks["create_object_with_args"] = {
  init: function () {
    this.appendDummyInput().appendField("create object of").appendField(new Blockly.FieldTextInput("ClassName"), "CLASS");
    this.appendValueInput("ARGS").setCheck("Array").appendField("with args");
    this.setOutput(true, null);
    this.setColour("#9A57E7");
  },
};


// ===================================================================
// === OBJECTS ===
// ===================================================================
Blockly.Blocks["object_create"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("create object from")
      .appendField(new Blockly.FieldTextInput("MyClass"), "CLASSNAME");
    this.setOutput(true, null);
    this.setColour(150);
  },
};

// ===================================================================
// === FILE HANDLING ===
// ===================================================================
Blockly.Blocks["file_open"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("open file")
      .appendField(new Blockly.FieldTextInput("filename.txt"), "FILENAME")
      .appendField("mode")
      .appendField(
        new Blockly.FieldDropdown([
          ["read", "r"],
          ["write", "w"],
          ["append", "a"],
        ]),
        "MODE"
      );
    this.setOutput(true, null);
    this.setColour(90);
  },
};

Blockly.Blocks["file_read"] = {
  init: function () {
    this.appendValueInput("FILE").appendField("read from file");
    this.setOutput(true, null);
    this.setColour(90);
  },
};

Blockly.Blocks["file_write"] = {
  init: function () {
    this.appendValueInput("FILE").appendField("write to file");
    this.appendValueInput("TEXT").appendField("text");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
  },
};

// ===================================================================
// === ERROR HANDLING ===
// ===================================================================
Blockly.Blocks["try_except"] = {
  init: function () {
    this.appendStatementInput("TRY").appendField("try");
    this.appendStatementInput("EXCEPT").appendField("except");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
  },
};

// ===================================================================
// === GRAPHICS ===
// ===================================================================
Blockly.Blocks["graphics_import_turtle"] = {
  init: function () {
    this.appendDummyInput().appendField("import turtle");
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setColour(180);
  },
};

Blockly.Blocks["draw_circle"] = {
  init: function () {
    this.appendValueInput("RADIUS").setCheck("Number").appendField("draw circle radius");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
  },
};

Blockly.Blocks["draw_rectangle"] = {
  init: function () {
    this.appendValueInput("WIDTH").setCheck("Number").appendField("draw rectangle width");
    this.appendValueInput("HEIGHT").setCheck("Number").appendField("height");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
  },
};

Blockly.Blocks["draw_star"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("draw star with")
      .appendField("points")
      .appendField(new Blockly.FieldNumber(5, 3, 20, 1), "POINTS")
      .appendField("and size")
      .appendField(new Blockly.FieldNumber(50, 10, 300, 5), "SIZE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
  },
};


// Simple pen up/down
Blockly.Blocks["pen_down"] = {
  init: function () {
    this.appendDummyInput().appendField("pen down");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("Put the pen down so movement draws");
  },
};

Blockly.Blocks["pen_up"] = {
  init: function () {
    this.appendDummyInput().appendField("pen up");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("Lift the pen so movement does not draw");
  },
};

// Move forward
Blockly.Blocks["move_forward"] = {
  init: function () {
    this.appendValueInput("STEPS").setCheck("Number").appendField("move forward");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("Move forward by steps/pixels");
  },
};

// Turn right/left
Blockly.Blocks["turn_right"] = {
  init: function () {
    this.appendValueInput("DEG").setCheck("Number").appendField("turn right (°)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("Turn right by degrees");
  },
};

Blockly.Blocks["turn_left"] = {
  init: function () {
    this.appendValueInput("DEG").setCheck("Number").appendField("turn left (°)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("Turn left by degrees");
  },
};

// Color & Speed
Blockly.Blocks["set_color"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("set pen color")
      .appendField(new FieldTextInput("#ff0000"), "COLOR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("Change the pen color");
  },
};

Blockly.Blocks["set_speed"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("set speed")
      .appendField(new Blockly.FieldDropdown([
        ["fastest (0)", "0"],
        ["fast (10)", "10"],
        ["normal (6)", "6"],
        ["slow (3)", "3"],
        ["slowest (1)", "1"],
      ]), "SPEED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("Set turtle animation speed");
  },
};
// ===================================================================
// === REQUESTS ===
// ===================================================================
Blockly.Blocks["requests_get"] = {
  init: function () {
    this.appendValueInput("URL").setCheck("String").appendField("requests.get");
    this.setOutput(true, null);
    this.setColour(10);
  },
};

Blockly.Blocks["requests_post"] = {
  init: function () {
    this.appendValueInput("URL").setCheck("String").appendField("requests.post");
    this.setOutput(true, null);
    this.setColour(10);
  },
};

// ===================================================================
// === MORE ===
// ===================================================================
Blockly.Blocks["time_sleep"] = {
  init: function () {
    this.appendValueInput("SECONDS").setCheck("Number").appendField("sleep");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
  },
};

Blockly.Blocks["comment"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("# comment")
      .appendField(new Blockly.FieldTextInput("Type comment"), "COMMENT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
  },
};


// ===================================================================
// === STIMULATORS ===
// ===================================================================

// Traffic Light block
Blockly.Blocks["traffic_light"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Traffic Light Simulation");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff9800");
    this.setTooltip("Simulate a traffic light sequence");
  }
};

// LED Control block
Blockly.Blocks["led_control"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("LED")
      .appendField(new Blockly.FieldDropdown([["ON", "ON"], ["OFF", "OFF"]]), "STATE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff9800");
    this.setTooltip("Turn LED ON or OFF");
  }
};

// Button Press block
Blockly.Blocks["button_press"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Button Pressed?");
    this.setOutput(true, "Boolean");
    this.setColour("#ff9800");
    this.setTooltip("Simulate a button press event");
  }
};

// ===================================================================
// === FUNCTIONS ===
// ===================================================================
Blockly.Blocks["function_return"] = {
  init: function () {
    this.appendValueInput("VALUE").appendField("return");
    this.setPreviousStatement(true);
    this.setColour(290);
  },
};

// ===================================================================
// === Texts ===
// ===================================================================

Blockly.Blocks["text"] = {
  init: function () {
    this.appendDummyInput()
      .appendField('"')
      .appendField(new Blockly.FieldTextInput(""), "TEXT")
      .appendField('"');
    this.setOutput(true, "String");
    this.setColour(160);
  },
};

Blockly.Blocks["text_print"] = {
  init: function () {
    this.appendValueInput("TEXT")
      .setCheck(null)
      .appendField("print");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
  },
};

Blockly.Blocks["text_join"] = {
  init: function () {
    this.appendValueInput("A").setCheck(null).appendField("join text");
    this.appendValueInput("B").setCheck(null).appendField("with");
    this.setOutput(true, "String");
    this.setColour(160);
  },
};

Blockly.Blocks["input_text"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("input")
      .appendField(new Blockly.FieldTextInput("Enter text:"), "PROMPT");
    this.setOutput(true, "String");
    this.setColour(160);
  },
};
