// toolboxCategories.js
const toolboxCategories = `
<xml id="toolbox">

  <!-- ================= PYTHON ROOT ================= -->
  <category name="PYTHON" colour="green">

    // === IMPORT ===
    <category name="Import" colour="ED3713">
      <block type="text">
        <field name="TEXT">import math</field>
      </block>
      <block type="text">
        <field name="TEXT">import random</field>
      </block>
      <block type="import_module"></block>
      <block type="from_import"></block>
    </category>

    // === STATEMENTS ===
    <category name="Statements" colour="E31CC8">

      <!-- Output -->
      <label text="Output"></label>
      <block type="print_hello"></block>
      <block type="print"></block>

      <!-- Input -->
      <label text="Input"></label>
      <block type="input"></block>

      <!-- Time -->
      <label text="Time"></label>
      <block type="time_sleep"></block>

      <!-- Convert -->
      <label text="Convert"></label>
      <block type="str"></block>
      <block type="int"></block>
      <block type="int_base"></block>
      <block type="float"></block>

      <!-- Scope -->
      <label text="Scope"></label>
      <block type="global"></block>

      <!-- Custom -->
      <label text="Custom"></label>
      <block type="custom_code"></block>
    </category>

    // === VARIABLES ===
    <category name="Variables" custom="VARIABLE" colour="330"></category>

    // === OPERATORS ===
    <category name="Operators" colour="230">

      <!-- Arithmetic -->
      <block type="math_number"></block>
      <block type="operator_add"></block>
      <block type="operator_subtract"></block>
      <block type="operator_multiply"></block>
      <block type="operator_divide"></block>
      <block type="operator_mod"></block>
      <block type="operator_power"></block>

      <!-- Comparison -->
      <block type="operator_equals"></block>
      <block type="operator_not_equals"></block>
      <block type="operator_less"></block>
      <block type="operator_less_equal"></block>
      <block type="operator_greater"></block>
      <block type="operator_greater_equal"></block>

      <!-- Logical -->
      <block type="operator_and"></block>
      <block type="operator_or"></block>
      <block type="operator_not"></block>
    </category>

    // === STRING ===
    <category name="String" colour="160">
      <block type="text"></block>
      <block type="text_length"></block>
      <block type="text_isEmpty"></block>
      <block type="text_join"></block>
    </category>

    // === LOOPS ===
    <category name="Loops" colour="3D06A1">
      <block type="controls_repeat_ext">
        <value name="TIMES">
          <shadow type="math_number">
            <field name="NUM">10</field>
          </shadow>
        </value>
      </block>
      <block type="controls_whileUntil"></block>
      <block type="controls_for">
        <value name="FROM">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="TO">
          <shadow type="math_number">
            <field name="NUM">10</field>
          </shadow>
        </value>
        <value name="BY">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
      </block>
      <block type="break_loop"></block>
    </category>

    // === LOGIC ===
    <category name="Logic" colour="210">
      <block type="controls_if"></block>
      <block type="logic_compare"></block>
      <block type="logic_operation"></block>
      <block type="logic_negate"></block>
      <block type="logic_boolean"></block>
    </category>

    // === DATATYPES ===
    <category name="Datatypes" colour="#DCE31C">

      <!-- List -->
      <category name="List" colour="60">
        <block type="lists_create_with"></block>
        <block type="lists_length"></block>
      </category>

      <!-- Tuple -->
      <category name="Tuple" colour="100">
        <block type="text">
          <field name="TEXT">(1, 2, 3)</field>
        </block>
      </category>

      <!-- Set -->
      <category name="Set" colour="140">
        <block type="text">
          <field name="TEXT">{1, 2, 3}</field>
        </block>
      </category>

      <!-- Dictionary -->
      <category name="Dictionary" colour="180">
        <block type="text">
          <field name="TEXT">{'key': 'value'}</field>
        </block>
      </category>
    </category>

    // === FUNCTIONS ===
    <category name="Functions" custom="PROCEDURE" colour="300"></category>

    // === EXCEPTION HANDLING ===
    <category name="Exception handling" colour="10">
      <block type="text">
        <field name="TEXT">try:\n    pass\nexcept Exception as e:\n    print(e)</field>
      </block>
    </category>

    // === FILE HANDLING ===
    <category name="File handling" colour="290">
      <block type="text">
        <field name="TEXT">with open('file.txt', 'r') as f:\n    print(f.read())</field>
      </block>
    </category>

    // === CLASSES ===
    <category name="Classes" colour="#9A57E7">
      <block type="class_create"></block>
      <block type="class_method"></block>
      <block type="class_instance"></block>
      <block type="class_call_method"></block>
    </category>

    // ===STIMULATORS ====

    <category name="Simulators" colour="#ff9800">
  <block type="traffic_light"></block>
  <block type="led_control"></block>
  <block type="button_press"></block>
   </category>

    // === MORE ===
    <category name="More" colour="200">
      <block type="time_sleep"></block>
      <block type="comment"></block>
    </category>

    // === GRAPHICS ===
    <category name="Graphics" colour="#16E9DF">

     <!-- Turtle Controls (new) -->
  <category name="Turtle Controls" colour="15">
    <block type="graphics_import_turtle"></block>

    <block type="set_speed"></block>
    <block type="set_color"></block>
    <block type="pen_down"></block>
    <block type="pen_up"></block>

    <block type="move_forward">
      <value name="STEPS">
        <shadow type="math_number">
          <field name="NUM">50</field>
        </shadow>
      </value>
    </block>

    <block type="turn_right">
      <value name="DEG">
        <shadow type="math_number">
          <field name="NUM">90</field>
        </shadow>
      </value>
    </block>

    <block type="turn_left">
      <value name="DEG">
        <shadow type="math_number">
          <field name="NUM">90</field>
        </shadow>
      </value>
    </block>
  </category>


      <block type="draw_circle"></block>
      <block type="draw_rectangle"></block>
       <block type="draw_star"></block>
    </category>

    // === REQUESTS ===
    <category name="Requests" colour="10">
      <block type="requests_get"></block>
      <block type="requests_post"></block>
    </category>

  </category>
</xml>
`;

export default toolboxCategories;
