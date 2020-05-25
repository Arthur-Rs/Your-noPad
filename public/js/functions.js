/*
* @altor: Arhur Reis
* @github: https://github.com/Arthur-Rs
* @versão: 1.0
* @ultima data de revisão 25/05/2020
* @Descrição: Funções extras para o programa
*/


// <----------------> extra functions <---------------->

// recarrega os elemtos para as variáveis
const getElements = () => {
  addAnnotationIl = document.querySelector("#new-name")
  addAnnotationsBotton = document.querySelector("#add-note")
  annotationsUl = document.querySelector("#notes")
  getName = document.querySelector("#name")
}

//Gera um ID unico e aleatorio
const getRandomID = () => {
  const newId = Math.floor(Math.random() * 1000)
  ANNOTATIONS.forEach(element => {
    element.id == newId ? getRandomID() : null
  })
  return newId
}

//Limpa todas as anotações da lista
const clearUl = () => {
  annotationsUl.innerHTML = `
  <li class="new-name" id="new-name">
    <input type="text" id="name" placeholder="Nome"></input>
    <i class="material-icons" id="add-new-note" 
    onclick="downInputAnim()">add_circle</i>
  </li>

  <li class="add-note">
    <a class="material-icons" id="add-note" onclick="upInputAnim()">
    add_circle</a>
  </li>`
  getElements()
}

// Retorna todos os valores de alguma anotação pelo seu Identificador
const getAnnotationByID = id => {
  return ANNOTATIONS.filter((element) => 
  {
    return element.id == id ? true : false
  })
}

// Bloqueia a escrita do usuário caso não tenha nenhuma anotação selecionada
const blockWriting = () => {
  
  let has = false

  ANNOTATIONS.every(element => {
    if(element.id == SELECTED_ANNOTATION){
      has = true
      return false
    }else{
      return true
    }
  });

  if (!has){
    annotationsName.innerHTML = "Sem anotação"
    textArea.value = "Selecione uma anotação antes de escrever"
    return false
  }else{
    if(textArea.value == "Selecione uma anotação antes de escrever"){
      textArea.value = ""
      return true
    }
  }
} 
// <------------------------------------------------->
