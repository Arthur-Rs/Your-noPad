/*
* @altor: Arhur Reis
* @github: https://github.com/Arthur-Rs
* @versão: 1.0
* @ultima data de revisão 25/05/2020
* @Descrição: Carregar elementos do documento HTML
*/

//------------- elementos principais -------------

let addAnnotationIl = document.querySelector("#new-name")
let addAnnotationsBotton = document.querySelector("#add-note")
let annotationsUl = document.querySelector("#notes")
let annotationsName = document.querySelector("#note-name")

//------------- Entradas -------------

let getName = document.querySelector("#name")
let textArea = document.querySelector("#text-area")

//------------- Propriedades -------------

//botões de manipulação da font
const fontSize  = document.querySelector("#font-size")
const fontColor = document.querySelector("#font-color")

//Botões de aliamento de texto
let alignLeftButton = document.querySelector("#align-left")
let alignCenterButton = document.querySelector("#align-left")
let alignRightButton = document.querySelector("#align-left")
let alignJustifyButton = document.querySelector("#align-left")

//------------- Elementos para versão mobiel -------------

let getAnnotationsButton = document.querySelector("#get-notes")
let boxAnnotations = document.querySelector("#box-note")

// <------------------------------------------------->