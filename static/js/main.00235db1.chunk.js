(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(_,e,a){},16:function(_,e,a){},18:function(_,e,a){"use strict";a.r(e);var t=a(0),r=a.n(t),l=a(2),i=a.n(l),c=(a(14),a(3));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(c.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(_){_.unregister()})},3:function(module,__webpack_exports__,__webpack_require__){"use strict";var D_workspace_freeCodeCamp_Projects_front_end_libraries_projects_fcc_javascript_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),D_workspace_freeCodeCamp_Projects_front_end_libraries_projects_fcc_javascript_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),D_workspace_freeCodeCamp_Projects_front_end_libraries_projects_fcc_javascript_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),D_workspace_freeCodeCamp_Projects_front_end_libraries_projects_fcc_javascript_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),D_workspace_freeCodeCamp_Projects_front_end_libraries_projects_fcc_javascript_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_App_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(16),_App_scss__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_6__),isStartZero=/^0/,endsWithOperator=/[-x+\/]$/,lastNumberHasDot=/\d+\.\d*$/,App=function(_Component){function App(props){var _this;return Object(D_workspace_freeCodeCamp_Projects_front_end_libraries_projects_fcc_javascript_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=Object(D_workspace_freeCodeCamp_Projects_front_end_libraries_projects_fcc_javascript_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(D_workspace_freeCodeCamp_Projects_front_end_libraries_projects_fcc_javascript_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App).call(this,props)),_this.isAbleAddDot=function(_){return!lastNumberHasDot.test(_)&&!endsWithOperator.test(_)},_this.handleClickNumber=function(_){var e=_.target.dataset.number;_this.setState(function(_){return{display:isStartZero.test(_.display)?e:_.display+e,formula:isStartZero.test(_.formula)?e:_.formula+e}})},_this.handleClickDecimal=function(){_this.setState(function(_){return{display:_this.isAbleAddDot(_.display)?_.display+".":_.display,formula:_this.isAbleAddDot(_.formula)?_.formula+".":_.formula}})},_this.handleClickOperator=function(_){var e=_.target.dataset.operator;_this.setState(function(_){return{display:e,formula:endsWithOperator.test(_.formula)?_.formula.replace(endsWithOperator,e):_.formula+e}})},_this.handleClickEquals=function(){var f=_this.state.formula.replace("x","*");try{var result=eval(f);_this.setState({display:result,formula:String(result)})}catch(e){console.log(e),console.log("formula: "+f)}},_this.handleClickClear=function(){_this.setState({display:"0",formula:""})},_this.state={display:"0",formula:""},_this}return Object(D_workspace_freeCodeCamp_Projects_front_end_libraries_projects_fcc_javascript_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(App,_Component),Object(D_workspace_freeCodeCamp_Projects_front_end_libraries_projects_fcc_javascript_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){var _=this.state,e=_.display,a=_.formula;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"equals",onClick:this.handleClickEquals},"="),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"zero","data-number":"0",onClick:this.handleClickNumber},"0"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"one","data-number":"1",onClick:this.handleClickNumber},"1"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"two","data-number":"2",onClick:this.handleClickNumber},"2"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"three","data-number":"3",onClick:this.handleClickNumber},"3"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"four","data-number":"4",onClick:this.handleClickNumber},"4"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"five","data-number":"5",onClick:this.handleClickNumber},"5"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"six","data-number":"6",onClick:this.handleClickNumber},"6"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"seven","data-number":"7",onClick:this.handleClickNumber},"7"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"eight","data-number":"8",onClick:this.handleClickNumber},"8"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"nine","data-number":"9",onClick:this.handleClickNumber},"9"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"subtract","data-operator":"-",onClick:this.handleClickOperator},"-"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"add","data-operator":"+",onClick:this.handleClickOperator},"+"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"multiply","data-operator":"x",onClick:this.handleClickOperator},"x"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"divide","data-operator":"/",onClick:this.handleClickOperator},"/"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"decimal",onClick:this.handleClickDecimal},"."),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"clear",onClick:this.handleClickClear},"AC"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1",{id:"formula"},a),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1",{id:"display"},e))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=App},9:function(_,e,a){_.exports=a(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.00235db1.chunk.js.map