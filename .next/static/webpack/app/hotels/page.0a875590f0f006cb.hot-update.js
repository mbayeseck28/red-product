"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/hotels/page",{

/***/ "(app-pages-browser)/./src/app/hotels/page.jsx":
/*!*********************************!*\
  !*** ./src/app/hotels/page.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sidebar/Sidebar */ \"(app-pages-browser)/./src/app/components/sidebar/Sidebar.jsx\");\n/* harmony import */ var _components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/navbar/Navbar */ \"(app-pages-browser)/./src/app/components/navbar/Navbar.jsx\");\n/* harmony import */ var _components_reutil_Hotel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/reutil/Hotel */ \"(app-pages-browser)/./src/app/components/reutil/Hotel.jsx\");\n/* harmony import */ var _components_modal_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/modal/Modal */ \"(app-pages-browser)/./src/app/components/modal/Modal.jsx\");\n/* harmony import */ var _components_formulaire_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/formulaire/Form */ \"(app-pages-browser)/./src/app/components/formulaire/Form.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  background-color: white;\\n  box-shadow: 0px 2.6662580966949463px 2.6662580966949463px 0px #00000008;\\n  padding: 1em 4%;\\n  /* min-height: 80px; */\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  padding: 1.5em 3%;\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n  gap: 1em;\\n  flex-wrap: wrap;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-size: 16px;\\n  font-weight: 300;\\n  display: flex;\\n  gap: 10px;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  color: #c3c3c3de;\\n  font-size: 18px;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 80%;\\n\\n  @media only screen and (max-width: 700px) {\\n    width: 100%;\\n  }\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 20%;\\n\\n  @media only screen and (max-width: 700px) {\\n    width: 100%;\\n  }\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  flex-wrap: wrap;\\n  background-color: #f7fafc;\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  padding: 0.5em 1em;\\n  border: 1px solid #aeaeae;\\n  border-radius: 10px;\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n // N'oubliez pas d'importer axios si vous l'utilisez\nconst Page = ()=>{\n    _s();\n    const [hotel, setHotel] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const fetchHotels = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"http://localhost:4000/api/hotels\");\n            const hotelsAvecQuantiteProd = response.data.map((hotel)=>({\n                    ...hotel\n                }));\n            setHotel(hotelsAvecQuantiteProd);\n        } catch (error) {\n            console.error(\"Erreur lors de la r\\xe9cup\\xe9ration des hotels:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchHotels();\n    }, [\n        hotel\n    ]);\n    const toggleModal = ()=>{\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Gauche, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\hotels\\\\page.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\hotels\\\\page.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Centre, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            title: \"Liste des h\\xf4tels\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\hotels\\\\page.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Wrapper, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Titre, {\n                                    children: [\n                                        \"H\\xf4tels\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Length, {\n                                            children: hotel.length\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\hotels\\\\page.jsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\hotels\\\\page.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Bouton, {\n                                    onClick: toggleModal,\n                                    children: \"Cr\\xe9er un nouveau hotel\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\hotels\\\\page.jsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_modal_Modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    isOpen: isOpen,\n                                    onClose: toggleModal,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_formulaire_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\hotels\\\\page.jsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\hotels\\\\page.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\hotels\\\\page.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\hotels\\\\page.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\hotels\\\\page.jsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\hotels\\\\page.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"IU0hFCrVk+WwAG+pFPMDh9Z3beQ=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject());\n_c1 = Wrapper;\nconst Hotels = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject1());\nconst Titre = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].h2(_templateObject2());\n_c2 = Titre;\nconst Length = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].h2(_templateObject3());\n_c3 = Length;\nconst Centre = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject4());\n_c4 = Centre;\nconst Gauche = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject5());\n_c5 = Gauche;\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject6());\n_c6 = Container;\nconst Bouton = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].button(_templateObject7());\n_c7 = Bouton;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;\n$RefreshReg$(_c, \"Page\");\n$RefreshReg$(_c1, \"Wrapper\");\n$RefreshReg$(_c2, \"Titre\");\n$RefreshReg$(_c3, \"Length\");\n$RefreshReg$(_c4, \"Centre\");\n$RefreshReg$(_c5, \"Gauche\");\n$RefreshReg$(_c6, \"Container\");\n$RefreshReg$(_c7, \"Bouton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaG90ZWxzL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN1QztBQUNZO0FBQ0M7QUFDSDtBQUNGO0FBQ0Q7QUFDRztBQUN2QixDQUFDLG9EQUFvRDtBQUUvRSxNQUFNVSxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNVLFFBQVFDLFVBQVUsR0FBR1gsK0NBQVFBLENBQUM7SUFFckMsTUFBTVksY0FBYztRQUNsQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNUCw2Q0FBS0EsQ0FBQ1EsR0FBRyxDQUFDO1lBQ2pDLE1BQU1DLHlCQUF5QkYsU0FBU0csSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ1QsUUFBVztvQkFDM0QsR0FBR0EsS0FBSztnQkFDVjtZQUNBQyxTQUFTTTtRQUNYLEVBQUUsT0FBT0csT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsb0RBQThDQTtRQUM5RDtJQUNGO0lBRUFuQixnREFBU0EsQ0FBQztRQUNSYTtJQUNGLEdBQUc7UUFBQ0o7S0FBTTtJQUVWLE1BQU1ZLGNBQWM7UUFDbEJULFVBQVUsQ0FBQ0Q7SUFDYjtJQUVBLHFCQUNFLDhEQUFDVztrQkFDQyw0RUFBQ0M7OzhCQUNDLDhEQUFDQzs4QkFDQyw0RUFBQ3RCLG1FQUFPQTs7Ozs7Ozs7Ozs4QkFFViw4REFBQ3VCOztzQ0FDQyw4REFBQ3RCLGlFQUFNQTs0QkFBQ3VCLE9BQU07Ozs7OztzQ0FDZCw4REFBQ0M7OzhDQUNDLDhEQUFDQzs7d0NBQU07c0RBRUwsOERBQUNDO3NEQUFRcEIsTUFBTXFCLE1BQU07Ozs7Ozs7Ozs7Ozs4Q0FFdkIsOERBQUNDO29DQUFPQyxTQUFTWDs4Q0FBYTs7Ozs7OzhDQUM5Qiw4REFBQ2hCLCtEQUFLQTtvQ0FBQ00sUUFBUUE7b0NBQVFzQixTQUFTWjs4Q0FDOUIsNEVBQUNmLG1FQUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JuQjtHQTNETUU7S0FBQUE7QUE2RE4sK0RBQWVBLElBQUlBLEVBQUM7QUFFcEIsTUFBTW1CLFVBQVU3Qix5REFBTUEsQ0FBQ29DLEdBQUc7TUFBcEJQO0FBVU4sTUFBTVEsU0FBU3JDLHlEQUFNQSxDQUFDb0MsR0FBRztBQVF6QixNQUFNTixRQUFROUIseURBQU1BLENBQUNzQyxFQUFFO01BQWpCUjtBQU9OLE1BQU1DLFNBQVMvQix5REFBTUEsQ0FBQ3NDLEVBQUU7TUFBbEJQO0FBS04sTUFBTUosU0FBUzNCLHlEQUFNQSxDQUFDb0MsR0FBRztNQUFuQlQ7QUFPTixNQUFNRCxTQUFTMUIseURBQU1BLENBQUNvQyxHQUFHO01BQW5CVjtBQVFOLE1BQU1ELFlBQVl6Qix5REFBTUEsQ0FBQ29DLEdBQUc7TUFBdEJYO0FBS04sTUFBTVEsU0FBU2pDLHlEQUFNQSxDQUFDdUMsTUFBTTtNQUF0Qk4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ob3RlbHMvcGFnZS5qc3g/MWRkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2lkZWJhci9TaWRlYmFyXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyL05hdmJhclwiO1xyXG5pbXBvcnQgSG90ZWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvcmV1dGlsL0hvdGVsXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2RhbC9Nb2RhbFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3JtdWxhaXJlL0Zvcm1cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiOyAvLyBOJ291YmxpZXogcGFzIGQnaW1wb3J0ZXIgYXhpb3Mgc2kgdm91cyBsJ3V0aWxpc2V6XHJcblxyXG5jb25zdCBQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtob3RlbCwgc2V0SG90ZWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hIb3RlbHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvaG90ZWxzXCIpO1xyXG4gICAgICBjb25zdCBob3RlbHNBdmVjUXVhbnRpdGVQcm9kID0gcmVzcG9uc2UuZGF0YS5tYXAoKGhvdGVsKSA9PiAoe1xyXG4gICAgICAgIC4uLmhvdGVsLFxyXG4gICAgICB9KSk7XHJcbiAgICAgIHNldEhvdGVsKGhvdGVsc0F2ZWNRdWFudGl0ZVByb2QpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBsb3JzIGRlIGxhIHLDqWN1cMOpcmF0aW9uIGRlcyBob3RlbHM6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hIb3RlbHMoKTtcclxuICB9LCBbaG90ZWxdKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc09wZW4oIWlzT3Blbik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxHYXVjaGU+XHJcbiAgICAgICAgICA8U2lkZWJhciAvPlxyXG4gICAgICAgIDwvR2F1Y2hlPlxyXG4gICAgICAgIDxDZW50cmU+XHJcbiAgICAgICAgICA8TmF2YmFyIHRpdGxlPVwiTGlzdGUgZGVzIGjDtHRlbHNcIiAvPlxyXG4gICAgICAgICAgPFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxUaXRyZT5cclxuICAgICAgICAgICAgICBIw7R0ZWxzXHJcbiAgICAgICAgICAgICAgPExlbmd0aD57aG90ZWwubGVuZ3RofTwvTGVuZ3RoPlxyXG4gICAgICAgICAgICA8L1RpdHJlPlxyXG4gICAgICAgICAgICA8Qm91dG9uIG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfT5DcsOpZXIgdW4gbm91dmVhdSBob3RlbDwvQm91dG9uPlxyXG4gICAgICAgICAgICA8TW9kYWwgaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9e3RvZ2dsZU1vZGFsfT5cclxuICAgICAgICAgICAgICA8Rm9ybSAvPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgPC9XcmFwcGVyPlxyXG4gICAgICAgICAgey8qIDxIb3RlbHM+XHJcbiAgICAgICAgICAgIHtob3RlbCAmJlxyXG4gICAgICAgICAgICAgIGhvdGVsLm1hcCgob2JqLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEhvdGVsXHJcbiAgICAgICAgICAgICAgICAgIG5vbUhvdGVsPXtvYmoubm9tfVxyXG4gICAgICAgICAgICAgICAgICBhZHJlc3NlPXtvYmouYWRyZXNzZX1cclxuICAgICAgICAgICAgICAgICAgcHJpeD17b2JqLnByaXh9XHJcbiAgICAgICAgICAgICAgICAgIGltYWdlPXtvYmouaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGRldmlzZT17b2JqLmRldmlzZX1cclxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0hvdGVscz4gKi99XHJcbiAgICAgICAgPC9DZW50cmU+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDIuNjY2MjU4MDk2Njk0OTQ2M3B4IDIuNjY2MjU4MDk2Njk0OTQ2M3B4IDBweCAjMDAwMDAwMDg7XHJcbiAgcGFkZGluZzogMWVtIDQlO1xyXG4gIC8qIG1pbi1oZWlnaHQ6IDgwcHg7ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IEhvdGVscyA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMS41ZW0gMyU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDFlbTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbmA7XHJcbmNvbnN0IFRpdHJlID0gc3R5bGVkLmgyYFxyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcbmNvbnN0IExlbmd0aCA9IHN0eWxlZC5oMmBcclxuICBjb2xvcjogI2MzYzNjM2RlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuYDtcclxuXHJcbmNvbnN0IENlbnRyZSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDgwJTtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBHYXVjaGUgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAyMCU7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZmFmYztcclxuYDtcclxuY29uc3QgQm91dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBwYWRkaW5nOiAwLjVlbSAxZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2FlYWVhZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5gO1xyXG4iXSwibmFtZXMiOlsic3R5bGVkIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNpZGViYXIiLCJOYXZiYXIiLCJIb3RlbCIsIk1vZGFsIiwiRm9ybSIsImF4aW9zIiwiUGFnZSIsImhvdGVsIiwic2V0SG90ZWwiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJmZXRjaEhvdGVscyIsInJlc3BvbnNlIiwiZ2V0IiwiaG90ZWxzQXZlY1F1YW50aXRlUHJvZCIsImRhdGEiLCJtYXAiLCJlcnJvciIsImNvbnNvbGUiLCJ0b2dnbGVNb2RhbCIsIm1haW4iLCJDb250YWluZXIiLCJHYXVjaGUiLCJDZW50cmUiLCJ0aXRsZSIsIldyYXBwZXIiLCJUaXRyZSIsIkxlbmd0aCIsImxlbmd0aCIsIkJvdXRvbiIsIm9uQ2xpY2siLCJvbkNsb3NlIiwiZGl2IiwiSG90ZWxzIiwiaDIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/hotels/page.jsx\n"));

/***/ })

});