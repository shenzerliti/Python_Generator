// // src/blockly/customPythonGenerators.js
// import "blockly/blocks";
// import { pythonGenerator } from "blockly/python";
// import "blockly/python";


// // ===================================================================
// // === IMPORTS CATEGORY ===============================================
// // ===================================================================
// pythonGenerator.forBlock["import_module"] = block => {
//   const module = block.getFieldValue("MODULE");
//   return `import ${module}\n`;
// };

// pythonGenerator.forBlock["from_import"] = block => {
//   const module = block.getFieldValue("MODULE");
//   const name = block.getFieldValue("NAME");
//   return `from ${module} import ${name}\n`;
// };
// pythonGenerator.forBlock["input_number"] = function (block) {
//   var prompt = block.getFieldValue("PROMPT");
//   return [`int(input("${prompt}"))`, pythonGenerator.ORDER_ATOMIC];
// };
// pythonGenerator.forBlock["import_random"] = function () {
//   return "import random\n";
// };

// pythonGenerator.forBlock["import_time"] = function () {
//   return "import time\n";
// };

// // ===================================================================
// // === STATEMENTS CATEGORY ===========================================
// // ===================================================================
// pythonGenerator.forBlock["print_hello"] = (block) => {
//   const text = block.getFieldValue("TEXT") || "";
//   return `print('${text}')\n`;
// };

// pythonGenerator.forBlock["print_text"] = (block) => {
//   const text = block.getFieldValue("TEXT"); // Get user input
//   return `print('${text}')\n`;
// };

// pythonGenerator.forBlock["input"] = block => {
//   const msg = block.getFieldValue("MESSAGE") || "";
//   return [`input('${msg}')`, pythonGenerator.ORDER_FUNCTION_CALL];
// };

// pythonGenerator.forBlock["time_sleep"] = block => {
//   const sec = pythonGenerator.valueToCode(block, "SECONDS", pythonGenerator.ORDER_NONE) || "1";
//   return `time.sleep(${sec})\n`;
// };

// pythonGenerator.forBlock["str"] = block => {
//   const value = pythonGenerator.valueToCode(block, "VALUE", pythonGenerator.ORDER_NONE) || "0";
//   return [`str(${value})`, pythonGenerator.ORDER_FUNCTION_CALL];
// };

// pythonGenerator.forBlock["int"] = block => {
//   const value = pythonGenerator.valueToCode(block, "VALUE", pythonGenerator.ORDER_NONE) || "0";
//   return [`int(${value})`, pythonGenerator.ORDER_FUNCTION_CALL];
// };

// pythonGenerator.forBlock["int_base"] = block => {
//   const value = pythonGenerator.valueToCode(block, "VALUE", pythonGenerator.ORDER_NONE) || "0";
//   const base = block.getFieldValue("BASE") || "10";
//   return [`int(${value}, ${base})`, pythonGenerator.ORDER_FUNCTION_CALL];
// };

// pythonGenerator.forBlock["float"] = block => {
//   const value = pythonGenerator.valueToCode(block, "VALUE", pythonGenerator.ORDER_NONE) || "0";
//   return [`float(${value})`, pythonGenerator.ORDER_FUNCTION_CALL];
// };

// pythonGenerator.forBlock["global"] = block => {
//   const name = block.getFieldValue("VARNAME") || "x";
//   return `global ${name}\n`;
// };

// pythonGenerator.forBlock["custom_code"] = block => {
//   const code = block.getFieldValue("CODE") || "";
//   return code + "\n";
// };

// pythonGenerator.forBlock["break_loop"] = () => "break\n";


// // ===================================================================
// // === OPERATORS CATEGORY ============================================
// // ===================================================================

// // --- Arithmetic Operators ---
// const arithmeticBlocks = ["add", "subtract", "multiply", "divide", "mod", "power"];
// const arithmeticSymbols = { add: "+", subtract: "-", multiply: "*", divide: "/", mod: "%", power: "**" };

// arithmeticBlocks.forEach(type => {
//   pythonGenerator.forBlock[`operator_${type}`] = block => {
//     const a = pythonGenerator.valueToCode(block, "A", pythonGenerator.ORDER_ATOMIC) || "0";
//     const b = pythonGenerator.valueToCode(block, "B", pythonGenerator.ORDER_ATOMIC) || "0";
//     let order = ["multiply", "divide", "mod"].includes(type)
//       ? pythonGenerator.ORDER_MULTIPLICATIVE
//       : type === "power"
//       ? pythonGenerator.ORDER_EXPONENTIATION
//       : pythonGenerator.ORDER_ADDITIVE;
//     return [`${a} ${arithmeticSymbols[type]} ${b}`, order];
//   };
// });

// // --- Comparison Operators ---
// const comparisonBlocks = ["equals", "not_equals", "less", "less_equal", "greater", "greater_equal"];
// const comparisonSymbols = { equals: "==", not_equals: "!=", less: "<", less_equal: "<=", greater: ">", greater_equal: ">=" };

// comparisonBlocks.forEach(type => {
//   pythonGenerator.forBlock[`operator_${type}`] = block => {
//     const a = pythonGenerator.valueToCode(block, "A", pythonGenerator.ORDER_ATOMIC) || "0";
//     const b = pythonGenerator.valueToCode(block, "B", pythonGenerator.ORDER_ATOMIC) || "0";
//     return [`${a} ${comparisonSymbols[type]} ${b}`, pythonGenerator.ORDER_RELATIONAL];
//   };
// });

// // --- Logical Operators ---
// pythonGenerator.forBlock["operator_and"] = block => {
//   const a = pythonGenerator.valueToCode(block, "A", pythonGenerator.ORDER_ATOMIC) || "False";
//   const b = pythonGenerator.valueToCode(block, "B", pythonGenerator.ORDER_ATOMIC) || "False";
//   return [`${a} and ${b}`, pythonGenerator.ORDER_LOGICAL_AND];
// };

// pythonGenerator.forBlock["operator_or"] = block => {
//   const a = pythonGenerator.valueToCode(block, "A", pythonGenerator.ORDER_ATOMIC) || "False";
//   const b = pythonGenerator.valueToCode(block, "B", pythonGenerator.ORDER_ATOMIC) || "False";
//   return [`${a} or ${b}`, pythonGenerator.ORDER_LOGICAL_OR];
// };

// pythonGenerator.forBlock["operator_not"] = block => {
//   const a = pythonGenerator.valueToCode(block, "A", pythonGenerator.ORDER_ATOMIC) || "False";
//   return [`not ${a}`, pythonGenerator.ORDER_LOGICAL_NOT];
// };


// // ===================================================================
// // === DATA STRUCTURES CATEGORY ======================================
// // ===================================================================
// pythonGenerator.forBlock["create_tuple"] = function (block) {
//   var items = pythonGenerator.valueToCode(block, "ITEMS", pythonGenerator.ORDER_ATOMIC);
//   return [`tuple(${items})`, pythonGenerator.ORDER_ATOMIC];
// };

// pythonGenerator.forBlock["tuple_create_with"] = block => {
//   const items = new Array(block.itemCount_ || 0)
//     .fill(null)
//     .map((_, i) => pythonGenerator.valueToCode(block, `ADD${i}`, pythonGenerator.ORDER_NONE) || "None");
//   return [`(${items.join(", ")})`, pythonGenerator.ORDER_ATOMIC];
// };

// pythonGenerator.forBlock["set_create_with"] = block => {
//   const items = new Array(block.itemCount_ || 0)
//     .fill(null)
//     .map((_, i) => pythonGenerator.valueToCode(block, `ADD${i}`, pythonGenerator.ORDER_NONE) || "None");
//   return [`{${items.join(", ")}}`, pythonGenerator.ORDER_ATOMIC];
// };

// pythonGenerator.forBlock["dict_create_with"] = block => {
//   const items = new Array(block.itemCount_ || 0)
//     .fill(null)
//     .map((_, i) => {
//       const key = pythonGenerator.valueToCode(block, `KEY${i}`, pythonGenerator.ORDER_NONE) || "''";
//       const val = pythonGenerator.valueToCode(block, `VAL${i}`, pythonGenerator.ORDER_NONE) || "None";
//       return `${key}: ${val}`;
//     });
//   return [`{${items.join(", ")}}`, pythonGenerator.ORDER_ATOMIC];
// };

// pythonGenerator.forBlock["dict_set"] = function (block) {
//   var dict = pythonGenerator.valueToCode(block, "DICT", pythonGenerator.ORDER_ATOMIC);
//   var key = pythonGenerator.valueToCode(block, "KEY", pythonGenerator.ORDER_ATOMIC);
//   var value = pythonGenerator.valueToCode(block, "VALUE", pythonGenerator.ORDER_ATOMIC);
//   return `${dict}[${key}] = ${value}\n`;
// };

// pythonGenerator.forBlock["dict_get"] = function (block) {
//   var dict = pythonGenerator.valueToCode(block, "DICT", pythonGenerator.ORDER_ATOMIC);
//   var key = pythonGenerator.valueToCode(block, "KEY", pythonGenerator.ORDER_ATOMIC);
//   return [`${dict}.get(${key})`, pythonGenerator.ORDER_ATOMIC];
// };

// pythonGenerator.forBlock["list_append"] = function (block) {
//   var list = pythonGenerator.valueToCode(block, "LIST", pythonGenerator.ORDER_ATOMIC);
//   var item = pythonGenerator.valueToCode(block, "ITEM", pythonGenerator.ORDER_ATOMIC);
//   return `${list}.append(${item})\n`;
// };

// pythonGenerator.forBlock["list_slice"] = function (block) {
//   var list = pythonGenerator.valueToCode(block, "LIST",pythonGenerator.ORDER_ATOMIC);
//   var start = pythonGenerator.valueToCode(block, "START", pythonGenerator.ORDER_ATOMIC);
//   var end = pythonGenerator.valueToCode(block, "END", pythonGenerator.ORDER_ATOMIC);
//   return [`${list}[${start}:${end}]`, pythonGenerator.ORDER_ATOMIC];
// };

// pythonGenerator.forBlock["list_reverse"] = function (block) {
//   var list = pythonGenerator.valueToCode(block, "LIST", pythonGenerator.ORDER_ATOMIC);
//   return [`${list}[::-1]`, pythonGenerator.ORDER_ATOMIC];
// };

// // ===================================================================
// // === CONTROL CATEGORY ==============================================
// // ===================================================================
// pythonGenerator.forBlock["try_except"] = block => {
//   const tryBranch = pythonGenerator.statementToCode(block, "TRY") || "    pass\n";
//   const exceptBranch = pythonGenerator.statementToCode(block, "EXCEPT") || "    pass\n";
//   return `try:\n${tryBranch}except:\n${exceptBranch}`;
// };


// // ===================================================================
// // === FILE CATEGORY =================================================
// // ===================================================================
// pythonGenerator.forBlock["file_open"] = block => {
//   const filename = block.getFieldValue("FILENAME");
//   const mode = block.getFieldValue("MODE");
//   return [`open("${filename}", "${mode}")`, pythonGenerator.ORDER_FUNCTION_CALL];
// };

// pythonGenerator.forBlock["file_read"] = block => {
//   const file = pythonGenerator.valueToCode(block, "FILE", pythonGenerator.ORDER_NONE) || "f";
//   return [`${file}.read()`, pythonGenerator.ORDER_FUNCTION_CALL];
// };

// pythonGenerator.forBlock["file_write"] = block => {
//   const file = pythonGenerator.valueToCode(block, "FILE", pythonGenerator.ORDER_NONE) || "f";
//   const text = pythonGenerator.valueToCode(block, "TEXT", pythonGenerator.ORDER_NONE) || "''";
//   return `${file}.write(${text})\n`;
// };


// // ===================================================================
// // === CLASSES CATEGORY ==============================================
// // ===================================================================

// // --- Create a Class ---
// pythonGenerator.forBlock["class_create"] = function (block) {
//   var className = block.getFieldValue("CLASSNAME");
//   var statements_body = pythonGenerator.statementToCode(block, "BODY");
//   var code = `class ${className}:\n${statements_body || "    pass"}\n`;
//   return code;
// };

// // --- Define a Method ---
// pythonGenerator.forBlock["class_method"] = function (block) {
//   var methodName = block.getFieldValue("METHODNAME");
//   var args = pythonGenerator.valueToCode(block, "ARGS", pythonGenerator.ORDER_ATOMIC) || "self";
//   var statements_body = pythonGenerator.statementToCode(block, "BODY");
//   var code = `    def ${methodName}(${args}):\n${statements_body || "        pass"}\n`;
//   return code;
// };

// // --- Create an Instance ---
// pythonGenerator.forBlock["class_instance"] = function (block) {
//   var instanceName = block.getFieldValue("INSTANCENAME");
//   var className = block.getFieldValue("CLASSNAME");
//   return `${instanceName} = ${className}()\n`;
// };

// // --- Call a Method ---
// pythonGenerator.forBlock["class_call_method"] = function (block) {
//   var instanceName = block.getFieldValue("INSTANCENAME");
//   var methodName = block.getFieldValue("METHODNAME");
//   return `${instanceName}.${methodName}()\n`;
// };

// pythonGenerator.forBlock["class_with_constructor"] = function (block) {
//   var name = block.getFieldValue("CLASS");
//   var body = pythonGenerator.statementToCode(block, "BODY");
//   return `class ${name}:\n    def __init__(self):\n${body || "        pass"}\n`;
// };

// pythonGenerator.forBlock["create_object_with_args"] = function (block) {
//   var name = block.getFieldValue("CLASS");
//   var args =pythonGenerator.valueToCode(block, "ARGS", pythonGenerator.ORDER_ATOMIC);
//   return [`${name}(*${args})`, pythonGenerator.ORDER_ATOMIC];
// };
// // ===================================================================
// // === COMMENTS CATEGORY =============================================
// // ===================================================================
// pythonGenerator.forBlock["comment"] = block => {
//   const comment = block.getFieldValue("COMMENT") || "";
//   return `# ${comment}\n`;
// };


// // ===================================================================
// // === GRAPHICS CATEGORY =============================================
// // ===================================================================
// pythonGenerator.forBlock["graphics_import_turtle"] = () => {
//   return "import turtle\n\n";
// };

// function ensureTurtle() {
//   if (!pythonGenerator.definitions_["import_turtle"]) {
//     pythonGenerator.definitions_["import_turtle"] = "import turtle";
//   }
// }

// pythonGenerator.forBlock["pen_down"] = () => {
//   ensureTurtle();
//   return "turtle.pendown()\n";
// };

// pythonGenerator.forBlock["pen_up"] = () => {
//   ensureTurtle();
//   return "turtle.penup()\n";
// };

// pythonGenerator.forBlock["move_forward"] = (block) => {
//   ensureTurtle();
//   const steps = pythonGenerator.valueToCode(block, "STEPS", pythonGenerator.ORDER_NONE) || "10";
//   return `turtle.forward(${steps})\n`;
// };

// pythonGenerator.forBlock["turn_right"] = (block) => {
//   ensureTurtle();
//   const deg = pythonGenerator.valueToCode(block, "DEG", pythonGenerator.ORDER_NONE) || "90";
//   return `turtle.right(${deg})\n`;
// };

// pythonGenerator.forBlock["turn_left"] = (block) => {
//   ensureTurtle();
//   const deg = pythonGenerator.valueToCode(block, "DEG", pythonGenerator.ORDER_NONE) || "90";
//   return `turtle.left(${deg})\n`;
// };

// pythonGenerator.forBlock["set_color"] = (block) => {
//   ensureTurtle();
//   const color = block.getFieldValue("COLOR") || "#000000";
//   return `turtle.pencolor("${color}")\n`;
// };

// pythonGenerator.forBlock["set_speed"] = (block) => {
//   ensureTurtle();
//   const speed = block.getFieldValue("SPEED") || "6";
//   return `turtle.speed(${speed})\n`;
// };

// // --- Circle ---
// pythonGenerator.forBlock["draw_circle"] = block => {
//   const radius = pythonGenerator.valueToCode(block, "RADIUS", pythonGenerator.ORDER_NONE) || "50";
//   return `turtle.circle(${radius})\n`;
// };

// // --- Rectangle ---
// pythonGenerator.forBlock["draw_rectangle"] = block => {
//   const width = pythonGenerator.valueToCode(block, "WIDTH", pythonGenerator.ORDER_NONE) || "100";
//   const height = pythonGenerator.valueToCode(block, "HEIGHT", pythonGenerator.ORDER_NONE) || "50";
//   return (
//     `for _ in range(2):\n` +
//     `  turtle.forward(${width})\n` +
//     `  turtle.right(90)\n` +
//     `  turtle.forward(${height})\n` +
//     `  turtle.right(90)\n`
//   );
// };

// // --- Star ---
// pythonGenerator.forBlock["draw_star"] = block => {
//   const points = pythonGenerator.valueToCode(block, "POINTS", pythonGenerator.ORDER_NONE) || "5";
//   const size = pythonGenerator.valueToCode(block, "SIZE", pythonGenerator.ORDER_NONE) || "100";
//   // Insert helper only once
//   if (!pythonGenerator.definitions_["draw_star_helper"]) {
//     pythonGenerator.definitions_["draw_star_helper"] = `
// def draw_star(points, size):
//     angle = 180 - (180 / points)
//     for _ in range(points):
//         turtle.forward(size)
//         turtle.right(angle)
// `;
//   }
//   return `draw_star(${points}, ${size})\n`;
// };


// // ===================================================================
// // === REQUESTS CATEGORY =============================================
// // ===================================================================
// pythonGenerator.forBlock["requests_get"] = block => {
//   const url = pythonGenerator.valueToCode(block, "URL", pythonGenerator.ORDER_NONE) || "''";
//   return [`requests.get(${url})`, pythonGenerator.ORDER_FUNCTION_CALL];
// };

// pythonGenerator.forBlock["requests_post"] = block => {
//   const url = pythonGenerator.valueToCode(block, "URL", pythonGenerator.ORDER_NONE) || "''";
//   return [`requests.post(${url})`, pythonGenerator.ORDER_FUNCTION_CALL];
// };

// // ===================================================================
// // === STIMULATORS =============================================
// // ===================================================================

// pythonGenerator.forBlock["traffic_light"] = () => {
//   const code = `
// # Traffic Light Simulation
// for color in ["Red", "Green", "Yellow"]:
//     print("Traffic Light is", color)
// `;
//   return code;
// };

// pythonGenerator.forBlock["led_control"] =  (block) => {
//   const state = block.getFieldValue("STATE");
//   const code = `print("LED is ${state}")\n`;
//   return code;
// };

// pythonGenerator.forBlock["button_press"] = () => {
//   const code = `input("Press Enter to simulate button...")\nTrue`;
//   return [code, pythonGenerator.ORDER_ATOMIC];
// };

// // ===================================================================
// // === Text =============================================
// // ===================================================================

// pythonGenerator.forBlock["text"] = function (block) {
//   const text = block.getFieldValue("TEXT") || "";
//   return [`'${text}'`, pythonGenerator.ORDER_ATOMIC];
// };

// pythonGenerator.forBlock["text_print"] = function (block) {
//   const value_text = pythonGenerator.valueToCode(block, "TEXT", pythonGenerator.ORDER_NONE) || "''";
//   return `print(${value_text})\n`;
// };

// // PYTHON GENERATOR
// pythonGenerator.forBlock["text_join"] = function (block) {
//   const a = pythonGenerator.valueToCode(block, "A", pythonGenerator.ORDER_NONE) || "''";
//   const b = pythonGenerator.valueToCode(block, "B", pythonGenerator.ORDER_NONE) || "''";
//   return [`str(${a}) + str(${b})`, pythonGenerator.ORDER_ATOMIC];
// };

// pythonGenerator.forBlock["input_text"] = function (block) {
//   const prompt = block.getFieldValue("PROMPT") || "";
//   return [`input('${prompt}')`, pythonGenerator.ORDER_ATOMIC];
// };