"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/app/dashboard/page.jsx":
/*!************************************!*\
  !*** ./src/app/dashboard/page.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sidebar/Sidebar */ \"(app-pages-browser)/./src/app/components/sidebar/Sidebar.jsx\");\n/* harmony import */ var _components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/navbar/Navbar */ \"(app-pages-browser)/./src/app/components/navbar/Navbar.jsx\");\n/* harmony import */ var _components_reutil_Carte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/reutil/Carte */ \"(app-pages-browser)/./src/app/components/reutil/Carte.jsx\");\n/* harmony import */ var _barrel_optimize_names_FaEnvelopeOpen_react_icons_fa6__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=FaEnvelopeOpen!=!react-icons/fa6 */ \"(app-pages-browser)/./node_modules/react-icons/fa6/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  background-color: white;\\n  box-shadow: 0px 2.6662580966949463px 2.6662580966949463px 0px #00000008;\\n  padding: 1em 4%;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-size: 13px;\\n  font-weight: 400;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-size: 18px;\\n  font-weight: 300;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  padding: 1.5em 3%;\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n  gap: 1em;\\n  flex-wrap: wrap;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 80%;\\n\\n  @media only screen and (max-width: 700px) {\\n    width: 100%;\\n  }\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 20%;\\n\\n  @media only screen and (max-width: 700px) {\\n    width: 100%;\\n  }\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  flex-wrap: wrap;\\n  background-color: #f7fafc;\\n  height: 100vh;\\n  @media only screen and (max-width: 700px) {\\n    margin-top: 50px;\\n  }\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject());\n_c = Wrapper;\nconst Small = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].p(_templateObject1());\n_c1 = Small;\nconst Titre = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].h2(_templateObject2());\n_c2 = Titre;\nconst Cartes = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject3());\n_c3 = Cartes;\nconst Centre = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject4());\n_c4 = Centre;\nconst Gauche = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject5());\n_c5 = Gauche;\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject6());\n_c6 = Container;\nconst Page = ()=>{\n    _s();\n    const [hotel, setHotel] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const token = localStorage.getItem(\"token\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const fetchHotels = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"http://localhost:4000/api/hotels\");\n            const hotels = response.data.map((hotel)=>({\n                    ...hotel\n                }));\n            setHotel(hotels);\n        } catch (error) {\n            console.error(\"Erreur lors de la r\\xe9cup\\xe9ration des hotels:\", error);\n        }\n    };\n    const fetchUsers = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"http://localhost:4000/api/auth/profiles\");\n            const profiles = response.data.map((profil)=>({\n                    ...profil\n                }));\n            setUser(profiles);\n        } catch (error) {\n            console.error(\"Erreur lors de la r\\xe9cup\\xe9ration des utilisateurs:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchHotels();\n        fetchUsers();\n    }, []);\n    const datas = [\n        {\n            color: \"#a88add\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_FaEnvelopeOpen_react_icons_fa6__WEBPACK_IMPORTED_MODULE_9__.FaEnvelopeOpen, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                lineNumber: 100,\n                columnNumber: 13\n            }, undefined),\n            nombre: 125,\n            titre: \"Formulaires\"\n        },\n        {\n            color: \"#0CC2AA\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_FaEnvelopeOpen_react_icons_fa6__WEBPACK_IMPORTED_MODULE_9__.FaEnvelopeOpen, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                lineNumber: 106,\n                columnNumber: 13\n            }, undefined),\n            nombre: 40,\n            titre: \"Messages \"\n        },\n        {\n            color: \"#FCC100\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_FaEnvelopeOpen_react_icons_fa6__WEBPACK_IMPORTED_MODULE_9__.FaEnvelopeOpen, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                lineNumber: 112,\n                columnNumber: 13\n            }, undefined),\n            nombre: user.length,\n            titre: \"Utilisateurs \"\n        },\n        {\n            color: \"#F90000\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_FaEnvelopeOpen_react_icons_fa6__WEBPACK_IMPORTED_MODULE_9__.FaEnvelopeOpen, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                lineNumber: 118,\n                columnNumber: 13\n            }, undefined),\n            nombre: 25,\n            titre: \"E-mails\"\n        },\n        {\n            color: \"#9C27B0\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_FaEnvelopeOpen_react_icons_fa6__WEBPACK_IMPORTED_MODULE_9__.FaEnvelopeOpen, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                lineNumber: 124,\n                columnNumber: 13\n            }, undefined),\n            nombre: hotel.length,\n            titre: \"H\\xf4tels\"\n        },\n        {\n            color: \"#1565C0\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_FaEnvelopeOpen_react_icons_fa6__WEBPACK_IMPORTED_MODULE_9__.FaEnvelopeOpen, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                lineNumber: 130,\n                columnNumber: 13\n            }, undefined),\n            nombre: 2,\n            titre: \"Entit\\xe9s\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        children: token ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Gauche, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                        lineNumber: 141,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                    lineNumber: 140,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Centre, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            title: \"Dashboard\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 144,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Wrapper, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Titre, {\n                                    children: \"Bienvenue sur RED Product\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 146,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Small, {\n                                    children: [\n                                        \" \",\n                                        \"La Solution de Gestion H\\xf4teli\\xe8re Ultime pour les Entreprises de R\\xe9servation\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 147,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 145,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Cartes, {\n                            children: datas.map((obj, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_reutil_Carte__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    icon: obj.icon,\n                                    color: obj.color,\n                                    nombre: obj === null || obj === void 0 ? void 0 : obj.nombre,\n                                    titre: obj === null || obj === void 0 ? void 0 : obj.titre\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 155,\n                                    columnNumber: 17\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 153,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                    lineNumber: 143,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n            lineNumber: 139,\n            columnNumber: 9\n        }, undefined) : router.push(\"/connexion\")\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\Stage\\\\RedTeam\\\\projets-individuel\\\\projet1-GestionHotel\\\\red-product\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n        lineNumber: 137,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"iCLrmQI7l/HMbh0uyUpsFGbwzXQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c7 = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c1, \"Small\");\n$RefreshReg$(_c2, \"Titre\");\n$RefreshReg$(_c3, \"Cartes\");\n$RefreshReg$(_c4, \"Centre\");\n$RefreshReg$(_c5, \"Gauche\");\n$RefreshReg$(_c6, \"Container\");\n$RefreshReg$(_c7, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN1QztBQUNZO0FBQ0M7QUFDSDtBQUNGO0FBQ0U7QUFDdkI7QUFDa0I7QUFFNUMsTUFBTVUsVUFBVVYseURBQU1BLENBQUNXLEdBQUc7S0FBcEJEO0FBTU4sTUFBTUUsUUFBUVoseURBQU1BLENBQUNhLENBQUM7TUFBaEJEO0FBSU4sTUFBTUUsUUFBUWQseURBQU1BLENBQUNlLEVBQUU7TUFBakJEO0FBS04sTUFBTUUsU0FBU2hCLHlEQUFNQSxDQUFDVyxHQUFHO01BQW5CSztBQVFOLE1BQU1DLFNBQVNqQix5REFBTUEsQ0FBQ1csR0FBRztNQUFuQk07QUFRTixNQUFNQyxTQUFTbEIseURBQU1BLENBQUNXLEdBQUc7TUFBbkJPO0FBUU4sTUFBTUMsWUFBWW5CLHlEQUFNQSxDQUFDVyxHQUFHO01BQXRCUTtBQVVOLE1BQU1DLE9BQU87O0lBQ1gsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNvQixNQUFNQyxRQUFRLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNc0IsUUFBUUMsYUFBYUMsT0FBTyxDQUFDO0lBQ25DLE1BQU1DLFNBQVNuQiwwREFBU0E7SUFFeEIsTUFBTW9CLGNBQWM7UUFDbEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTXRCLDZDQUFLQSxDQUFDdUIsR0FBRyxDQUFDO1lBQ2pDLE1BQU1DLFNBQVNGLFNBQVNHLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNiLFFBQVc7b0JBQzNDLEdBQUdBLEtBQUs7Z0JBQ1Y7WUFDQUMsU0FBU1U7UUFDWCxFQUFFLE9BQU9HLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLG9EQUE4Q0E7UUFDOUQ7SUFDRjtJQUVBLE1BQU1FLGFBQWE7UUFDakIsSUFBSTtZQUNGLE1BQU1QLFdBQVcsTUFBTXRCLDZDQUFLQSxDQUFDdUIsR0FBRyxDQUM5QjtZQUVGLE1BQU1PLFdBQVdSLFNBQVNHLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNLLFNBQVk7b0JBQzlDLEdBQUdBLE1BQU07Z0JBQ1g7WUFDQWYsUUFBUWM7UUFDVixFQUFFLE9BQU9ILE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLDBEQUFvREE7UUFDcEU7SUFDRjtJQUVBakMsZ0RBQVNBLENBQUM7UUFDUjJCO1FBQ0FRO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUcsUUFBUTtRQUNaO1lBQ0VDLE9BQU87WUFDUEMsb0JBQU0sOERBQUNuQyxpR0FBY0E7Ozs7O1lBQ3JCb0MsUUFBUTtZQUNSQyxPQUFPO1FBQ1Q7UUFDQTtZQUNFSCxPQUFPO1lBQ1BDLG9CQUFNLDhEQUFDbkMsaUdBQWNBOzs7OztZQUNyQm9DLFFBQVE7WUFDUkMsT0FBTztRQUNUO1FBQ0E7WUFDRUgsT0FBTztZQUNQQyxvQkFBTSw4REFBQ25DLGlHQUFjQTs7Ozs7WUFDckJvQyxRQUFRcEIsS0FBS3NCLE1BQU07WUFDbkJELE9BQU87UUFDVDtRQUNBO1lBQ0VILE9BQU87WUFDUEMsb0JBQU0sOERBQUNuQyxpR0FBY0E7Ozs7O1lBQ3JCb0MsUUFBUTtZQUNSQyxPQUFPO1FBQ1Q7UUFDQTtZQUNFSCxPQUFPO1lBQ1BDLG9CQUFNLDhEQUFDbkMsaUdBQWNBOzs7OztZQUNyQm9DLFFBQVF0QixNQUFNd0IsTUFBTTtZQUNwQkQsT0FBTztRQUNUO1FBQ0E7WUFDRUgsT0FBTztZQUNQQyxvQkFBTSw4REFBQ25DLGlHQUFjQTs7Ozs7WUFDckJvQyxRQUFRO1lBQ1JDLE9BQU87UUFDVDtLQUNEO0lBRUQscUJBQ0UsOERBQUNFO2tCQUNFckIsc0JBQ0MsOERBQUNOOzs4QkFDQyw4REFBQ0Q7OEJBQ0MsNEVBQUNkLG1FQUFPQTs7Ozs7Ozs7Ozs4QkFFViw4REFBQ2E7O3NDQUNDLDhEQUFDWixpRUFBTUE7NEJBQUMwQyxPQUFNOzs7Ozs7c0NBQ2QsOERBQUNyQzs7OENBQ0MsOERBQUNJOzhDQUFNOzs7Ozs7OENBQ1AsOERBQUNGOzt3Q0FDRTt3Q0FBSTs7Ozs7Ozs7Ozs7OztzQ0FLVCw4REFBQ0k7c0NBQ0V3QixNQUFNTixHQUFHLENBQUMsQ0FBQ2MsS0FBS0Msc0JBQ2YsOERBQUMzQyxnRUFBS0E7b0NBQ0pvQyxNQUFNTSxJQUFJTixJQUFJO29DQUNkRCxPQUFPTyxJQUFJUCxLQUFLO29DQUVoQkUsTUFBTSxFQUFFSyxnQkFBQUEsMEJBQUFBLElBQUtMLE1BQU07b0NBQ25CQyxLQUFLLEVBQUVJLGdCQUFBQSwwQkFBQUEsSUFBS0osS0FBSzttQ0FGWks7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFTZnJCLE9BQU9zQixJQUFJLENBQUM7Ozs7OztBQUlwQjtHQS9HTTlCOztRQUlXWCxzREFBU0E7OztNQUpwQlc7QUFpSE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9kYXNoYm9hcmQvcGFnZS5qc3g/MTUyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2lkZWJhci9TaWRlYmFyXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyL05hdmJhclwiO1xyXG5pbXBvcnQgQ2FydGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvcmV1dGlsL0NhcnRlXCI7XHJcbmltcG9ydCB7IEZhRW52ZWxvcGVPcGVuIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhNlwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDBweCAyLjY2NjI1ODA5NjY5NDk0NjNweCAyLjY2NjI1ODA5NjY5NDk0NjNweCAwcHggIzAwMDAwMDA4O1xyXG4gIHBhZGRpbmc6IDFlbSA0JTtcclxuYDtcclxuXHJcbmNvbnN0IFNtYWxsID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbmA7XHJcbmNvbnN0IFRpdHJlID0gc3R5bGVkLmgyYFxyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG5gO1xyXG5cclxuY29uc3QgQ2FydGVzID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxLjVlbSAzJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMWVtO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuYDtcclxuY29uc3QgQ2VudHJlID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogODAlO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBHYXVjaGUgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAyMCU7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZmFmYztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbaG90ZWwsIHNldEhvdGVsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hIb3RlbHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvaG90ZWxzXCIpO1xyXG4gICAgICBjb25zdCBob3RlbHMgPSByZXNwb25zZS5kYXRhLm1hcCgoaG90ZWwpID0+ICh7XHJcbiAgICAgICAgLi4uaG90ZWwsXHJcbiAgICAgIH0pKTtcclxuICAgICAgc2V0SG90ZWwoaG90ZWxzKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsYSByw6ljdXDDqXJhdGlvbiBkZXMgaG90ZWxzOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hVc2VycyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS9hdXRoL3Byb2ZpbGVzXCJcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgcHJvZmlsZXMgPSByZXNwb25zZS5kYXRhLm1hcCgocHJvZmlsKSA9PiAoe1xyXG4gICAgICAgIC4uLnByb2ZpbCxcclxuICAgICAgfSkpO1xyXG4gICAgICBzZXRVc2VyKHByb2ZpbGVzKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsYSByw6ljdXDDqXJhdGlvbiBkZXMgdXRpbGlzYXRldXJzOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoSG90ZWxzKCk7XHJcbiAgICBmZXRjaFVzZXJzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBkYXRhcyA9IFtcclxuICAgIHtcclxuICAgICAgY29sb3I6IFwiI2E4OGFkZFwiLFxyXG4gICAgICBpY29uOiA8RmFFbnZlbG9wZU9wZW4gLz4sXHJcbiAgICAgIG5vbWJyZTogMTI1LFxyXG4gICAgICB0aXRyZTogXCJGb3JtdWxhaXJlc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29sb3I6IFwiIzBDQzJBQVwiLFxyXG4gICAgICBpY29uOiA8RmFFbnZlbG9wZU9wZW4gLz4sXHJcbiAgICAgIG5vbWJyZTogNDAsXHJcbiAgICAgIHRpdHJlOiBcIk1lc3NhZ2VzIFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29sb3I6IFwiI0ZDQzEwMFwiLFxyXG4gICAgICBpY29uOiA8RmFFbnZlbG9wZU9wZW4gLz4sXHJcbiAgICAgIG5vbWJyZTogdXNlci5sZW5ndGgsXHJcbiAgICAgIHRpdHJlOiBcIlV0aWxpc2F0ZXVycyBcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvbG9yOiBcIiNGOTAwMDBcIixcclxuICAgICAgaWNvbjogPEZhRW52ZWxvcGVPcGVuIC8+LFxyXG4gICAgICBub21icmU6IDI1LFxyXG4gICAgICB0aXRyZTogXCJFLW1haWxzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2xvcjogXCIjOUMyN0IwXCIsXHJcbiAgICAgIGljb246IDxGYUVudmVsb3BlT3BlbiAvPixcclxuICAgICAgbm9tYnJlOiBob3RlbC5sZW5ndGgsXHJcbiAgICAgIHRpdHJlOiBcIkjDtHRlbHNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvbG9yOiBcIiMxNTY1QzBcIixcclxuICAgICAgaWNvbjogPEZhRW52ZWxvcGVPcGVuIC8+LFxyXG4gICAgICBub21icmU6IDIsXHJcbiAgICAgIHRpdHJlOiBcIkVudGl0w6lzXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbj5cclxuICAgICAge3Rva2VuID8gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8R2F1Y2hlPlxyXG4gICAgICAgICAgICA8U2lkZWJhciAvPlxyXG4gICAgICAgICAgPC9HYXVjaGU+XHJcbiAgICAgICAgICA8Q2VudHJlPlxyXG4gICAgICAgICAgICA8TmF2YmFyIHRpdGxlPVwiRGFzaGJvYXJkXCIgLz5cclxuICAgICAgICAgICAgPFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgPFRpdHJlPkJpZW52ZW51ZSBzdXIgUkVEIFByb2R1Y3Q8L1RpdHJlPlxyXG4gICAgICAgICAgICAgIDxTbWFsbD5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIExhIFNvbHV0aW9uIGRlIEdlc3Rpb24gSMO0dGVsacOocmUgVWx0aW1lIHBvdXIgbGVzIEVudHJlcHJpc2VzIGRlXHJcbiAgICAgICAgICAgICAgICBSw6lzZXJ2YXRpb25cclxuICAgICAgICAgICAgICA8L1NtYWxsPlxyXG4gICAgICAgICAgICA8L1dyYXBwZXI+XHJcbiAgICAgICAgICAgIDxDYXJ0ZXM+XHJcbiAgICAgICAgICAgICAge2RhdGFzLm1hcCgob2JqLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPENhcnRlXHJcbiAgICAgICAgICAgICAgICAgIGljb249e29iai5pY29ufVxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj17b2JqLmNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICBub21icmU9e29iaj8ubm9tYnJlfVxyXG4gICAgICAgICAgICAgICAgICB0aXRyZT17b2JqPy50aXRyZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvQ2FydGVzPlxyXG4gICAgICAgICAgPC9DZW50cmU+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvY29ubmV4aW9uXCIpXHJcbiAgICAgICl9XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2lkZWJhciIsIk5hdmJhciIsIkNhcnRlIiwiRmFFbnZlbG9wZU9wZW4iLCJheGlvcyIsInVzZVJvdXRlciIsIldyYXBwZXIiLCJkaXYiLCJTbWFsbCIsInAiLCJUaXRyZSIsImgyIiwiQ2FydGVzIiwiQ2VudHJlIiwiR2F1Y2hlIiwiQ29udGFpbmVyIiwiUGFnZSIsImhvdGVsIiwic2V0SG90ZWwiLCJ1c2VyIiwic2V0VXNlciIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJvdXRlciIsImZldGNoSG90ZWxzIiwicmVzcG9uc2UiLCJnZXQiLCJob3RlbHMiLCJkYXRhIiwibWFwIiwiZXJyb3IiLCJjb25zb2xlIiwiZmV0Y2hVc2VycyIsInByb2ZpbGVzIiwicHJvZmlsIiwiZGF0YXMiLCJjb2xvciIsImljb24iLCJub21icmUiLCJ0aXRyZSIsImxlbmd0aCIsIm1haW4iLCJ0aXRsZSIsIm9iaiIsImluZGV4IiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.jsx\n"));

/***/ })

});