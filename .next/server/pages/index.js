"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PaginaInicial)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"@skynexui/components\");\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n\n\n\n\n\n\n\nfunction Title(props) {\n    console.log(props);\n    const Tag = props.Tag || 'h2';\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"4ec05a8fa202cab2\",\n                        [\n                            Tag,\n                            _config_json__WEBPACK_IMPORTED_MODULE_6__.theme.colors.neutrals[500]\n                        ]\n                    ]\n                ]),\n                /*#__PURE__*/ children: props.children\n            }, void 0, false, {\n                fileName: \"D:\\\\my projects\\\\Aluracord\\\\pages\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"4ec05a8fa202cab2\",\n                dynamic: [\n                    Tag,\n                    _config_json__WEBPACK_IMPORTED_MODULE_6__.theme.colors.neutrals[500]\n                ],\n                children: `${Tag}.__jsx-style-dynamic-selector{color:${_config_json__WEBPACK_IMPORTED_MODULE_6__.theme.colors.neutrals[500]}}`\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n// //Componente React\n// function HomePage() {\n//     //Page JSX\n//     return (\n//         <div>\n//             <GlobalStyle />\n//             <Title Tag=\"h2\">Boas vindas de volta</Title>\n//             <h2>Discord - Alura Matrix</h2>\n//         </div>\n//     )\n//   }\n//   export default HomePage\nfunction PaginaInicial() {\n    // const username = 'lucassouzz'\n    const [username, setUsername] = react__WEBPACK_IMPORTED_MODULE_3___default().useState('');\n    const roteamento = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const resp = 'https://api.github.com/users/lucassouzz';\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            styleSheet: {\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'center',\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_6__.theme.colors.primary[500],\n                backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',\n                backgroundRepeat: 'no-repeat',\n                backgroundSize: 'cover',\n                backgroundBlendMode: 'multiply'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'space-between',\n                    flexDirection: {\n                        xs: 'column',\n                        sm: 'row'\n                    },\n                    width: '100%',\n                    maxWidth: '700px',\n                    borderRadius: '5px',\n                    padding: '32px',\n                    margin: '16px',\n                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_6__.theme.colors.neutrals[700]\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        as: \"form\",\n                        //setando a function anonima do evento onsubmit\n                        //e passando o evento como parametro\n                        onSubmit: function(eventSubmit) {\n                            //Edefinindo que o comportamento do submit nao recarregara a página\n                            eventSubmit.preventDefault();\n                            console.log(\"Formul\\xe1rio submetido\");\n                            roteamento.push('/chat');\n                        },\n                        styleSheet: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            alignItems: 'center',\n                            justifyContent: 'center',\n                            width: {\n                                xs: '100%',\n                                sm: '50%'\n                            },\n                            textAlign: 'center',\n                            marginBottom: '32px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                                tag: \"h2\",\n                                children: \"Boas vindas de volta!\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\my projects\\\\Aluracord\\\\pages\\\\index.js\",\n                                lineNumber: 86,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                variant: \"body3\",\n                                styleSheet: {\n                                    marginBottom: '32px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_6__.theme.colors.neutrals[300]\n                                },\n                                children: _config_json__WEBPACK_IMPORTED_MODULE_6__.name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\my projects\\\\Aluracord\\\\pages\\\\index.js\",\n                                lineNumber: 87,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                                value: username,\n                                onChange: function(event) {\n                                    console.log(\"usuario digitou: \", event.target.value);\n                                    //Recebe valor adicionado\n                                    const valor = event.target.value;\n                                    //seta valor na variavel username\n                                    setUsername(valor);\n                                },\n                                fullWidth: true,\n                                textFieldColors: {\n                                    neutral: {\n                                        textColor: _config_json__WEBPACK_IMPORTED_MODULE_6__.theme.colors.neutrals[200],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_6__.theme.colors.neutrals[900],\n                                        mainColorHighlight: _config_json__WEBPACK_IMPORTED_MODULE_6__.theme.colors.primary[500],\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_6__.theme.colors.neutrals[800]\n                                    }\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\my projects\\\\Aluracord\\\\pages\\\\index.js\",\n                                lineNumber: 104,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                type: \"submit\",\n                                label: \"Entrar\",\n                                fullWidth: true,\n                                buttonColors: {\n                                    contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_6__.theme.colors.neutrals[\"000\"],\n                                    mainColor: _config_json__WEBPACK_IMPORTED_MODULE_6__.theme.colors.primary[500],\n                                    mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_6__.theme.colors.primary[400],\n                                    mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_6__.theme.colors.primary[600]\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\my projects\\\\Aluracord\\\\pages\\\\index.js\",\n                                lineNumber: 123,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\my projects\\\\Aluracord\\\\pages\\\\index.js\",\n                        lineNumber: 71,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        styleSheet: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            alignItems: 'center',\n                            maxWidth: '200px',\n                            padding: '16px',\n                            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_6__.theme.colors.neutrals[800],\n                            border: '1px solid',\n                            borderColor: _config_json__WEBPACK_IMPORTED_MODULE_6__.theme.colors.neutrals[999],\n                            borderRadius: '10px',\n                            flex: 1,\n                            minHeight: '240px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                styleSheet: {\n                                    borderRadius: '50%',\n                                    marginBottom: '16px'\n                                },\n                                src: `https://github.com/${username}.png`\n                            }, void 0, false, {\n                                fileName: \"D:\\\\my projects\\\\Aluracord\\\\pages\\\\index.js\",\n                                lineNumber: 154,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                variant: \"body4\",\n                                styleSheet: {\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_6__.theme.colors.neutrals[200],\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_6__.theme.colors.neutrals[900],\n                                    padding: '3px 10px',\n                                    borderRadius: '1000px'\n                                },\n                                children: username\n                            }, void 0, false, {\n                                fileName: \"D:\\\\my projects\\\\Aluracord\\\\pages\\\\index.js\",\n                                lineNumber: 161,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\my projects\\\\Aluracord\\\\pages\\\\index.js\",\n                        lineNumber: 139,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\my projects\\\\Aluracord\\\\pages\\\\index.js\",\n                lineNumber: 55,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\my projects\\\\Aluracord\\\\pages\\\\index.js\",\n            lineNumber: 47,\n            columnNumber: 9\n        }, this)\n    }, void 0, false));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQU07NEJBQ2ZTLGFBQWEsRUFBRSxDQUFROzRCQUN2QlIsVUFBVSxFQUFFLENBQVE7NEJBQ3BCWSxRQUFRLEVBQUUsQ0FBTzs0QkFDakJFLE9BQU8sRUFBRSxDQUFNOzRCQUNmWixlQUFlLEVBQUVwQixvRUFBb0M7NEJBQ3JEK0QsTUFBTSxFQUFFLENBQVc7NEJBQ25CQyxXQUFXLEVBQUVoRSxvRUFBb0M7NEJBQ2pEK0IsWUFBWSxFQUFFLENBQU07NEJBQ3BCa0MsSUFBSSxFQUFFLENBQUM7NEJBQ1BDLFNBQVMsRUFBRSxDQUFPO3dCQUNwQixDQUFDOzt3R0FFQXRFLHVEQUFLO2dDQUNKb0IsVUFBVSxFQUFFLENBQUM7b0NBQ1hlLFlBQVksRUFBRSxDQUFLO29DQUNuQlUsWUFBWSxFQUFFLENBQU07Z0NBQ3RCLENBQUM7Z0NBQ0QwQixHQUFHLEdBQUcsbUJBQW1CLEVBQUV4RCxRQUFRLENBQUMsSUFBSTs7Ozs7O3dHQUV6Q2pCLHNEQUFJO2dDQUNIaUQsT0FBTyxFQUFDLENBQU87Z0NBQ2YzQixVQUFVLEVBQUUsQ0FBQztvQ0FDWDRCLEtBQUssRUFBRTVDLG9FQUFvQztvQ0FDM0NvQixlQUFlLEVBQUVwQixvRUFBb0M7b0NBQ3JEZ0MsT0FBTyxFQUFFLENBQVU7b0NBQ25CRCxZQUFZLEVBQUUsQ0FBUTtnQ0FDeEIsQ0FBQzswQ0FFQXBCLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVGV4dCwgVGV4dEZpZWxkLCBJbWFnZSB9IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4uL2NvbmZpZy5qc29uJ1xyXG5cclxuZnVuY3Rpb24gVGl0bGUocHJvcHMpIHtcclxuICAgIGNvbnNvbGUubG9nKHByb3BzKVxyXG4gICAgY29uc3QgVGFnID0gcHJvcHMuVGFnIHx8ICdoMidcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRhZz57cHJvcHMuY2hpbGRyZW59PC9UYWc+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+IHtgXHJcbiAgICAgICAgJHtUYWd9IHtcclxuICAgICAgICAgICAgY29sb3I6ICR7YXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1snNTAwJ119O1xyXG4gICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuLy8gLy9Db21wb25lbnRlIFJlYWN0XHJcbi8vIGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4vLyAgICAgLy9QYWdlIEpTWFxyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgICAgICA8R2xvYmFsU3R5bGUgLz5cclxuLy8gICAgICAgICAgICAgPFRpdGxlIFRhZz1cImgyXCI+Qm9hcyB2aW5kYXMgZGUgdm9sdGE8L1RpdGxlPlxyXG4vLyAgICAgICAgICAgICA8aDI+RGlzY29yZCAtIEFsdXJhIE1hdHJpeDwvaDI+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICApXHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIGV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdpbmFJbmljaWFsKCkge1xyXG4gICAgLy8gY29uc3QgdXNlcm5hbWUgPSAnbHVjYXNzb3V6eidcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCByb3RlYW1lbnRvID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHJlc3AgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9sdWNhc3NvdXp6J1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKGh0dHBzOi8vdmlydHVhbGJhY2tncm91bmRzLnNpdGUvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDgvdGhlLW1hdHJpeC1kaWdpdGFsLXJhaW4uanBnKScsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJywgYmFja2dyb3VuZEJsZW5kTW9kZTogJ211bHRpcGx5JyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgeHM6ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgc206ICdyb3cnLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgbWF4V2lkdGg6ICc3MDBweCcsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JywgcGFkZGluZzogJzMycHgnLCBtYXJnaW46ICcxNnB4JyxcclxuICAgICAgICAgICAgICBib3hTaGFkb3c6ICcwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMjAlKScsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsvKiBGb3JtdWzDoXJpbyAqL31cclxuICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgIGFzPVwiZm9ybVwiXHJcbiAgICAgICAgICAgICAgLy9zZXRhbmRvIGEgZnVuY3Rpb24gYW5vbmltYSBkbyBldmVudG8gb25zdWJtaXRcclxuICAgICAgICAgICAgICAvL2UgcGFzc2FuZG8gbyBldmVudG8gY29tbyBwYXJhbWV0cm9cclxuICAgICAgICAgICAgICBvblN1Ym1pdD17ZnVuY3Rpb24gKGV2ZW50U3VibWl0KSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vRWRlZmluaW5kbyBxdWUgbyBjb21wb3J0YW1lbnRvIGRvIHN1Ym1pdCBuYW8gcmVjYXJyZWdhcmEgYSBww6FnaW5hXHJcbiAgICAgICAgICAgICAgICAgIGV2ZW50U3VibWl0LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGb3JtdWzDoXJpbyBzdWJtZXRpZG9cIilcclxuICAgICAgICAgICAgICAgICAgcm90ZWFtZW50by5wdXNoKCcvY2hhdCcpXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHsgeHM6ICcxMDAlJywgc206ICc1MCUnIH0sIHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogJzMycHgnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VGl0bGUgdGFnPVwiaDJcIj5Cb2FzIHZpbmRhcyBkZSB2b2x0YSE8L1RpdGxlPlxyXG4gICAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJib2R5M1wiIHN0eWxlU2hlZXQ9e3sgbWFyZ2luQm90dG9tOiAnMzJweCcsIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzMwMF0gfX0+XHJcbiAgICAgICAgICAgICAgICB7YXBwQ29uZmlnLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHsvKiA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAvL01vbml0b3JhciBtdWRhbmNhIG5vIGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGZ1bmN0aW9uIChldmVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1c3VhcmlvIGRpZ2l0b3U6IFwiLCBldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLy9SZWNlYmUgdmFsb3IgYWRpY2lvbmFkb1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbG9yID0gZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgLy9zZXRhIHZhbG9yIG5hIHZhcmlhdmVsIHVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUodmFsb3IpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID48L2lucHV0PiAqL31cclxuXHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBmdW5jdGlvbiAoZXZlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXN1YXJpbyBkaWdpdG91OiBcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVjZWJlIHZhbG9yIGFkaWNpb25hZG9cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxvciA9IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vc2V0YSB2YWxvciBuYSB2YXJpYXZlbCB1c2VybmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKHZhbG9yKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgdGV4dEZpZWxkQ29sb3JzPXt7XHJcbiAgICAgICAgICAgICAgICAgIG5ldXRyYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcclxuICAgICAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTAwXSxcclxuICAgICAgICAgICAgICAgICAgICBtYWluQ29sb3JIaWdobGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgIGxhYmVsPSdFbnRyYXInXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9ycz17e1xyXG4gICAgICAgICAgICAgICAgICBjb250cmFzdENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdLFxyXG4gICAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgICAgICAgICBtYWluQ29sb3JMaWdodDogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzQwMF0sXHJcbiAgICAgICAgICAgICAgICAgIG1haW5Db2xvclN0cm9uZzogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzYwMF0sXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi99XHJcbiAgXHJcbiAgXHJcbiAgICAgICAgICAgIHsvKiBQaG90byBBcmVhICovfVxyXG4gICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMjAwcHgnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTk5XSxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgZmxleDogMSxcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJzI0MHB4JyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3VzZXJuYW1lfS5wbmdgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5NFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnM3B4IDEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMDAwcHgnXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt1c2VybmFtZX1cclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICB7LyogUGhvdG8gQXJlYSAqL31cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJUZXh0IiwiVGV4dEZpZWxkIiwiSW1hZ2UiLCJSZWFjdCIsImF4aW9zIiwidXNlUm91dGVyIiwiYXBwQ29uZmlnIiwiVGl0bGUiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJUYWciLCJ0aGVtZSIsImNvbG9ycyIsIm5ldXRyYWxzIiwiY2hpbGRyZW4iLCJQYWdpbmFJbmljaWFsIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInVzZVN0YXRlIiwicm90ZWFtZW50byIsInJlc3AiLCJzdHlsZVNoZWV0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsInByaW1hcnkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiZmxleERpcmVjdGlvbiIsInhzIiwic20iLCJ3aWR0aCIsIm1heFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsIm1hcmdpbiIsImJveFNoYWRvdyIsImFzIiwib25TdWJtaXQiLCJldmVudFN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsInRhZyIsInZhcmlhbnQiLCJjb2xvciIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWxvciIsImZ1bGxXaWR0aCIsInRleHRGaWVsZENvbG9ycyIsIm5ldXRyYWwiLCJ0ZXh0Q29sb3IiLCJtYWluQ29sb3IiLCJtYWluQ29sb3JIaWdobGlnaHQiLCJ0eXBlIiwibGFiZWwiLCJidXR0b25Db2xvcnMiLCJjb250cmFzdENvbG9yIiwibWFpbkNvbG9yTGlnaHQiLCJtYWluQ29sb3JTdHJvbmciLCJib3JkZXIiLCJib3JkZXJDb2xvciIsImZsZXgiLCJtaW5IZWlnaHQiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@skynexui/components":
/*!***************************************!*\
  !*** external "@skynexui/components" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@skynexui/components");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Aluracord - Matrix","theme":{"colors":{"primary":{"100":"#C1EAC5","200":"#A3D9A5","300":"#7BC47F","400":"#57AE5B","500":"#3F9142","600":"#2F8132","700":"#207227","800":"#0E5814","900":"#05400A","050":"#E3F9E5"},"neutrals":{"100":"#E4E7EB","200":"#CBD2D9","300":"#9AA5B1","400":"#52667A","500":"#313D49","600":"#29333D","700":"#212931","800":"#181F25","900":"#101418","999":"#080A0C","000":"#FFFFFF","050":"#F5F7FA"}}},"stickers":["https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_1.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_2.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_3.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_4.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_5.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_6.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_7.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_8.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_9.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_10.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_11.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_12.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_13.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_14.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_15.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_16.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_17.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_18.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_19.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_20.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_21.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_22.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_23.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_24.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_25.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_26.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_27.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_28.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_29.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_30.png","http://2.bp.blogspot.com/-d21tffsTIQo/U_H9QjC69gI/AAAAAAAAKqM/wnvOyUr6a_I/s1600/Pikachu%2B2.gif","https://media1.giphy.com/media/BdghqxNFV4efm/200.gif","https://c.tenor.com/TKpmh4WFEsAAAAAC/alura-gaveta-filmes.gif","https://i.pinimg.com/originals/0b/1c/23/0b1c2307c83e1ebdeed72e41b9a058ad.gif","https://c.tenor.com/VylWt5lyjBoAAAAC/omg-yes.gif","https://i.pinimg.com/originals/96/34/c5/9634c520c9a3cd4e7f23190bb2c96500.gif"]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();