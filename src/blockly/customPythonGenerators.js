// src/blockly/customPythonGenerators.js
import "blockly/blocks";
import { pythonGenerator } from "blockly/python";
import "blockly/python";

// Import Module
pythonGenerator.forBlock["import_module"] = block => {
  const module = block.getFieldValue("MODULE");
  return `import ${module}\n`;
};

pythonGenerator.forBlock["from_import"] = block => {
  const module = block.getFieldValue("MODULE");
  const name = block.getFieldValue("NAME");
  return `from ${module} import ${name}\n`;
};

// ======= statement blocks ===========///

// ✅ Print "Hello World"
pythonGenerator.forBlock["print_hello"] = function (block) {
  return "print('Hello, World!')\n";
};

// ✅ Print custom text or variable
pythonGenerator.forBlock["print"] = function (block) {
  const msg = pythonGenerator.valueToCode(block, "TEXT", pythonGenerator.ORDER_NONE) || "''";
  return "print(" + msg + ")\n";
};

// ✅ Input from user
pythonGenerator.forBlock["input"] = function (block) {
  const msg = block.getFieldValue("MESSAGE") || "";
  const code = "input('" + msg + "')";
  return [code, pythonGenerator.ORDER_FUNCTION_CALL];
};

// ✅ Time sleep
pythonGenerator.forBlock["time_sleep"] = function (block) {
  const seconds = pythonGenerator.valueToCode(block, "SECONDS", pythonGenerator.ORDER_NONE) || "1";
  return "time.sleep(" + seconds + ")\n";
};

// ✅ Convert to string
pythonGenerator.forBlock["str"] = function (block) {
  const value = pythonGenerator.valueToCode(block, "VALUE", pythonGenerator.ORDER_NONE) || "0";
  const code = "str(" + value + ")";
  return [code, pythonGenerator.ORDER_FUNCTION_CALL];
};

// ✅ Convert to int
pythonGenerator.forBlock["int"] = function (block) {
  const value = pythonGenerator.valueToCode(block, "VALUE", pythonGenerator.ORDER_NONE) || "0";
  const code = "int(" + value + ")";
  return [code, pythonGenerator.ORDER_FUNCTION_CALL];
};

// ✅ Convert with base
pythonGenerator.forBlock["int_base"] = function (block) {
  const value = pythonGenerator.valueToCode(block, "VALUE", pythonGenerator.ORDER_NONE) || "0";
  const base = block.getFieldValue("BASE") || "10";
  const code = "int(" + value + ", " + base + ")";
  return [code, pythonGenerator.ORDER_FUNCTION_CALL];
};

// ✅ Convert to float
pythonGenerator.forBlock["float"] = function (block) {
  const value = pythonGenerator.valueToCode(block, "VALUE", pythonGenerator.ORDER_NONE) || "0";
  const code = "float(" + value + ")";
  return [code, pythonGenerator.ORDER_FUNCTION_CALL];
};

// ✅ Global variable
pythonGenerator.forBlock["global"] = function (block) {
  const name = block.getFieldValue("VARNAME") || "x";
  return "global " + name + "\n";
};

// ✅ Custom raw Python code
pythonGenerator.forBlock["custom_code"] = function (block) {
  const code = block.getFieldValue("CODE") || "";
  return code + "\n";
};
pythonGenerator.forBlock["break_loop"] = function () {
  return "break\n";
};


// ------------------ Arithmetic Operators ------------------

const arithmeticBlocks = ["add", "subtract", "multiply", "divide", "mod", "power"];
const arithmeticSymbols = { add: "+", subtract: "-", multiply: "*", divide: "/", mod: "%", power: "**" };

arithmeticBlocks.forEach((type) => {
  pythonGenerator.forBlock[`operator_${type}`] = function (block) {
    const a = pythonGenerator.valueToCode(block, "A", pythonGenerator.ORDER_ATOMIC) || "0";
    const b = pythonGenerator.valueToCode(block, "B", pythonGenerator.ORDER_ATOMIC) || "0";
    let order = ["multiply", "divide", "mod"].includes(type)
      ? pythonGenerator.ORDER_MULTIPLICATIVE
      : type === "power"
      ? pythonGenerator.ORDER_EXPONENTIATION
      : pythonGenerator.ORDER_ADDITIVE;
    return [`${a} ${arithmeticSymbols[type]} ${b}`, order];
  };
});

// --- Comparison Operators ---
const comparisonBlocks = ["equals", "not_equals", "less", "less_equal", "greater", "greater_equal"];
const comparisonSymbols = { equals: "==", not_equals: "!=", less: "<", less_equal: "<=", greater: ">", greater_equal: ">=" };

comparisonBlocks.forEach((type) => {
 pythonGenerator.forBlock[`operator_${type}`] = function (block) {
    const a = pythonGenerator.valueToCode(block, "A", pythonGenerator.ORDER_ATOMIC) || "0";
    const b = pythonGenerator.valueToCode(block, "B", pythonGenerator.ORDER_ATOMIC) || "0";
    return [`${a} ${comparisonSymbols[type]} ${b}`, pythonGenerator.ORDER_RELATIONAL];
  };
});

// --- Logical Operators ---
pythonGenerator.forBlock["operator_and"] = function (block) {
  const a = pythonGenerator.valueToCode(block, "A", pythonGenerator.ORDER_ATOMIC) || "False";
  const b = pythonGenerator.valueToCode(block, "B", pythonGenerator.ORDER_ATOMIC) || "False";
  return [`${a} and ${b}`,pythonGenerator.ORDER_LOGICAL_AND];
};

pythonGenerator.forBlock["operator_or"] = function (block) {
  const a = pythonGenerator.valueToCode(block, "A", pythonGenerator.ORDER_ATOMIC) || "False";
  const b = pythonGenerator.valueToCode(block, "B", pythonGenerator.ORDER_ATOMIC) || "False";
  return [`${a} or ${b}`, pythonGenerator.ORDER_LOGICAL_OR];
};

pythonGenerator.forBlock["operator_not"] = function (block) {
  const a = pythonGenerator.valueToCode(block, "A", pythonGenerator.ORDER_ATOMIC) || "False";
  return [`not ${a}`, pythonGenerator.ORDER_LOGICAL_NOT];
};

// Tuple
pythonGenerator.forBlock["tuple_create_with"] = block => {
  const items =
    pythonGenerator.valueToCode(block, "ITEMS", pythonGenerator.ORDER_NONE) ||
    "";
  return [`(${items},)`, pythonGenerator.ORDER_ATOMIC];
};

// Set
pythonGenerator.forBlock["set_create_with"] = block => {
  const items =
    pythonGenerator.valueToCode(block, "ITEMS", pythonGenerator.ORDER_NONE) ||
    "";
  return [`{${items}}`, pythonGenerator.ORDER_ATOMIC];
};

// Dictionary
pythonGenerator.forBlock["dict_create_with"] = block => {
  const items =
    pythonGenerator.valueToCode(block, "ITEMS", pythonGenerator.ORDER_NONE) ||
    "";
  return [`{${items}}`, pythonGenerator.ORDER_ATOMIC];
};

// Try/Except
pythonGenerator.forBlock["try_except"] = block => {
  const tryBranch =
    pythonGenerator.statementToCode(block, "TRY") || "    pass\n";
  const exceptBranch =
    pythonGenerator.statementToCode(block, "EXCEPT") || "    pass\n";
  return `try:\n${tryBranch}except:\n${exceptBranch}`;
};

// File open
pythonGenerator.forBlock["file_open"] = block => {
  const filename = block.getFieldValue("FILENAME");
  const mode = block.getFieldValue("MODE");
  return [`open("${filename}", "${mode}")`, pythonGenerator.ORDER_FUNCTION_CALL];
};

// File read
pythonGenerator.forBlock["file_read"] = block => {
  const file =
    pythonGenerator.valueToCode(block, "FILE", pythonGenerator.ORDER_NONE) ||
    "f";
  return [`${file}.read()`, pythonGenerator.ORDER_FUNCTION_CALL];
};

// File write
pythonGenerator.forBlock["file_write"] = block => {
  const file =
    pythonGenerator.valueToCode(block, "FILE", pythonGenerator.ORDER_NONE) ||
    "f";
  const text =
    pythonGenerator.valueToCode(block, "TEXT", pythonGenerator.ORDER_NONE) ||
    "''";
  return `${file}.write(${text})\n`;
};

// Class
pythonGenerator.forBlock["class_create"] = block => {
  const name = block.getFieldValue("CLASSNAME");
  const body = pythonGenerator.statementToCode(block, "BODY") || "    pass\n";
  return `class ${name}:\n${body}`;
};

// Object
pythonGenerator.forBlock["object_create"] = block => {
  const classname = block.getFieldValue("CLASSNAME");
  return [`${classname}()`, pythonGenerator.ORDER_FUNCTION_CALL];
};

// ------------------- MORE -------------------
pythonGenerator.forBlock["time_sleep"] = block => {
  const sec =
    pythonGenerator.valueToCode(block, "SECONDS", pythonGenerator.ORDER_NONE) ||
    "1";
  return `time.sleep(${sec})\n`;
};

pythonGenerator.forBlock["comment"] = block => {
  const comment = block.getFieldValue("COMMENT") || "";
  return `# ${comment}\n`;
};

// ------------------- GRAPHICS -------------------
pythonGenerator.forBlock["draw_circle"] = block => {
  const radius =
    pythonGenerator.valueToCode(block, "RADIUS", pythonGenerator.ORDER_NONE) ||
    "0";
  return `draw_circle(${radius})\n`;
};


pythonGenerator.forBlock["graphics_import_turtle"] = function () {
  return "import turtle\n";
};


pythonGenerator.forBlock["draw_rectangle"] = block => {
  const width =
    pythonGenerator.valueToCode(block, "WIDTH", pythonGenerator.ORDER_NONE) ||
    "0";
  const height =
    pythonGenerator.valueToCode(block, "HEIGHT", pythonGenerator.ORDER_NONE) ||
    "0";
  return `draw_rectangle(${width}, ${height})\n`;
};

pythonGenerator.forBlock["draw_star"] = function (block) {
  const points = block.getFieldValue("POINTS") || 5;
  const size = block.getFieldValue("SIZE") || 100;

  return `draw_star(${points}, ${size})\n`;
};

// ------------------- REQUESTS -------------------
pythonGenerator.forBlock["requests_get"] = block => {
  const url =
    pythonGenerator.valueToCode(block, "URL", pythonGenerator.ORDER_NONE) ||
    "''";
  return [`requests.get(${url})`, pythonGenerator.ORDER_FUNCTION_CALL];
};

pythonGenerator.forBlock["requests_post"] = block => {
  const url =
    pythonGenerator.valueToCode(block, "URL", pythonGenerator.ORDER_NONE) ||
    "''";
  return [`requests.post(${url})`, pythonGenerator.ORDER_FUNCTION_CALL];
};

// ------------------- COLORS -------------------
// pythonGenerator.forBlock["color_picker"] = block => {
//   const color = block.getFieldValue("COLOR") || "#000000";
//   return [`"${color}"`, pythonGenerator.ORDER_ATOMIC];
// };
