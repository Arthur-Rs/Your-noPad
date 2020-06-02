"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var richText = /*#__PURE__*/function () {
  function richText(editor) {
    _classCallCheck(this, richText);

    this.editor = editor;
    this.editorDOC = editor.contentDocument;
    this.editorDOC.body.contentEditable = "true";
  }

  _createClass(richText, [{
    key: "command",
    value: function command() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "bold";
      var ui = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.editorDOC.execCommand(name, ui, value);
    }
  }]);

  return richText;
}();

exports["default"] = richText;
var elementEditor = document.querySelector("#editor");
var editor = new richText(elementEditor);
var bold = document.querySelector("#bold");
bold.addEventListener("click", function () {
  editor.command("bold");
});
var italic = document.querySelector("#italic");
italic.addEventListener("click", function () {
  editor.command("italic");
});
var underlined = document.querySelector("#underlined");
underlined.addEventListener("click", function () {
  editor.command("underline");
});
var strikethrough = document.querySelector("#strikethrough");
strikethrough.addEventListener("click", function () {
  editor.command("strikeThrough");
});
var align_left = document.querySelector("#align_left");
align_left.addEventListener("click", function () {
  editor.command("justifyLeft");
});
var align_center = document.querySelector("#align_center");
align_center.addEventListener("click", function () {
  editor.command("justifyCenter");
});
var align_right = document.querySelector("#align_right");
align_right.addEventListener("click", function () {
  editor.command("justifyRight");
});
var align_justify = document.querySelector("#align_justify");
align_justify.addEventListener("click", function () {
  editor.command("justifyFull");
});
var list_bulleted = document.querySelector("#list_bulleted");
list_bulleted.addEventListener("click", function () {
  editor.command("insertUnorderedList");
});
var list_numbered = document.querySelector("#list_numbered");
list_numbered.addEventListener("click", function () {
  editor.command("insertOrderedList");
});
var indent_increase = document.querySelector("#indent_increase");
indent_increase.addEventListener("click", function () {
  editor.command("indent");
});
var indent_decrease = document.querySelector("#indent_decrease");
indent_decrease.addEventListener("click", function () {
  editor.command("outdent");
});
var undo = document.querySelector("#undo");
undo.addEventListener("click", function () {
  editor.command("undo");
});
var clear = document.querySelector("#clear");
clear.addEventListener("click", function () {
  editor.command("removeFormat");
});
var subscript = document.querySelector("#subscript");
subscript.addEventListener("click", function () {
  editor.command("subscript");
});
var superscript = document.querySelector("#superscript");
superscript.addEventListener("click", function () {
  editor.command("superscript");
});
var font_family = document.querySelector("#font-family");
font_family.addEventListener("click", function () {
  editor.command("fontName", false, font_family.value);
});
var font_size = document.querySelector("#font-size");
font_size.addEventListener("click", function () {
  editor.command("fontSize", false, font_size.value);
});
var color = document.querySelector("#color");
var font_color = document.querySelector("#font-color");
color.addEventListener("click", function () {
  editor.command("foreColor", false, font_color.value);
});
var background = document.querySelector("#background");
var background_color = document.querySelector("#background-color");
background.addEventListener("click", function () {
  editor.command("hiliteColor", false, background_color.value);
});