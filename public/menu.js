"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var menuController = /*#__PURE__*/function () {
  function menuController(button, box, height) {
    var _this = this;

    _classCallCheck(this, menuController);

    this.button = document.getElementById(button);
    this.box = document.getElementById(box);
    this.height = height;
    this.contentBox = this.box.firstElementChild;
    this.Open = false;
    this.box.addEventListener("mouseleave", function () {
      _this.closeAnimation();

      _this.Open = false;
    });
    this.button.addEventListener("mouseenter", function () {
      _this.openAnimation();
    });
    this.button.addEventListener("click", function () {
      _this.Open = true;
    });
    this.box.addEventListener("mouseenter", function () {});
    this.button.addEventListener("mouseleave", function () {
      if (!_this.Open) {
        _this.closeAnimation();
      }
    });
  } // Animações


  _createClass(menuController, [{
    key: "openAnimation",
    value: function openAnimation() {
      var _this2 = this;

      this.box.style.display = "flex";
      this.contentBox.style.display = "none";
      animate = this.box.animate([{
        height: "0px"
      }, {
        height: "".concat(this.height, "px")
      }], 200);

      animate.onfinish = function () {
        _this2.contentBox.style.display = "flex";
        animateContent = _this2.contentBox.animate([{
          opacity: "0"
        }, {
          opacity: "1"
        }], 100);
      };
    }
  }, {
    key: "closeAnimation",
    value: function closeAnimation() {
      var _this3 = this;

      animateContent = this.contentBox.animate([{
        opacity: "1"
      }, {
        opacity: "0"
      }], 100);

      animateContent.onfinish = function () {
        _this3.contentBox.style.display = "none";
        animate = _this3.box.animate([{
          height: "".concat(_this3.height, "px")
        }, {
          height: "0px"
        }], 200);

        animate.onfinish = function () {
          _this3.box.style.display = "none";
        };
      };
    }
  }]);

  return menuController;
}();

var files = new menuController("button-file", "box-file", 300);
var edit = new menuController("button-edit", "box-edit", 250);
var add = new menuController("button-add", "box-add", 100);
var format = new menuController("button-format", "box-format", 150);