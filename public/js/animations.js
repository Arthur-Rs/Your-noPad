/*
* @altor: Arhur Reis
* @github: https://github.com/Arthur-Rs
* @versão: 1.0
* @ultima data de revisão 25/05/2020
* @Descrição: animações do programa
*/


//<------------------> Animações  <-------------------->

// Trás o input na tela de nova anotação
const upInputAnim = () => {
  addAnnotationIl.style.display = "flex"
  addAnnotationsBotton.style.display = "none"

  const inputAnimate = addAnnotationIl.animate([
    { 
      marginTop: "10%",
      opacity: "0%"
    },{
      marginTop: "0px",
      opacity: '100%'
    }
  ], 300)
}

// Trás o input na tela de nova anotação
const downInputAnim = () => {

  const animate = addAnnotationIl.animate([
    { 
      position: "inherit",
      left: "0px",
      opacity: "100%"
    },{
      position: "inherit",
      left: "10%",
      opacity: '0%'
    }
  ], 300)

  animate.addEventListener("finish", () => {
    addAnnotationIl.style.display = "none"
    addAnnotationsBotton.style.display = "flex"
    addAnnotation()
  })
}

// Cria uma nova caixa de anotação
const addAnnotationAnim = id => {
  let boxAnimate = document.getElementById(`${id}`)

  boxAnimate.animate([{opacity: "0%"},{opacity:"100%"}],300)
}

//deleta a caixa de anotação
const deleteAnnotationAnim = id => {
  let boxAnimate = document.getElementById(`${id}`)

  animate = boxAnimate.animate([{opacity: "100%"},{opacity:"0%"}],300)
  animate.addEventListener("finish", () => {
    init()
  })
}

// Torna a anotação selecionada personalizada
const selectedAnnotationAnim = () => {
  ANNOTATIONS.forEach(element => {
    note = document.getElementById(`${element.id}`)
    if(element.id == SELECTED_ANNOTATION){  
      note.style.backgroundColor = "#2c7065"
      note.children[0].style.color = "#f1f5f1"
      note.style.borderRadius = "5px"
    }else{
      note.style.backgroundColor = "#dfe9e4"
      note.children[0].style.color = "#2c7065"  
      note.style.borderRadius = "5px 0px 0px 5px"
  }});
}

//<------------------> Animações para mobile  <-------------------->

// Trás as anotações
const getBoxAnnotations = ()=> {
  boxAnnotations.style.display = "flex"
  let animate = boxAnnotations.animate([{
    "left": "-500px",
    "opacity": "0%"
  },{
    "left": "0px",
    "opacity": "100%"
  }],300)
}

//Fecha as anotações
const closeBoxAnnotations = () =>{
  let animate = boxAnnotations.animate([{
    "left": "0px",
    "opacity": "100%"
  },{
    "left": "-500px",
    "opacity": "0%"
  }],300)
  animate.addEventListener("finish", ()=>{
    boxAnnotations.style.display = "none"
  })
}
// <------------------------------------------------->
