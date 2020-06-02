export default class richText {
  constructor(editor) {
    this.editor = editor;
    this.editorDOC = editor.contentDocument;
    this.editorDOC.body.contentEditable = "true";
  }
  command(name = "bold", ui = false, value = null) {
    this.editorDOC.execCommand(name, ui, value);
  }
}

const elementEditor = document.querySelector("#editor");
const editor = new richText(elementEditor);

const bold = document.querySelector("#bold");
bold.addEventListener("click", () => {
  editor.command("bold");
});

const italic = document.querySelector("#italic");
italic.addEventListener("click", () => {
  editor.command("italic");
});

const underlined = document.querySelector("#underlined");
underlined.addEventListener("click", () => {
  editor.command("underline");
});

const strikethrough = document.querySelector("#strikethrough");
strikethrough.addEventListener("click", () => {
  editor.command("strikeThrough");
});

const align_left = document.querySelector("#align_left");
align_left.addEventListener("click", () => {
  editor.command("justifyLeft");
});

const align_center = document.querySelector("#align_center");
align_center.addEventListener("click", () => {
  editor.command("justifyCenter");
});

const align_right = document.querySelector("#align_right");
align_right.addEventListener("click", () => {
  editor.command("justifyRight");
});

const align_justify = document.querySelector("#align_justify");
align_justify.addEventListener("click", () => {
  editor.command("justifyFull");
});

const list_bulleted = document.querySelector("#list_bulleted");
list_bulleted.addEventListener("click", () => {
  editor.command("insertUnorderedList");
});

const list_numbered = document.querySelector("#list_numbered");
list_numbered.addEventListener("click", () => {
  editor.command("insertOrderedList");
});

const indent_increase = document.querySelector("#indent_increase");
indent_increase.addEventListener("click", () => {
  editor.command("indent");
});

const indent_decrease = document.querySelector("#indent_decrease");
indent_decrease.addEventListener("click", () => {
  editor.command("outdent");
});

const undo = document.querySelector("#undo");
undo.addEventListener("click", () => {
  editor.command("undo");
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  editor.command("removeFormat");
});

const subscript = document.querySelector("#subscript");
subscript.addEventListener("click", () => {
  editor.command("subscript");
});

const superscript = document.querySelector("#superscript");
superscript.addEventListener("click", () => {
  editor.command("superscript");
});

const font_family = document.querySelector("#font-family");
font_family.addEventListener("click", () => {
  editor.command("fontName", false, font_family.value);
});

const font_size = document.querySelector("#font-size");
font_size.addEventListener("click", () => {
  editor.command("fontSize", false, font_size.value);
});

const color = document.querySelector("#color");
const font_color = document.querySelector("#font-color");
color.addEventListener("click", () => {
  editor.command("foreColor", false, font_color.value);
});

const background = document.querySelector("#background");
const background_color = document.querySelector("#background-color");
background.addEventListener("click", () => {
  editor.command("hiliteColor", false, background_color.value);
});
