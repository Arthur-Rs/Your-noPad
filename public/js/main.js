/*
* @altor: Arhur Reis
* @github: https://github.com/Arthur-Rs
* @versão: 1.0
* @ultima data de revisão 25/05/2020
* @Descrição: Principais funções do programa
*/

// Variaveis principais
let ANNOTATIONS = getAnnotetionsLocalStorage() //Banco de anotação
let SELECTED_ANNOTATION = 0; //Anotação selecionada

// <----------------> Funções de manipulação <---------------->

//Adiona uma nova anotação no banco
const addAnnotation = () => {
  
  //Verificar se há alguma letra no input
  if (getName.value.trim() == ""){
    alert("Escreva um nome para sua anotação")
    return
  }
  id = getRandomID()
  //adiciona no banco
  ANNOTATIONS.push({
    id: id,
    name: getName.value,
    text: ""
  })
  SELECTED_ANNOTATION = id
  //Funções de atualização
  blockWriting()
  closeBoxAnnotations()
  init()
  addAnnotationAnim(id)

  
}

// Deleta anotações
const deleteAnnototion = id =>{
  ANNOTATIONS = ANNOTATIONS.filter(element => {
    return element.id != id ? true : false
  })
  //Funções de atualização
  deleteAnnotationAnim(id)
  blockWriting()
}

//Seleciona uma anotação
const selectAnnotation = id => {
  const select = ANNOTATIONS.filter(element=>{
    return element.id === id ? true : false
  })
  SELECTED_ANNOTATION = id
  textArea.value = select[0].text //Pega o texto
  selectedAnnotationAnim()
  updateLastNoteLocalStorage() //Salva a ultima anotação
  annotationsName.innerHTML = select[0].name
  //Versão mobile
  if(mobile){
    closeBoxAnnotations()
  }
}


// <----------------> Funções de incrementação <---------------->

//Adiciona o elementos no documento HTML
const addAnnotationToDOM = note => {
  let li = document.createElement("li")
  li.classList.add("note")
  li.id = note.id
  li.innerHTML = `
  <p>${note.name}</p>
  <a href="#" class="material-icons" onclick="deleteAnnototion(${note.id})">clear</a>`

  annotationsUl.prepend(li)
}

//inicializa e atualiza todos os elementos 
const init = () => {
  updateAnnotetionsLocalStorage()
  clearUl()
  
  ANNOTATIONS.forEach(element => {
    addAnnotationToDOM(element)
  });
  
  selectedAnnotationAnim()
}

//Seleciona a ultima anotação edita
SelectStartAnnotation = () => {
  if(getLastNoteLocalStorage() != null){ 
    SELECTED_ANNOTATION = getLastNoteLocalStorage()
    selectAnnotation(SELECTED_ANNOTATION)
  }else{
    SELECTED_ANNOTATION = 0
  }
}


// <----------------> Eventos <---------------->

//Selecionar uma anotação com o click
annotationsUl.addEventListener("click", (event) => {
  ANNOTATIONS.forEach(element => {
    event.toElement.id == element.id ? selectAnnotation(element.id) : null
  });
})


//Salvamento automatico por cada palava digitada
textArea.addEventListener("input", () => {
   
  if(blockWriting()){
    return false 
  }
  ANNOTATIONS.forEach(element => {
    element.id == SELECTED_ANNOTATION ? element.text = textArea.value : null
  })

  init()
})

//Inicialização do programa

init()
SelectStartAnnotation()
blockWriting()

