(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1106:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(380).configure)([__webpack_require__(1107),__webpack_require__(1150)],module,!1)}).call(this,__webpack_require__(110)(module))},1107:function(module,exports,__webpack_require__){var map={"./atoms/src/button/Button.stories.js":1155,"./molecules/src/Header/Header.stories.js":222,"./molecules/src/Page/Page.stories.js":1156};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1107},1144:function(module,exports,__webpack_require__){var api=__webpack_require__(332),content=__webpack_require__(1145);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1145:function(module,exports,__webpack_require__){(exports=__webpack_require__(333)(!1)).push([module.i,".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n",""]),module.exports=exports},1146:function(module,exports,__webpack_require__){var api=__webpack_require__(332),content=__webpack_require__(1147);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1147:function(module,exports,__webpack_require__){(exports=__webpack_require__(333)(!1)).push([module.i,".wrapper {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nsvg {\n  display: inline-block;\n  vertical-align: top;\n}\n\nh1 {\n  font-weight: 900;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\nbutton + button {\n  margin-left: 10px;\n}\n",""]),module.exports=exports},1148:function(module,exports,__webpack_require__){var api=__webpack_require__(332),content=__webpack_require__(1149);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1149:function(module,exports,__webpack_require__){(exports=__webpack_require__(333)(!1)).push([module.i,"section {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 24px;\n  padding: 48px 20px;\n  margin: 0 auto;\n  max-width: 600px;\n  color: #333;\n}\n\nh2 {\n  font-weight: 900;\n  font-size: 32px;\n  line-height: 1;\n  margin: 0 0 4px;\n  display: inline-block;\n  vertical-align: top;\n}\n\np {\n  margin: 1em 0;\n}\n\na {\n  text-decoration: none;\n  color: #1ea7fd;\n}\n\nul {\n  padding-left: 30px;\n  margin: 1em 0;\n}\n\nli {\n  margin-bottom: 8px;\n}\n\n.tip {\n  display: inline-block;\n  border-radius: 1em;\n  font-size: 11px;\n  line-height: 12px;\n  font-weight: 700;\n  background: #e7fdd8;\n  color: #66bf3c;\n  padding: 4px 12px;\n  margin-right: 10px;\n  vertical-align: top;\n}\n\n.tip-wrapper {\n  font-size: 13px;\n  line-height: 20px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.tip-wrapper svg {\n  display: inline-block;\n  height: 12px;\n  width: 12px;\n  margin-right: 4px;\n  vertical-align: top;\n  margin-top: 3px;\n}\n\n.tip-wrapper svg path {\n  fill: #1ea7fd;\n}\n",""]),module.exports=exports},1150:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1150},1155:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__(148),__webpack_require__(3);var jsx_runtime=__webpack_require__(24),prop_types=(__webpack_require__(0),__webpack_require__(1109),__webpack_require__(20),__webpack_require__(39),__webpack_require__(8),__webpack_require__(1)),prop_types_default=__webpack_require__.n(prop_types);__webpack_require__(1144);function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Button_Button=function Button(_ref){var primary=_ref.primary,backgroundColor=_ref.backgroundColor,size=_ref.size,label=_ref.label,props=_objectWithoutProperties(_ref,["primary","backgroundColor","size","label"]),mode=primary?"storybook-button--primary":"storybook-button--secondary";return Object(jsx_runtime.jsx)("button",Object.assign({type:"button",className:["storybook-button","storybook-button--".concat(size),mode].join(" "),style:backgroundColor&&{backgroundColor:backgroundColor}},props,{children:label}))};Button_Button.displayName="Button",Button_Button.propTypes={primary:prop_types_default.a.bool,backgroundColor:prop_types_default.a.string,size:prop_types_default.a.oneOf(["small","medium","large"]),label:prop_types_default.a.string.isRequired,onClick:prop_types_default.a.func},Button_Button.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0},Button_Button.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:"What background color to use"},primary:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Is this the principal call to action on the page?"},size:{defaultValue:{value:"'medium'",computed:!1},type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1,description:"How large should the button be?"},onClick:{defaultValue:{value:"undefined",computed:!0},type:{name:"func"},required:!1,description:"Optional click handler"},label:{type:{name:"string"},required:!0,description:"Button contents"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/atoms/src/button/Button.js"]={name:"Button",docgenInfo:Button_Button.__docgenInfo,path:"packages/atoms/src/button/Button.js"});__webpack_exports__.default={title:"Component/Button",component:Button_Button};var Button_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Button_Button,Object.assign({},args))};Button_stories_Template.displayName="Template";var Primary=Button_stories_Template.bind({});Primary.args={primary:!0,label:"button"},Primary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Primary.parameters)},1156:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoggedIn",(function(){return LoggedIn})),__webpack_require__.d(__webpack_exports__,"LoggedOut",(function(){return LoggedOut}));__webpack_require__(148),__webpack_require__(3);var jsx_runtime=__webpack_require__(24),prop_types=(__webpack_require__(0),__webpack_require__(1)),prop_types_default=__webpack_require__.n(prop_types),Header=__webpack_require__(163),Page_Page=(__webpack_require__(1148),function Page(_ref){var user=_ref.user,onLogin=_ref.onLogin,onLogout=_ref.onLogout,onCreateAccount=_ref.onCreateAccount;return Object(jsx_runtime.jsxs)("article",{children:[Object(jsx_runtime.jsx)(Header.a,{user:user,onLogin:onLogin,onLogout:onLogout,onCreateAccount:onCreateAccount}),Object(jsx_runtime.jsxs)("section",{children:[Object(jsx_runtime.jsx)("h2",{children:"Pages in Storybook"}),Object(jsx_runtime.jsxs)("p",{children:["We recommend building UIs with a"," ",Object(jsx_runtime.jsx)("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer",children:Object(jsx_runtime.jsx)("strong",{children:"component-driven"})})," ","process starting with atomic components and ending with pages."]}),Object(jsx_runtime.jsx)("p",{children:"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"}),Object(jsx_runtime.jsxs)("ul",{children:[Object(jsx_runtime.jsx)("li",{children:'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'}),Object(jsx_runtime.jsx)("li",{children:"Assemble data in the page component from your services. You can mock these services out using Storybook."})]}),Object(jsx_runtime.jsxs)("p",{children:["Get a guided tutorial on component-driven development at"," ",Object(jsx_runtime.jsx)("a",{href:"https://www.learnstorybook.com",target:"_blank",rel:"noopener noreferrer",children:"Learn Storybook"}),". Read more in the"," ",Object(jsx_runtime.jsx)("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer",children:"docs"}),"."]}),Object(jsx_runtime.jsxs)("div",{className:"tip-wrapper",children:[Object(jsx_runtime.jsx)("span",{className:"tip",children:"Tip"})," Adjust the width of the canvas with the"," ",Object(jsx_runtime.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:Object(jsx_runtime.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(jsx_runtime.jsx)("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"})})}),"Viewports addon in the toolbar"]})]})]})});Page_Page.displayName="Page",Page_Page.propTypes={user:prop_types_default.a.shape({}),onLogin:prop_types_default.a.func.isRequired,onLogout:prop_types_default.a.func.isRequired,onCreateAccount:prop_types_default.a.func.isRequired},Page_Page.defaultProps={user:null},Page_Page.__docgenInfo={description:"",methods:[],displayName:"Page",props:{user:{defaultValue:{value:"null",computed:!1},type:{name:"shape",value:{}},required:!1,description:""},onLogin:{type:{name:"func"},required:!0,description:""},onLogout:{type:{name:"func"},required:!0,description:""},onCreateAccount:{type:{name:"func"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/molecules/src/Page/Page.js"]={name:"Page",docgenInfo:Page_Page.__docgenInfo,path:"packages/molecules/src/Page/Page.js"});var Header_stories=__webpack_require__(222),Page_stories_Template=(__webpack_exports__.default={title:"Example/Page",component:Page_Page,parameters:{actions:{argTypesRegex:"^on.*"}}},function Template(args){return Object(jsx_runtime.jsx)(Page_Page,Object.assign({},args))});Page_stories_Template.displayName="Template";var LoggedIn=Page_stories_Template.bind({});LoggedIn.args=Object.assign({},Header_stories.LoggedIn.args);var LoggedOut=Page_stories_Template.bind({});LoggedOut.args=Object.assign({},Header_stories.LoggedOut.args),LoggedIn.parameters=Object.assign({storySource:{source:"(args) => <Page {...args} />"}},LoggedIn.parameters),LoggedOut.parameters=Object.assign({storySource:{source:"(args) => <Page {...args} />"}},LoggedOut.parameters)},163:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Header}));var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(24),prop_types__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(1)),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),Header=(__webpack_require__(1146),function Header(_ref){_ref.user,_ref.onLogin,_ref.onLogout,_ref.onCreateAccount;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("header",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"wrapper",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{children:"Acme"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{children:" Header Component "})})]})})});Header.displayName="Header",Header.propTypes={user:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({}),onLogin:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,onLogout:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,onCreateAccount:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired},Header.defaultProps={user:null},Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{user:{defaultValue:{value:"null",computed:!1},type:{name:"shape",value:{}},required:!1,description:""},onLogin:{type:{name:"func"},required:!0,description:""},onLogout:{type:{name:"func"},required:!0,description:""},onCreateAccount:{type:{name:"func"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/molecules/src/Header/Header.js"]={name:"Header",docgenInfo:Header.__docgenInfo,path:"packages/molecules/src/Header/Header.js"})},222:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoggedIn",(function(){return LoggedIn})),__webpack_require__.d(__webpack_exports__,"LoggedOut",(function(){return LoggedOut}));__webpack_require__(148),__webpack_require__(3);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(24),_Header__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__(0),__webpack_require__(163));__webpack_exports__.default={title:"Example/Header",component:_Header__WEBPACK_IMPORTED_MODULE_4__.a,parameters:{actions:{argTypesRegex:"^on.*"}}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({},args))};Template.displayName="Template";var LoggedIn=Template.bind({});LoggedIn.args={user:{}};var LoggedOut=Template.bind({});LoggedOut.args={},LoggedIn.parameters=Object.assign({storySource:{source:"(args) => <Header {...args} />"}},LoggedIn.parameters),LoggedOut.parameters=Object.assign({storySource:{source:"(args) => <Header {...args} />"}},LoggedOut.parameters)},507:function(module,exports,__webpack_require__){__webpack_require__(508),__webpack_require__(671),__webpack_require__(672),__webpack_require__(830),__webpack_require__(1047),__webpack_require__(1080),__webpack_require__(1085),__webpack_require__(1097),__webpack_require__(1099),__webpack_require__(1104),module.exports=__webpack_require__(1106)},579:function(module,exports){},672:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(380)}},[[507,1,2]]]);
//# sourceMappingURL=main.b24d2ea502aa31c0290a.bundle.js.map