
const toolboxCategories = `
<xml id="toolbox" style="display: none">

  <!-- Python Core -->
  <category id="c1" name="Python" colour="#FFE600">

    <!-- Imports -->
    <category name=" Modules" colour="#C93664">
      <block type="import"></block>
      <block type="import_as"></block>
      <block type="import_from"></block>
      <block type="module_call"></block>
      <block type="module_call2"></block>
      <block type="time"></block>
      <block type="sleep"></block>
      <block type="wait"></block>
      <block type="pause"></block>
      <block type="random1"></block>
      <block type="random2"></block>
      <block type="choice"></block>
      <block type="signal"></block>
      <block type="calender"></block>
      <block type="month"></block>
      <block type="dir"></block>
      <block type="re"></block>
</category>
    <category name=" Input Output" colour="#D15C08">
      <block type="varnum"></block>
      <block type="inputno"></block>
      <block type="inputstr"></block>
      <block type="print_default"></block>
      <block type="print_input"></block>
      <block type="print_concat_value"></block>
      <block type="print_concat_string"></block>
      <block type="printnew"></block>
      <block type="extra"></block>
      <block type="end"></block>
    </category>

    <!-- Variables -->
    <category name=" Variables" colour="#f78f6c">
      <block type="variable"></block>
      <block type="varinput"></block>
      <block type="m6"></block>
      <block type="type"></block>
      <block type="conv"></block>
    </category>

    <!-- Core -->
    <category name=" Math" colour="%{BKY_MATH_HUE}">
      <block type="math_number"></block>
      <block type="math_arithmetic"></block>
      <block type="math_modulo"></block>
      <block type="math_single"></block>
      <block type="math_trig"></block>
      <block type="math_constant"></block>
      <block type="math_round"></block>
      <block type="math_on_list"></block>
      <block type="math_change"></block>
    </category>

    <category name=" Text" colour="%{BKY_TEXTS_HUE}">
      <block type="text"></block>
      <block type="text_join"></block>
      <block type="text_prompt_input"></block>
    </category>

    <category name="Operators" colour="#32CD32">
      <block type="math_assignment"></block>
      <block type="mathoperator"></block>
      <block type="stringoperator"></block>
      <block type="andextra"></block>
      <block type="compextra"></block>
      <block type="inblock"></block>
      <block type="splicing"></block>
      <block type="increment"></block>
    </category>

    <category name="Strings" colour="#D39C8B">
      <block type="s1"></block>
      <block type="strfn"></block>
      <block type="replace"></block>
      <block type="split"></block>
    </category>

    <category name="Loops" colour="#0000CD">
      <block type="infinitewhile"></block>
      <block type="for_range"></block>
      <block type="while_do"></block>
      <block type="while_loop"></block>
      <block type="controls_repeat_ext"></block>
      <block type="controls_whileUntil"></block>
    </category>

    <category name="Logic" colour="#0CC0FF">
      <block type="controls_if"></block>
      <block type="if"></block>
      <block type="elif3"></block>
      <block type="else"></block>
      <block type="logic_compare"></block>
      <block type="logic_operation"></block>
      <block type="logic_boolean"></block>
      <block type="logic_negate"></block>
    </category>
  </category>

  <!-- Datatypes (grouped neatly) -->
  <category name=" Data Structures" colour="#C0FF0C">
    <category name="📋 List" colour="#DB7093">
      <block type="lists_create_with"></block>
      <block type="lists_getIndex"></block>
      <block type="lists_length"></block>
      <block type="list1"></block>
      <block type="listin"></block>
      <block type="list3"></block>
      <block type="list_in_list"></block>
      <block type="list"></block>
      <block type="insert"></block>
      <block type="pop"></block>
      <block type="replaced"></block>
      <block type="sort"></block>
      <block type="multiple"></block>
      <block type="sum"></block>
      <block type="del"></block>
    </category>

    <category name="Turtle" colour="#801E33">
  <block type="turtle_create"></block>
  <block type="screen_create"></block>
  <block type="screen_setup">
    <value name="WIDTH"><shadow type="math_number"><field name="NUM">1920</field></shadow></value>
    <value name="HEIGHT"><shadow type="math_number"><field name="NUM">1080</field></shadow></value>
  </block>
  <block type="screen_bgcolor">
    <value name="R"><shadow type="math_number"><field name="NUM">255</field></shadow></value>
    <value name="G"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
    <value name="B"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
  </block>
  <block type="turtle_forward">
    <value name="DIST"><shadow type="math_number"><field name="NUM">90</field></shadow></value>
  </block>
  <block type="turtle_circle">
    <value name="RADIUS"><shadow type="math_number"><field name="NUM">50</field></shadow></value>
  </block>
  <block type="turtle_speed">
    <value name="SPEED"><shadow type="math_number"><field name="NUM">10</field></shadow></value>
  </block>
  <block type="turtle_goto">
    <value name="X"><shadow type="math_number"><field name="NUM">5</field></shadow></value>
    <value name="Y"><shadow type="math_number"><field name="NUM">5</field></shadow></value>
  </block>
  <block type="turtle_shape"></block>
  <block type="turtle_width">
    <value name="WIDTH"><shadow type="math_number"><field name="NUM">20</field></shadow></value>
  </block>
  <block type="turtle_color">
    <value name="R"><shadow type="math_number"><field name="NUM">255</field></shadow></value>
    <value name="G"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
    <value name="B"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
  </block>
  <block type="turtle_pencolor">
    <value name="R"><shadow type="math_number"><field name="NUM">255</field></shadow></value>
    <value name="G"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
    <value name="B"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
  </block>
  <block type="turtle_fillcolor">
    <value name="R"><shadow type="math_number"><field name="NUM">255</field></shadow></value>
    <value name="G"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
    <value name="B"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
  </block>
  <block type="turtle_begin_fill"></block>
  <block type="turtle_penupdown">
    <field name="STATE">up</field>
  </block>
</category>

    <category name=" Set" colour="#0C99A7">
      <block type="set"></block>
      <block type="setremove"></block>
      <block type="set1"></block>
      <block type="setadd"></block>
      <block type="setmethods"></block>
    </category>

    <category name=" Dict" colour="#0CA76A">
      <block type="d1"></block>
      <block type="emptyd"></block>
      <block type="d2"></block>
      <block type="dictinsert"></block>
      <block type="dinsert"></block>
      <block type="dget"></block>
      <block type="dadd"></block>
    </category>
  </category>

  <!-- Functions -->
  <category name=" Functions" colour='#ff3396'>
    <block type="def_func"></block>
    <block type="func_call_stmt"></block>
    <block type="func_call"></block>
    <block type="return"></block>
    <block type="lambda"></block>
    <block type="fu1"></block>
    <block type="fu2"></block>
    <block type="fu3"></block>
    <block type="fu4"></block>
    <block type="fu5"></block>
    <block type="fun"></block>
    <block type="global"></block>
    <block type="func"></block>
    <block type="e1"></block>
    <block type="e2"></block>
    <block type="e3"></block>
    <block type="e4"></block>
  </category>

  <!-- Files -->
  <category name=" Files" colour="#99CC00">
    <block type="f1"></block>
    <block type="f2"></block>
    <block type="readline"></block>
    <block type="f3"></block>
    <block type="f4"></block>
  </category>

  <!-- OOP -->
  <category name=" Classes" colour="#FF0000">
    <block type="c1"></block>
    <block type="c2"></block>
    <block type="c7"></block>
    <block type="c3"></block>
    <block type="classvar"></block>
    <block type="c4"></block>
    <block type="c5"></block>
    <block type="c6"></block>
    <block type="fc"></block>
    <block type="fc1"></block>
    <block type="o1"></block>
    <block type="o3"></block>
    <block type="o4"></block>
    <block type="o2"></block>
  </category>


  <!-- Misc -->
  <category name=" Utilities" colour="#B533FF">
    <block type="m1"></block>
    <block type="m2"></block>
    <block type="m3"></block>
    <block type="m4"></block>
    <block type="randchar"></block>
    <block type="m5"></block>
    <block type="count"></block>
    <block type="pass"></block>
    <block type="true"></block>
    <block type="year"></block>
    <block type="year1"></block>
    <block type="join"></block>
  </category>

  <category name=" Random" colour="#20B2AA">
    <block type="randint"></block>
    <block type="randrange"></block>
    <block type="uniform"></block>
  </category>

</xml>
`;

export default toolboxCategories;
