/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Woon.ts":
/*!*********************!*\
  !*** ./src/Woon.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "w": () => (/* binding */ w),
/* harmony export */   "Heading": () => (/* binding */ Heading)
/* harmony export */ });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Component = /** @class */ (function () {
    function Component(props) {
        var _this = this;
        this.props = {};
        this.onChange = function () { return window['__woon__'].render(); };
        this.getCache = function () { return window['__woon__'].cache[_this.UID] || {}; };
        this.setCache = function (cache) { return (window['__woon__'].cache[_this.UID] = cache); };
        this.props = props;
        this.UID = Component._UID++;
        this.init();
    }
    Component.prototype.init = function () { };
    Component.prototype.newState = function (key, initialValue) {
        var _a;
        if (this.getCache()[key] != null)
            return;
        this.setCache(__assign(__assign({}, this.getCache()), (_a = {}, _a[key] = initialValue, _a)));
    };
    Component.prototype.setState = function (key, value) {
        var _a;
        if (this.getState(key) === value)
            return;
        this.setCache(__assign(__assign({}, this.getCache()), (_a = {}, _a[key] = value, _a)));
        this.onChange();
    };
    Component.prototype.getState = function (key) {
        return this.getCache()[key];
    };
    Component._UID = 0;
    return Component;
}());

window['__woon__'] = {};
var Woon = /** @class */ (function () {
    function Woon(entry, component) {
        this.cache = {};
        this.entry = entry;
        this.component = component;
        window['__woon__'] = this;
        return this.render();
    }
    Woon.prototype.render = function () {
        Component._UID = 0;
        while (this.entry.firstChild) {
            this.entry.removeChild(this.entry.firstChild);
        }
        this.entry.appendChild(this.component.build());
        return this;
    };
    return Woon;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Woon);
function w(_a) {
    var tag = _a.tag, attributes = _a.attributes, styles = _a.styles, text = _a.text, children = _a.children, events = _a.events;
    var element = document.createElement(tag || 'div');
    if (text != null) {
        element.appendChild(document.createTextNode(text));
    }
    if (attributes != null) {
        Object.keys(attributes).forEach(function (key) {
            element.setAttribute(key, attributes[key]);
        });
    }
    if (styles != null) {
        Object.keys(styles).forEach(function (key) {
            element.style[key] = styles[key];
        });
    }
    if (children != null) {
        children.forEach(function (child) {
            if (child instanceof HTMLElement) {
                element.appendChild(child);
            }
            else if (child instanceof Component) {
                element.appendChild(child.build());
            }
        });
    }
    if (events != null) {
        Object.keys(events).forEach(function (key) {
            element.addEventListener(key, function (e) { return events[key](e, element); });
        });
    }
    return element;
}
var Heading = /** @class */ (function (_super) {
    __extends(Heading, _super);
    function Heading(props) {
        return _super.call(this, props) || this;
    }
    Heading.prototype.build = function () {
        return w({
            tag: "h" + this.props.level,
            text: this.props.text,
        });
    };
    return Heading;
}(Component));



/***/ }),

/***/ "./src/components/Body.ts":
/*!********************************!*\
  !*** ./src/components/Body.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Woon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Woon */ "./src/Woon.ts");
/* harmony import */ var _InfoGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoGrid */ "./src/components/InfoGrid.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Body = /** @class */ (function (_super) {
    __extends(Body, _super);
    function Body() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Body.prototype.init = function () {
        this.newState('counter', 0);
    };
    Body.prototype.build = function () {
        var _this = this;
        return (0,_Woon__WEBPACK_IMPORTED_MODULE_0__.w)({
            tag: 'div',
            styles: {
                width: '70%',
                maxWidth: '1200px',
                backgroundColor: 'hsl(0, 0%, 90%)',
                margin: '0 auto',
                color: 'white',
                display: 'grid',
                gridTemplateRows: '4fr 3fr',
            },
            children: [
                (0,_Woon__WEBPACK_IMPORTED_MODULE_0__.w)({
                    tag: 'div',
                    styles: {
                        width: '100%',
                        backgroundColor: 'hsl(211, 75%, 50%)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    },
                    children: [
                        (0,_Woon__WEBPACK_IMPORTED_MODULE_0__.w)({ tag: 'h1', text: 'Hello, world!', styles: { fontSize: '8rem' } }),
                        (0,_Woon__WEBPACK_IMPORTED_MODULE_0__.w)({ tag: 'span', text: 'This site was made using Woon.js', styles: { fontSize: '1.5rem' } }),
                        (0,_Woon__WEBPACK_IMPORTED_MODULE_0__.w)({
                            tag: 'h1',
                            text: "Counter: " + this.getState('counter'),
                            styles: { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
                            children: [
                                (0,_Woon__WEBPACK_IMPORTED_MODULE_0__.w)({
                                    children: [
                                        (0,_Woon__WEBPACK_IMPORTED_MODULE_0__.w)({
                                            tag: 'button',
                                            text: '+1',
                                            events: {
                                                click: function () {
                                                    _this.setState('counter', _this.getState('counter') + 1);
                                                },
                                            },
                                            // Bootstrap button style
                                            styles: {
                                                backgroundColor: 'hsl(211, 75%, 60%)',
                                                color: 'white',
                                                padding: '0.5rem 0.75rem',
                                                border: 'none',
                                                borderRadius: '5px',
                                                fontSize: '1.5rem',
                                                cursor: 'pointer',
                                                margin: '0.25rem 0.5rem',
                                            },
                                        }),
                                        (0,_Woon__WEBPACK_IMPORTED_MODULE_0__.w)({
                                            tag: 'button',
                                            text: '-1',
                                            events: {
                                                click: function () {
                                                    _this.setState('counter', _this.getState('counter') - 1);
                                                },
                                            },
                                            styles: {
                                                backgroundColor: 'hsl(211, 75%, 60%)',
                                                color: 'white',
                                                padding: '0.5rem 0.75rem',
                                                border: 'none',
                                                borderRadius: '5px',
                                                fontSize: '1.5rem',
                                                cursor: 'pointer',
                                                margin: '0.25rem 0.5rem',
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                new _InfoGrid__WEBPACK_IMPORTED_MODULE_1__.default(),
            ],
        });
    };
    return Body;
}(_Woon__WEBPACK_IMPORTED_MODULE_0__.Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Body);


/***/ }),

/***/ "./src/components/InfoGrid.ts":
/*!************************************!*\
  !*** ./src/components/InfoGrid.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Woon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Woon */ "./src/Woon.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var InfoGrid = /** @class */ (function (_super) {
    __extends(InfoGrid, _super);
    function InfoGrid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InfoGrid.prototype.build = function () {
        return (0,_Woon__WEBPACK_IMPORTED_MODULE_0__.w)({
            tag: 'div',
            styles: {
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
            },
            children: [
                (0,_Woon__WEBPACK_IMPORTED_MODULE_0__.w)({
                    tag: 'a',
                    styles: {
                        backgroundColor: 'hsl(211, 80%, 58%)',
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        color: '#fff',
                        textDecoration: 'none',
                    },
                    attributes: { href: 'https://github.com/euseanwoon2016/woon-js' },
                    children: [
                        (0,_Woon__WEBPACK_IMPORTED_MODULE_0__.w)({
                            tag: 'div',
                            text: 'View on GitHub',
                            styles: { fontSize: '2rem', fontWeight: 'bold' },
                        }),
                    ],
                }),
                (0,_Woon__WEBPACK_IMPORTED_MODULE_0__.w)({
                    tag: 'a',
                    styles: {
                        backgroundColor: 'hsl(211, 80%, 47%)',
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        color: '#fff',
                        textDecoration: 'none',
                    },
                    attributes: { href: 'https://github.com/euseanwoon2016/woon-js/wiki' },
                    children: [
                        (0,_Woon__WEBPACK_IMPORTED_MODULE_0__.w)({
                            tag: 'div',
                            text: 'View Wiki',
                            styles: { fontSize: '2rem', fontWeight: 'bold' },
                        }),
                    ],
                }),
            ],
        });
    };
    return InfoGrid;
}(_Woon__WEBPACK_IMPORTED_MODULE_0__.Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfoGrid);


/***/ }),

/***/ "./src/components/NavBar.ts":
/*!**********************************!*\
  !*** ./src/components/NavBar.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Woon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Woon */ "./src/Woon.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NavBar = /** @class */ (function (_super) {
    __extends(NavBar, _super);
    function NavBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavBar.prototype.build = function () {
        return (0,_Woon__WEBPACK_IMPORTED_MODULE_0__.w)({
            tag: 'nav',
            styles: { width: '100%', backgroundColor: 'hsl(211, 100%, 56%)', color: 'hsl(0, 0%, 96%)' },
            children: [
                (0,_Woon__WEBPACK_IMPORTED_MODULE_0__.w)({
                    tag: 'nav',
                    styles: {
                        width: '70%',
                        maxWidth: '1200px',
                        padding: '2rem',
                        margin: '0 auto',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    },
                    children: [
                        (0,_Woon__WEBPACK_IMPORTED_MODULE_0__.w)({
                            tag: 'h1',
                            styles: {
                                textDecoration: 'none',
                                fontSize: '1.5em',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                padding: '0px',
                                margin: '0px',
                                border: '0px',
                            },
                            text: this.props.title,
                        }),
                    ],
                }),
            ],
        });
    };
    return NavBar;
}(_Woon__WEBPACK_IMPORTED_MODULE_0__.Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_Body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Body */ "./src/components/Body.ts");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/NavBar */ "./src/components/NavBar.ts");
/* harmony import */ var _Woon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Woon */ "./src/Woon.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomePage.prototype.init = function () { };
    HomePage.prototype.build = function () {
        return (0,_Woon__WEBPACK_IMPORTED_MODULE_3__.w)({
            tag: 'div',
            styles: {
                backgroundColor: 'hsl(0, 0%, 96%)',
                width: '100%',
                height: '100%',
                display: 'grid',
                gridTemplateRows: 'auto 1fr',
            },
            children: [new _components_NavBar__WEBPACK_IMPORTED_MODULE_2__.default({ title: 'Woon.js Framework' }), new _components_Body__WEBPACK_IMPORTED_MODULE_1__.default()],
        });
    };
    return HomePage;
}(_Woon__WEBPACK_IMPORTED_MODULE_3__.Component));
var app = new _Woon__WEBPACK_IMPORTED_MODULE_3__.default(document.querySelector('#app'), new HomePage());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBRWdCO0FBQ0k7QUFDRztBQUU1QztJQUF1Qiw0QkFBUztJQUFoQzs7SUFnQkEsQ0FBQztJQWZDLHVCQUFJLEdBQUosY0FBUSxDQUFDO0lBRVQsd0JBQUssR0FBTDtRQUNFLE9BQU8sd0NBQUMsQ0FBQztZQUNQLEdBQUcsRUFBRSxLQUFLO1lBQ1YsTUFBTSxFQUFFO2dCQUNOLGVBQWUsRUFBRSxpQkFBaUI7Z0JBQ2xDLEtBQUssRUFBRSxNQUFNO2dCQUNiLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE9BQU8sRUFBRSxNQUFNO2dCQUNmLGdCQUFnQixFQUFFLFVBQVU7YUFDN0I7WUFDRCxRQUFRLEVBQUUsQ0FBQyxJQUFJLHVEQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxFQUFFLElBQUkscURBQUksRUFBRSxDQUFDO1NBQ25FLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxDQWhCc0IsNENBQVMsR0FnQi9CO0FBRUQsSUFBTSxHQUFHLEdBQUcsSUFBSSwwQ0FBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC13ZWJwYWNrLy4vc3JjL3N0eWxlLmNzcz9lMzIwIiwid2VicGFjazovL3R5cGVzY3JpcHQtd2VicGFjay8uL3NyYy9Xb29uLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtd2VicGFjay8uL3NyYy9jb21wb25lbnRzL0JvZHkudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC13ZWJwYWNrLy4vc3JjL2NvbXBvbmVudHMvSW5mb0dyaWQudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC13ZWJwYWNrLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R5cGVzY3JpcHQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R5cGVzY3JpcHQtd2VicGFjay8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudFByb3BzIGV4dGVuZHMgUGFydGlhbDxhbnk+IHtcbiAgY2hpbGRyZW4/OiBDb21wb25lbnRbXTtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBfVUlEOiBudW1iZXIgPSAwO1xuICBwcm90ZWN0ZWQgVUlEOiBudW1iZXI7XG4gIHByb3RlY3RlZCBwcm9wczogYW55ID0ge307XG4gIHByaXZhdGUgb25DaGFuZ2UgPSAoKSA9PiB3aW5kb3dbJ19fd29vbl9fJ10ucmVuZGVyKCk7XG4gIHByaXZhdGUgZ2V0Q2FjaGUgPSAoKSA9PiB3aW5kb3dbJ19fd29vbl9fJ10uY2FjaGVbdGhpcy5VSURdIHx8IHt9O1xuICBwcml2YXRlIHNldENhY2hlID0gKGNhY2hlOiBhbnkpID0+ICh3aW5kb3dbJ19fd29vbl9fJ10uY2FjaGVbdGhpcy5VSURdID0gY2FjaGUpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzPzogYW55KSB7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIHRoaXMuVUlEID0gQ29tcG9uZW50Ll9VSUQrKztcblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpOiB2b2lkIHt9XG5cbiAgYWJzdHJhY3QgYnVpbGQoKTogSFRNTEVsZW1lbnQ7XG5cbiAgcHJvdGVjdGVkIG5ld1N0YXRlKGtleTogc3RyaW5nLCBpbml0aWFsVmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmdldENhY2hlKClba2V5XSAhPSBudWxsKSByZXR1cm47XG5cbiAgICB0aGlzLnNldENhY2hlKHsgLi4udGhpcy5nZXRDYWNoZSgpLCBba2V5XTogaW5pdGlhbFZhbHVlIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldFN0YXRlKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZ2V0U3RhdGUoa2V5KSA9PT0gdmFsdWUpIHJldHVybjtcblxuICAgIHRoaXMuc2V0Q2FjaGUoeyAuLi50aGlzLmdldENhY2hlKCksIFtrZXldOiB2YWx1ZSB9KTtcblxuICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTdGF0ZShrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2FjaGUoKVtrZXldO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX193b29uX186IGFueTtcbiAgfVxufVxud2luZG93WydfX3dvb25fXyddID0ge307XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb29uIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnQ7XG4gIGVudHJ5OiBIVE1MRWxlbWVudDtcbiAgY2FjaGU6IHsgW2tleTogbnVtYmVyXTogYW55IH0gPSB7fTtcblxuICBjb25zdHJ1Y3RvcihlbnRyeTogSFRNTEVsZW1lbnQsIGNvbXBvbmVudDogQ29tcG9uZW50KSB7XG4gICAgdGhpcy5lbnRyeSA9IGVudHJ5O1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuXG4gICAgd2luZG93WydfX3dvb25fXyddID0gdGhpcztcblxuICAgIHJldHVybiB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIENvbXBvbmVudC5fVUlEID0gMDtcbiAgICB3aGlsZSAodGhpcy5lbnRyeS5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLmVudHJ5LnJlbW92ZUNoaWxkKHRoaXMuZW50cnkuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbnRyeS5hcHBlbmRDaGlsZCh0aGlzLmNvbXBvbmVudC5idWlsZCgpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5pbnRlcmZhY2UgQ29tcG9uZW50QnVpbGRlclByb3BzIHtcbiAgdGFnOiBzdHJpbmc7XG4gIGF0dHJpYnV0ZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIHN0eWxlczogUGFydGlhbDxDU1NTdHlsZURlY2xhcmF0aW9uPjtcbiAgdGV4dDogc3RyaW5nO1xuICBjaGlsZHJlbjogKEhUTUxFbGVtZW50IHwgQ29tcG9uZW50KVtdO1xuICBldmVudHM6IHsgW2tleTogc3RyaW5nXTogKGV2ZW50OiBFdmVudCwgZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHZvaWQgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHcoeyB0YWcsIGF0dHJpYnV0ZXMsIHN0eWxlcywgdGV4dCwgY2hpbGRyZW4sIGV2ZW50cyB9OiBQYXJ0aWFsPENvbXBvbmVudEJ1aWxkZXJQcm9wcz4pOiBIVE1MRWxlbWVudCB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyB8fCAnZGl2Jyk7XG5cbiAgaWYgKHRleHQgIT0gbnVsbCkge1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpO1xuICB9XG5cbiAgaWYgKGF0dHJpYnV0ZXMgIT0gbnVsbCkge1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHN0eWxlcyAhPSBudWxsKSB7XG4gICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKChrZXk6IGFueSkgPT4ge1xuICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gc3R5bGVzW2tleV07XG4gICAgfSk7XG4gIH1cblxuICBpZiAoY2hpbGRyZW4gIT0gbnVsbCkge1xuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hpbGQgaW5zdGFuY2VvZiBDb21wb25lbnQpIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZC5idWlsZCgpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChldmVudHMgIT0gbnVsbCkge1xuICAgIE9iamVjdC5rZXlzKGV2ZW50cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoa2V5LCAoZSkgPT4gZXZlbnRzW2tleV0oZSwgZWxlbWVudCkpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbi8vIFByZW1hZGUgQ29tcG9uZW50c1xuaW50ZXJmYWNlIEhlYWRpbmdDb21wb25lbnRQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzIHtcbiAgbGV2ZWw6IG51bWJlcjtcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgSGVhZGluZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHByb3RlY3RlZCBwcm9wczogSGVhZGluZ0NvbXBvbmVudFByb3BzO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBIZWFkaW5nQ29tcG9uZW50UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBidWlsZCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHcoe1xuICAgICAgdGFnOiBgaCR7dGhpcy5wcm9wcy5sZXZlbH1gLFxuICAgICAgdGV4dDogdGhpcy5wcm9wcy50ZXh0LFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIHcgfSBmcm9tICcuLi9Xb29uJztcbmltcG9ydCBJbmZvR3JpZCBmcm9tICcuL0luZm9HcmlkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9keSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGluaXQoKSB7XG4gICAgdGhpcy5uZXdTdGF0ZSgnY291bnRlcicsIDApO1xuICB9XG5cbiAgYnVpbGQoKSB7XG4gICAgcmV0dXJuIHcoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIHN0eWxlczoge1xuICAgICAgICB3aWR0aDogJzcwJScsXG4gICAgICAgIG1heFdpZHRoOiAnMTIwMHB4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnaHNsKDAsIDAlLCA5MCUpJyxcbiAgICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgZ3JpZFRlbXBsYXRlUm93czogJzRmciAzZnInLFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHcoe1xuICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnaHNsKDIxMSwgNzUlLCA1MCUpJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgdyh7IHRhZzogJ2gxJywgdGV4dDogJ0hlbGxvLCB3b3JsZCEnLCBzdHlsZXM6IHsgZm9udFNpemU6ICc4cmVtJyB9IH0pLFxuICAgICAgICAgICAgdyh7IHRhZzogJ3NwYW4nLCB0ZXh0OiAnVGhpcyBzaXRlIHdhcyBtYWRlIHVzaW5nIFdvb24uanMnLCBzdHlsZXM6IHsgZm9udFNpemU6ICcxLjVyZW0nIH0gfSksXG4gICAgICAgICAgICB3KHtcbiAgICAgICAgICAgICAgdGFnOiAnaDEnLFxuICAgICAgICAgICAgICB0ZXh0OiBgQ291bnRlcjogJHt0aGlzLmdldFN0YXRlKCdjb3VudGVyJyl9YCxcbiAgICAgICAgICAgICAgc3R5bGVzOiB7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfSxcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICB3KHtcbiAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHcoe1xuICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogJysxJyxcbiAgICAgICAgICAgICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoJ2NvdW50ZXInLCB0aGlzLmdldFN0YXRlKCdjb3VudGVyJykgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAvLyBCb290c3RyYXAgYnV0dG9uIHN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdoc2woMjExLCA3NSUsIDYwJSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMC41cmVtIDAuNzVyZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxLjVyZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICcwLjI1cmVtIDAuNXJlbScsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIHcoe1xuICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogJy0xJyxcbiAgICAgICAgICAgICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoJ2NvdW50ZXInLCB0aGlzLmdldFN0YXRlKCdjb3VudGVyJykgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2hzbCgyMTEsIDc1JSwgNjAlKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwLjVyZW0gMC43NXJlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEuNXJlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzAuMjVyZW0gMC41cmVtJyxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IEluZm9HcmlkKCksXG4gICAgICBdLFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIHcgfSBmcm9tICcuLi9Xb29uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5mb0dyaWQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBidWlsZCgpIHtcbiAgICByZXR1cm4gdyh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdCgyLCAxZnIpJyxcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB3KHtcbiAgICAgICAgICB0YWc6ICdhJyxcbiAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2hzbCgyMTEsIDgwJSwgNTglKScsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXR0cmlidXRlczogeyBocmVmOiAnaHR0cHM6Ly9naXRodWIuY29tL2V1c2Vhbndvb24yMDE2L3dvb24tanMnIH0sXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHcoe1xuICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICB0ZXh0OiAnVmlldyBvbiBHaXRIdWInLFxuICAgICAgICAgICAgICBzdHlsZXM6IHsgZm9udFNpemU6ICcycmVtJywgZm9udFdlaWdodDogJ2JvbGQnIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KSxcbiAgICAgICAgdyh7XG4gICAgICAgICAgdGFnOiAnYScsXG4gICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdoc2woMjExLCA4MCUsIDQ3JSknLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IHsgaHJlZjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ldXNlYW53b29uMjAxNi93b29uLWpzL3dpa2knIH0sXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHcoe1xuICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICB0ZXh0OiAnVmlldyBXaWtpJyxcbiAgICAgICAgICAgICAgc3R5bGVzOiB7IGZvbnRTaXplOiAnMnJlbScsIGZvbnRXZWlnaHQ6ICdib2xkJyB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIHcgfSBmcm9tICcuLi9Xb29uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2QmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgYnVpbGQoKSB7XG4gICAgcmV0dXJuIHcoe1xuICAgICAgdGFnOiAnbmF2JyxcbiAgICAgIHN0eWxlczogeyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICdoc2woMjExLCAxMDAlLCA1NiUpJywgY29sb3I6ICdoc2woMCwgMCUsIDk2JSknIH0sXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB3KHtcbiAgICAgICAgICB0YWc6ICduYXYnLFxuICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgd2lkdGg6ICc3MCUnLFxuICAgICAgICAgICAgbWF4V2lkdGg6ICcxMjAwcHgnLFxuICAgICAgICAgICAgcGFkZGluZzogJzJyZW0nLFxuICAgICAgICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB3KHtcbiAgICAgICAgICAgICAgdGFnOiAnaDEnLFxuICAgICAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMS41ZW0nLFxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwcHgnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzBweCcsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMHB4JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGV4dDogdGhpcy5wcm9wcy50aXRsZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuaW1wb3J0IEJvZHkgZnJvbSAnLi9jb21wb25lbnRzL0JvZHknO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuL2NvbXBvbmVudHMvTmF2QmFyJztcbmltcG9ydCBXb29uLCB7IENvbXBvbmVudCwgdyB9IGZyb20gJy4vV29vbic7XG5cbmNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgaW5pdCgpIHt9XG5cbiAgYnVpbGQoKSB7XG4gICAgcmV0dXJuIHcoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIHN0eWxlczoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdoc2woMCwgMCUsIDk2JSknLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgICBncmlkVGVtcGxhdGVSb3dzOiAnYXV0byAxZnInLFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbbmV3IE5hdkJhcih7IHRpdGxlOiAnV29vbi5qcyBGcmFtZXdvcmsnIH0pLCBuZXcgQm9keSgpXSxcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBhcHAgPSBuZXcgV29vbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJyksIG5ldyBIb21lUGFnZSgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==