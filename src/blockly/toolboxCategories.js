// toolboxCategories.js
const toolboxCategories = `
<xml id="toolbox" style="display: none">

  <!-- PYTHON ROOT CATEGORY -->
  <category name="PYTHON" colour="20">

    <!-- Import -->
    <category name="Import" colour="210">
      <block type="text">
        <field name="TEXT">import math</field>
      </block>
      <block type="text">
        <field name="TEXT">import random</field>
      </block>
       <block type="import_module"></block>
  <block type="from_import"></block>
    </category>


<! -- statements -->

   <category name="Statements" colour="#FF8C00">
    
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

    <!-- Variables -->
    <category name="Variables" custom="VARIABLE" colour="330"></category>

    <!-- Operators -->
    <category name="Operators" colour="120">
      <block type="math_arithmetic"></block>
      <block type="logic_compare"></block>
      <block type="logic_operation"></block>
      <block type="logic_negate"></block>
    </category>

    <!-- String -->
    <category name="String" colour="160">
      <block type="text"></block>
      <block type="text_length"></block>
      <block type="text_isEmpty"></block>
      <block type="text_join"></block>
    </category>

    <!-- Loops -->
    <category name="Loops" colour="260">
      <block type="controls_repeat_ext">
        <value name="TIMES">
          <shadow type="math_number">
            <field name="NUM">10</field> </shadow>
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

    <!-- Logic -->
    <category name="Logic" colour="210">
      <block type="controls_if"></block>
      <block type="logic_compare"></block>
      <block type="logic_operation"></block>
      <block type="logic_negate"></block>
      <block type="logic_boolean"></block>
    </category>

    <!-- Datatypes -->
    <category name="Datatypes" colour="60">
      <category name="List" colour="60">
        <block type="lists_create_with"></block>
        <block type="lists_length"></block>
      </category>
      <category name="Tuple" colour="100">
        <block type="text">
          <field name="TEXT">(1, 2, 3)</field>
        </block>
      </category>
      <category name="Set" colour="140">
        <block type="text">
          <field name="TEXT">{1, 2, 3}</field>
        </block>
      </category>
      <category name="Dictionary" colour="180">
        <block type="text">
          <field name="TEXT">{'key': 'value'}</field>
        </block>
      </category>
    </category>

    <!-- Functions -->
    <category name="Functions" custom="PROCEDURE" colour="300"></category>

    <!-- Exception handling -->
    <category name="Exception handling" colour="10">
      <block type="text">
        <field name="TEXT">try:\n    pass\nexcept Exception as e:\n    print(e)</field>
      </block>
    </category>

    <!-- File handling -->
    <category name="File handling" colour="290">
      <block type="text">
        <field name="TEXT">with open('file.txt', 'r') as f:\n    print(f.read())</field>
      </block>
    </category>

    <!-- Class -->
    <category name="Class" colour="200">
      <block type="text">
        <field name="TEXT">class MyClass:\n    def __init__(self):\n        pass</field>
      </block>
    </category>

    <!-- Object -->
    <category name="Object" colour="250">
      <block type="text">
        <field name="TEXT">obj = MyClass()</field>
      </block>
    </category>

     <!-- More -->
  <category name="More" colour="200">
    <block type="time_sleep"></block>
    <block type="comment"></block>
  </category>

  <!-- Graphics -->
  <category name="Graphics" colour="15">
    <block type="draw_circle"></block>
    <block type="draw_rectangle"></block>
  </category>



  <!-- Requests -->
  <category name="Requests" colour="10">
    <block type="requests_get"></block>
    <block type="requests_post"></block>
  </category>

  


</xml>
`;

export default toolboxCategories;
