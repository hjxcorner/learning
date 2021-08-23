let obj = {
  'abcd0': [
    function (require, module, exports) {
      "use strict";

      var _info = _interopRequireDefault(require("./info1"));

      var _info2 = _interopRequireDefault(require("./info2"));

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

      console.log(_info["default"], _info2["default"]);
    },
    { "./info1.js": "abcd1", "./info2.js": "abcd2" }
  ],

  'abcd1': [
    function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PI = void 0;
      var PI = 3.141592654;
      exports.PI = PI;
    },
    {}
  ],

  'abcd2': [
    function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.R = void 0;
      var R = 5;
      exports.R = R;
    },
    {}
  ],
}

console.log(obj['abcd0'])