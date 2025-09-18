// src/toolboxCategories.js
const toolboxCategories = `
<xml id="toolbox" style="display: none">

  <category id="c1" name="PYTHON" colour="#ffe600">

    <category name="Import" colour="#c93664">
      <block type="import_from">
        <value name="NAME"><shadow type="inlinetxt"></shadow></value>
        <value name="NAME1"><shadow type="inlinetxt"></shadow></value>
      </block>
      <block type="import_as">
        <value name="NAME"><shadow type="inlinetxt"></shadow></value>
        <value name="NAME1"><shadow type="inlinetxt"></shadow></value>
      </block>
      <block type="import"><value name="NAME"><shadow type="inlinetxt"></shadow></value></block>
      <block type="wait"></block>
      <block type="sleep"></block>
      <block type="time"></block>
      <block type="random1"></block>
      <block type="random2"></block>
      <block type="choice"></block>
      <block type="signal"></block>
      <block type="pause"></block>
      <block type="calender"></block>
      <block type="month"></block>
      <block type="dir"><value name="NAME"><shadow type="inlinetxt"></shadow></value></block>
      <block type="re"></block>
      <block type="module_call"><value name="NAME"><shadow type="inlinetxt"></shadow></value></block>
      <block type="module_call2"><value name="NAME"><shadow type="inlinetxt"></shadow></value></block>
    </category>
    
    <category name="Input & Output" colour="#D15C08">
      <block type="varnum"> <value name="NAME"><shadow type="inlinetxt"></shadow></value></block>
      <block type="inputno"> <value name="NAME"> <shadow type="inlinetxt"><field name="text">Enter your number</field></shadow></value></block>
      <block type="inputstr"><value name="NAME"><shadow type="inlinetxt"><field name="text">Enter your number</field></shadow></value>  </block>
      <block type="printnew"><value name="NAME"><shadow type="inlinetxt"></shadow></value> </block>
      <block type="extra"><value name="NAME1"><shadow type="inlinetxt"><field name="text">abc</field></shadow></value><value name="NAME"><shadow type="inlinetxt"><field name="text">abc</field></shadow></value></block>
      <block type="end"></block>
      <block type="print_default"></block>
      <block type="print_input"></block>
      <block type="print_concat_value"></block>
      <block type="print_concat_string"></block>
    </category>

    <category name="Variable" custom="VARIABLE" colour="%{BKY_VARIABLES_HUE}"> </category>
    <category name="Variables" colour="#d39c8b">
      <block type="variable"></block>
      <block type="varinput">
        <value name="NAME">
          <shadow type="inlinetxt">
            <field name="text">1</field>
          </shadow>
        </value>
      </block>
      <block type="m6">
        <value name="NAME1">
          <shadow type="inlinetxt">
            <field name="text">0</field>
          </shadow>
        </value>
      </block>
      <block type="type"></block>
      <block type="conv">
        <value name="NAME1">
          <shadow type="inlinetxt">
            <field name="text">1</field>
          </shadow>
        </value>
      </block>
    </category>
    
  <!-- Math -->
  <category name="Math" colour="%{BKY_MATH_HUE}">
    <block type="math_number"></block>
    <block type="math_arithmetic"></block>
   <block type="math_modulo"></block>
    <block type="math_single">
   <field name="OP">ROOT</field>
    </block>
  </category>

  <!-- Text -->
  <category name="Text" colour="%{BKY_TEXTS_HUE}">
    <block type="text"></block>
    <block type="text_print"></block>
    <block type="text_join"></block>
    <block type="text_prompt_input"></block> <!-- our custom input block -->
  </category>


    <category name="Operators" colour="#32CD32">
    <block type="math_assignment"></block>
      <block type="mathoperator">
        <field name="OPERATOR">ADD</field>
        <value name="NAME1"><shadow type="inlinetxt"><field name="text">1</field></shadow></value>
        <value name="NAME"><shadow type="inlinetxt"><field name="text">1</field></shadow></value>
      </block>

      <block type="stringoperator">
        <field name="OPERATOR">STRING</field>
        <value name="NAME1"><shadow type="inlinetxt"><field name="text">abc</field></shadow></value>
        <value name="NAME"><shadow type="inlinetxt"><field name="text">abc</field></shadow></value>
      </block>

      <block type="andextra">
        <field name="OPERATOR">ADD</field>
        <value name="NAME1"><shadow type="inlinetxt"><field name="text">1</field></shadow></value>
        <value name="NAME"><shadow type="inlinetxt"><field name="text">1</field></shadow></value>
      </block>

      <block type="compextra">
        <field name="OPERATOR">ADD</field>
        <value name="NAME1"><shadow type="inlinetxt"><field name="text">1</field></shadow></value>
        <value name="NAME"><shadow type="inlinetxt"><field name="text">1</field></shadow></value>
      </block>

      <block type="inblock">
        <field name="OPERATOR">ADD</field>
        <value name="NAME1"><shadow type="inlinetxt"><field name="text">1</field></shadow></value>
        <value name="NAME"><shadow type="inlinetxt"><field name="text">1</field></shadow></value>
      </block>

      <block type="splicing"></block>

      <block type="increment">
        <value name="NAME"><shadow type="inlinetxt"><field name="text">1</field></shadow></value>
        <value name="xyz"><shadow type="inlinetxt"><field name="text">1</field></shadow></value>
      </block>

    </category>

    <category name="String" colour="#d39c8b">
      <block type="s1">
        <value name="NAME2"><shadow type="inlinetxt"><field name="text">0</field></shadow></value>
      </block>
      <block type="strfn"></block>
      <block type="replace">
        <value name="NAME"><shadow type="inlinetxt"><field name="text">abc</field></shadow></value>
        <value name="NAME1"><shadow type="inlinetxt"><field name="text">abc</field></shadow></value>
      </block>
      <block type="split">
        <value name="NAME"><shadow type="inlinetxt"><field name="text">abc</field></shadow></value>
      </block>
    </category>

    <category name="Loops" colour="#0000CD">
      <block type="infinitewhile"></block>
      <block type="for">
        <value name="NAME1"><shadow type="inlinetxt"><field name="text">start,stop,step</field></shadow></value>
      </block>
      <block type="fori"><value name="NAME1"><shadow type="inlinetxt"></shadow></value></block>
      <block type="while"><value name="NAME"><shadow type="inlinetxt"></shadow></value></block>
      <block type="controls_repeat_ext"></block>
      <block type="controls_whileUntil"></block>
      <block type="true" colour="#0000CD"></block>
    </category>

    <category name="Logic" colour="#0CC0FF">

      <block type="controls_if"></block>
      <block type="if"><value name="NAME"><shadow type="inlinetxt"></shadow></value></block>
      <block type="elif3"><value name="NAME"><shadow type="inlinetxt"></shadow></value></block>
      <block type="else"></block>
      <block type="logic_compare"></block>
      <block type="logic_operation"></block>
      <block type="logic_boolean"></block>
      <block type="logic_negate"></block>
    </category>

  </category>

  <category name="Datatypes" colour="#C0FF0C">

    <category name="List" colour="#DB7093">
    <block type="lists_create_with">
      <mutation items="3"></mutation>
    </block>
    <block type="lists_getIndex"></block>
    <block type="lists_length"></block>
      <block type="list1"><value name="NAME1"><shadow type="inlinetxt"><field name="text">1,2,3</field></shadow></value></block>
      <block type="listin"><value name="NAME"><shadow type="inlinetxt"><field name="text">1,2,3</field></shadow></value></block>
      <block type="list3"><value name="NAME"><shadow type="inlinetxt"><field name="text">default</field></shadow></value></block>
      <block type="list_in_list"><value name="NAME"><shadow type="inlinetxt"><field name="text">default</field></shadow></value><value name="NAME1"><shadow type="inlinetxt"></shadow></value></block>
      <block type="list"><value name="NAME"><shadow type="inlinetxt"></shadow></value></block>
      <block type="insert">
        <value name="NAME1"><shadow type="inlinetxt"><field name="text">new</field></shadow></value>
        <value name="NAME2"><shadow type="math_number"><field name="text">0</field></shadow></value>
      </block>
      <block type="pop"><value name="NAME"><shadow type="inlinetxt"></shadow></value></block>
      <block type="replaced"><value name="NAME1"><shadow type="math_number"><field name="text">0</field></shadow></value><value name="NAME"><shadow type="inlinetxt"></shadow></value></block>
      <block type="sort"><value name="NAME"><shadow type="inlinetxt"></shadow></value></block>
      <block type="multiple"><value name="NAME"><shadow type="inlinetxt"></shadow></value><value name="xyz"><shadow type="inlinetxt"></shadow></value></block>
      <block type="sum"><value name="NAME"><shadow type="inlinetxt"></shadow></value></block>
      <block type="del"><value name="NAME"><shadow type="inlinetxt"></shadow></value></block>
    </category>

    <category name="Tuple" colour="#801e33">
      <block type="t1"><value name="NAME1"><shadow type="inlinetxt"><field name="text">one,two</field></shadow></value></block>
      <block type="tuple"><value name="NAME"><shadow type="inlinetxt"></shadow></value></block>
    </category>

    <category name="Set" colour="#0c99a7">
      <block type="set"><value name="NAME"><shadow type="inlinetxt"></shadow></value></block>
      <block type="setremove"><value name="NAME"><shadow type="inlinetxt"></shadow></value></block>
      <block type="set1"><value name="NAME"><shadow type="inlinetxt"></shadow></value></block>
      <block type="setadd"><value name="NAME"><shadow type="inlinetxt"></shadow></value></block>
      <block type="setmethods"></block>
    </category>

    <category name="Dictionary" colour="#0ca76a">
      <block type="d1"><value name="NAME1"><shadow type="inlinetxt"><field name="text">key1:value1,key2:value2</field></shadow></value></block>
      <block type="emptyd"></block>
      <block type="d2"><value name="NAME1"><shadow type="inlinetxt"></shadow></value></block>
      <block type="dictinsert"><value name="NAME1"><shadow type="inlinetxt"><field name="text">key</field></shadow></value><value name="NAME2"><shadow type="inlinetxt"></shadow></value></block>
      <block type="dinsert"><value name="NAME2"><shadow type="inlinetxt"></shadow></value></block>
      <block type="dget"><value name="NAME1"><shadow type="inlinetxt"></shadow></value></block>
      <block type="dadd"><value name="NAME1"><shadow type="inlinetxt"><field name="text">key</field></shadow></value><value name="NAME2"><shadow type="inlinetxt"></shadow></value></block>
    </category>

  </category>
  <category name="Function" colour="#FF4500">
  <category name="Functions" custom="PROCEDURE" colour="#6E4486">
  <!-- Built-in procedure blocks will appear here automatically -->
</category>
<category name="Custom Functions" colour="#FF4500">
  <block type="def_func"></block>
  <block type="func_call_stmt"></block>
  <block type="func_call"></block>
  <block type="return"></block>
  <block type="lambda"></block>
</category>
</category>

  <category name="Exception handling" colour="#ff3396">
    <block type="e1"></block>
    <block type="e2"><value name="NAME"><shadow type="inlinetxt"></shadow></value></block>
    <block type="e3"></block>
    <block type="e4"></block>
  </category>

  <category name="File handling" colour="#99cc00">
    <block type="f1"><value name="xyz"><shadow type="inlinetxt"><field name="text">file name</field></shadow></value></block>
    <block type="f2"></block>
    <block type="readline"><value name="NAME"><shadow type="inlinetxt"><field name="text">file name</field></shadow></value></block>
    <block type="f3"><value name="NAME2"><shadow type="inlinetxt"></shadow></value></block>
    <block type="f4"></block>
  </category>

  <category name="Class" colour="#FF0000">
    <block type="c1"><value name="NAME1"><shadow type="inlinetxt"><field name="text">class name</field></shadow></value></block>
    <block type="c2"><value name="NAME1"><shadow type="inlinetxt"><field name="text">name</field></shadow></value></block>
    <block type="c7"><value name="NAME1"><shadow type="inlinetxt"><field name="text">parent_class</field></shadow></value><value name="NAME2"><shadow type="inlinetxt"><field name="text">default</field></shadow></value></block>
    <block type="c3"><value name="NAME"><shadow type="inlinetxt"><field name="text">name</field></shadow></value></block>
    <block type="classvar"><value name="NAME"><shadow type="inlinetxt"></shadow></value></block>
    <block type="c4"><value name="NAME"><shadow type="inlinetxt"><field name="text">default</field></shadow></value></block>
    <block type="c5"><value name="NAME1"><shadow type="inlinetxt"><field name="text">class_name</field></shadow></value><value name="NAME3"><shadow type="inlinetxt"></shadow></value></block>
    <block type="c6"></block>
    <block type="fc"><value name="abc"><shadow type="inlinetxt"></shadow></value><value name="xyz"><shadow type="inlinetxt"></shadow></value></block>
    <block type="fc1"><value name="NAME"><shadow type="inlinetxt"></shadow></value><value name="NAME1"><shadow type="inlinetxt"></shadow></value></block>
  </category>

  <category name="Object" colour="#FFA07A">
    <block type="o1"><value name="NAME"><shadow type="inlinetxt"><field name="text">class_name</field></shadow></value><value name="NAME1"><shadow type="inlinetxt"><field name="text">class_parameters</field></shadow></value></block>
    <block type="o3"><value name="NAME"><shadow type="inlinetxt"><field name="text">object_name</field></shadow></value><value name="NAME1"><shadow type="inlinetxt"><field name="text">attribute</field></shadow></value></block>
    <block type="o4"><value name="NAME"><shadow type="inlinetxt"><field name="text">class_name</field></shadow></value></block>
    <block type="method"><value name="NAME1"><shadow type="inlinetxt"><field name="text">method</field></shadow></value><value name="NAME2"><shadow type="inlinetxt"><field name="text"></field></shadow></value></block>
    <block type="modify"><value name="NAME"><shadow type="inlinetxt"><field name="text">default</field></shadow></value><value name="NAME2"><shadow type="inlinetxt"><field name="text">default</field></shadow></value></block>
  </category>

  <!-- Custom -->
  <category name="Custom" colour="#17becf">
    <block type="random_choice"></block> <!-- Custom random -->
    <block type="time_sleep"></block>   <!-- Custom time.sleep -->
  </category>

  <category name="More" colour="#b533ff">
    <block type="m1"><value name="NAME"><shadow type="inlinetxt"><field name="text"></field></shadow></value></block>
    <block type="m3"><value name="NAME"><shadow type="inlinetxt"><field name="text"></field></shadow></value></block>
    <block type="m4"><value name="NAME"><shadow type="inlinetxt"><field name="text">1,3</field></shadow></value></block>
    <block type="randchar"><value name="NAME"><shadow type="inlinetxt"><field name="text">ab</field></shadow></value></block>
    <block type="m5"></block>
    <block type="count"><value name="NAME"><shadow type="inlinetxt"><field name="text"></field></shadow></value></block>
    <block type="year"><value name="NAME"><shadow type="inlinetxt"><field name="text">year,month</field></shadow></value></block>
    <block type="year1"><value name="NAME"><shadow type="inlinetxt"><field name="text">year</field></shadow></value></block>
    <block type="pass"></block>
    <block type="join"><value name="NAME"><shadow type="inlinetxt"><field name="text">.</field></shadow></value><value name="NAME1"><shadow type="inlinetxt"><field name="text"></field></shadow></value></block>
  </category>

</xml>
`;

export default toolboxCategories;

  // <category name="Functions"  colour="#FF4500">
  //   <block type="fu1"><value name="abc"><shadow type="inlinetxt"></shadow></value><value name="xyz"><shadow type="inlinetxt"></shadow></value></block>
  //   <block type="fu2"><value name="abc"><shadow type="inlinetxt"></shadow></value><value name="pqr"><shadow type="inlinetxt"></shadow></value></block>
  //   <block type="fun"><value name="NAME"><shadow type="inlinetxt"></shadow></value><value name="NAME1"><shadow type="inlinetxt"></shadow></value></block>
  //   <block type="fu3"><value name="NAME"><shadow type="inlinetxt"></shadow></value></block>
  //   <block type="fu4"><value name="NAME"><shadow type="inlinetxt"></shadow></value></block>
  //   <block type="global"><value name="NAME"><shadow type="inlinetxt"></shadow></value></block>
  // </category>