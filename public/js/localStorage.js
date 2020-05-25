/*
* @altor: Arhur Reis
* @github: https://github.com/Arthur-Rs
* @versão: 1.0
* @ultima data de revisão 25/05/2020
* @Descrição: Manipulação do banco de dados local
*/

//Abri o banco local
const storage = localStorage

//Atualiza o banco local
const updateAnnotetionsLocalStorage = () => {
  storage.setItem("your-nopad-annontetions", null)
  storage.setItem("your-nopad-annontetions", JSON.stringify(ANNOTATIONS))
}

//Pega valores do banco local
const getAnnotetionsLocalStorage = () => {
  return storage.getItem("your-nopad-annontetions") == null 
  ? [] : JSON.parse(storage.getItem("your-nopad-annontetions"))
}

//Atualiza a ultima anotação editada
const updateLastNoteLocalStorage = () => {
  storage.setItem("your-nopad-last-annontetions", null)
  storage.setItem("your-nopad-last-annontetions", JSON.stringify(SELECTED_ANNOTATION))
}


//Pega o ultima anotação editada
const getLastNoteLocalStorage = () => {
  return storage.getItem("your-nopad-last-annontetions") == null 
  ? [] : JSON.parse(storage.getItem("your-nopad-last-annontetions"))
}
// <------------------------------------------------->