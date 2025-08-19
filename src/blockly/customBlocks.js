// src/blockly/customBlocks.js
import * as Blockly from "blockly";

// Import module
Blockly.Blocks["import_module"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("import")
      .appendField(new Blockly.FieldTextInput("module_name"), "MODULE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
  }
};

Blockly.Blocks["from_import"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("from")
      .appendField(new Blockly.FieldTextInput("module_name"), "MODULE")
      .appendField("import")
      .appendField(new Blockly.FieldTextInput("function_name"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
  },
};

// Print
Blockly.Blocks["print_text"] = {
  init: function () {
    this.appendValueInput("TEXT")
      .setCheck(null)
      .appendField("print");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
  }
};



// Print "Hello World"
Blockly.Blocks["print_hello"] = {
  init: function () {
    this.appendDummyInput().appendField("print Hello World");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
  }
};

// Print with input
Blockly.Blocks["print"] = {
  init: function () {
    this.appendValueInput("TEXT").appendField("print");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
  }
};

// Input
Blockly.Blocks["input"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("input")
      .appendField(new Blockly.FieldTextInput("Enter text:"), "PROMPT");
    this.setOutput(true, "String");
    this.setColour(160);
  }
};

// Sleep
Blockly.Blocks["time_sleep"] = {
  init: function () {
    this.appendValueInput("SECS").appendField("sleep");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
  }
};

// String conversion
Blockly.Blocks["str"] = {
  init: function () {
    this.appendValueInput("VALUE").appendField("str");
    this.setOutput(true, "String");
    this.setColour(65);
  }
};

// Int conversion
Blockly.Blocks["int"] = {
  init: function () {
    this.appendValueInput("VALUE").appendField("int");
    this.setOutput(true, "Number");
    this.setColour(65);
  }
};

// Int with base
Blockly.Blocks["int_base"] = {
  init: function () {
    this.appendValueInput("VALUE").appendField("int");
    this.appendValueInput("BASE").appendField("base");
    this.setOutput(true, "Number");
    this.setColour(65);
  }
};

// Float conversion
Blockly.Blocks["float"] = {
  init: function () {
    this.appendValueInput("VALUE").appendField("float");
    this.setOutput(true, "Number");
    this.setColour(65);
  }
};


// Global keyword
Blockly.Blocks["global"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("global")
      .appendField(new Blockly.FieldTextInput("x"), "VARNAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
  }
};


// Custom code block
Blockly.Blocks["custom_code"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("code")
      .appendField(new Blockly.FieldTextInput("pass"), "CODE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
  }
};

Blockly.Blocks["break_loop"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("break");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("Exit the nearest enclosing loop");
    this.setHelpUrl("");
  }
};
// Tuple
Blockly.Blocks["tuple_create_with"] = {
  init: function () {
    this.appendDummyInput().appendField("create tuple");
    this.appendValueInput("ITEMS").setCheck(null);
    this.setOutput(true, null);
    this.setColour(300);
  }
};

// Set
Blockly.Blocks["set_create_with"] = {
  init: function () {
    this.appendDummyInput().appendField("create set");
    this.appendValueInput("ITEMS").setCheck(null);
    this.setOutput(true, null);
    this.setColour(330);
  }
};

// Dictionary
Blockly.Blocks["dict_create_with"] = {
  init: function () {
    this.appendDummyInput().appendField("create dictionary");
    this.appendValueInput("ITEMS").setCheck(null);
    this.setOutput(true, null);
    this.setColour(0);
  }
};

// Try/Except
Blockly.Blocks["try_except"] = {
  init: function () {
    this.appendStatementInput("TRY").appendField("try");
    this.appendStatementInput("EXCEPT").appendField("except");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
  }
};

// File open
Blockly.Blocks["file_open"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("open file")
      .appendField(new Blockly.FieldTextInput("filename.txt"), "FILENAME")
      .appendField("mode")
      .appendField(new Blockly.FieldDropdown([
        ["read", "r"],
        ["write", "w"],
        ["append", "a"]
      ]), "MODE");
    this.setOutput(true, null);
    this.setColour(90);
  }
};

// File read
Blockly.Blocks["file_read"] = {
  init: function () {
    this.appendValueInput("FILE").appendField("read from file");
    this.setOutput(true, null);
    this.setColour(90);
  }
};

// File write
Blockly.Blocks["file_write"] = {
  init: function () {
    this.appendValueInput("FILE").appendField("write to file");
    this.appendValueInput("TEXT").appendField("text");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
  }
};

// Class
Blockly.Blocks["class_create"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("class")
      .appendField(new Blockly.FieldTextInput("MyClass"), "CLASSNAME");
    this.appendStatementInput("BODY").appendField("body");
    this.setColour(120);
  }
};

// Object
Blockly.Blocks["object_create"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("create object from")
      .appendField(new Blockly.FieldTextInput("MyClass"), "CLASSNAME");
    this.setOutput(true, null);
    this.setColour(150);
  }
};

// ------------------- MORE -------------------
Blockly.Blocks['time_sleep'] = {
  init: function () {
    this.appendValueInput("SECONDS").setCheck("Number").appendField("sleep");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
  }
};

Blockly.Blocks['comment'] = {
  init: function () {
    this.appendDummyInput().appendField("# comment").appendField(new Blockly.FieldTextInput("Type comment"), "COMMENT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
  }
};


// ------------------- GRAPHICS -------------------
Blockly.Blocks['draw_circle'] = {
  init: function () {
    this.appendValueInput("RADIUS").setCheck("Number").appendField("draw circle radius");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
  }
};

Blockly.Blocks['draw_rectangle'] = {
  init: function () {
    this.appendValueInput("WIDTH").setCheck("Number").appendField("draw rectangle width");
    this.appendValueInput("HEIGHT").setCheck("Number").appendField("height");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
  }
};

Blockly.Blocks["graphics_import_turtle"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("import turtle");
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setColour(180);
    this.setTooltip("Imports the turtle graphics library in Python");
    this.setHelpUrl("");
  },
};


Blockly.Blocks['draw_star'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("draw star with")
        .appendField("points")
        .appendField(new Blockly.FieldNumber(5, 3, 20, 1), "POINTS")
        .appendField("and size")
        .appendField(new Blockly.FieldNumber(50, 10, 300, 5), "SIZE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Draw a star with given points and size");
    this.setHelpUrl("");
  }
};




// ------------------- REQUESTS -------------------
Blockly.Blocks['requests_get'] = {
  init: function () {
    this.appendValueInput("URL").setCheck("String").appendField("requests.get");
    this.setOutput(true, null);
    this.setColour(10);
  }
};

Blockly.Blocks['requests_post'] = {
  init: function () {
    this.appendValueInput("URL").setCheck("String").appendField("requests.post");
    this.setOutput(true, null);
    this.setColour(10);
  }
};




