(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(_,e,t){},16:function(_,e,t){},18:function(_,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(2),l=t.n(c),i=(t(14),t(3));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(i.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(_){_.unregister()})},3:function(module,__webpack_exports__,__webpack_require__){"use strict";var D_workspace_freeCodeCamp_Projects_front_end_libraries_projects_fcc_javascript_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),D_workspace_freeCodeCamp_Projects_front_end_libraries_projects_fcc_javascript_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),D_workspace_freeCodeCamp_Projects_front_end_libraries_projects_fcc_javascript_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),D_workspace_freeCodeCamp_Projects_front_end_libraries_projects_fcc_javascript_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),D_workspace_freeCodeCamp_Projects_front_end_libraries_projects_fcc_javascript_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_App_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(16),_App_scss__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_6__),isStartZero=/^0/,endsWithOperator=/[-x+\/]$/,lastNumberHasDot=/\d+\.\d*$/,App=function(_Component){function App(props){var _this;return Object(D_workspace_freeCodeCamp_Projects_front_end_libraries_projects_fcc_javascript_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=Object(D_workspace_freeCodeCamp_Projects_front_end_libraries_projects_fcc_javascript_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(D_workspace_freeCodeCamp_Projects_front_end_libraries_projects_fcc_javascript_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App).call(this,props)),_this.isAbleAddDot=function(_){return!lastNumberHasDot.test(_)&&!endsWithOperator.test(_)},_this.handleClickNumber=function(_){_this.setState(function(e){return{display:isStartZero.test(e.display)?_:e.display+_,formula:isStartZero.test(e.formula)?_:e.formula+_}})},_this.handleClickDecimal=function(){_this.setState(function(_){return{display:_this.isAbleAddDot(_.display)?_.display+".":_.display,formula:_this.isAbleAddDot(_.formula)?_.formula+".":_.formula}})},_this.handleClickOperator=function(_){_this.setState(function(e){return{display:_,formula:endsWithOperator.test(e.formula)?e.formula.replace(endsWithOperator,_):e.formula+_}})},_this.handleClickEquals=function(){var f=_this.state.formula.replace("x","*");try{var result=eval(f);_this.setState({display:result,formula:String(result)})}catch(e){console.log(e),console.log("formula: "+f)}},_this.handleClickClear=function(){_this.setState({display:"0",formula:""})},_this.state={display:"0",formula:""},_this}return Object(D_workspace_freeCodeCamp_Projects_front_end_libraries_projects_fcc_javascript_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(App,_Component),Object(D_workspace_freeCodeCamp_Projects_front_end_libraries_projects_fcc_javascript_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){var _=this,e=this.state,t=e.display,r=e.formula;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"equals",onClick:this.handleClickEquals},"="),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"zero",onClick:function(){return _.handleClickNumber("0")}},"0"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"one",onClick:function(){return _.handleClickNumber("1")}},"1"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"two",onClick:function(){return _.handleClickNumber("2")}},"2"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"three",onClick:function(){return _.handleClickNumber("3")}},"3"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"four",onClick:function(){return _.handleClickNumber("4")}},"4"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"five",onClick:function(){return _.handleClickNumber("5")}},"5"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"six",onClick:function(){return _.handleClickNumber("6")}},"6"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"seven",onClick:function(){return _.handleClickNumber("7")}},"7"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"eight",onClick:function(){return _.handleClickNumber("8")}},"8"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"nine",onClick:function(){return _.handleClickNumber("9")}},"9"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"subtract",onClick:function(){return _.handleClickOperator("-")}},"-"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"multiply",onClick:function(){return _.handleClickOperator("x")}},"x"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"divide",onClick:function(){return _.handleClickOperator("/")}},"/"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"add",onClick:function(){return _.handleClickOperator("+")}},"+"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"decimal",onClick:this.handleClickDecimal},"."),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"clear",onClick:this.handleClickClear},"AC"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1",{id:"formula"},r),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1",{id:"display"},t))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=App},9:function(_,e,t){_.exports=t(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.5d4fa11e.chunk.js.map