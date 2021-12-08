// Variables. Llamar con los id de sus elementos
const Modal = document.querySelectorAll(".modalClick");
const Popup = document.getElementById("ModalPopup")
const closePopup = document.querySelector(".button-close-popup")
const ModalPopupContent = document.querySelector(".modalPopupContent")
console.log(Modal)
// Evento
Modal.forEach(item=> {
    item.addEventListener('click', event =>{
        Popup.classList.add("MostrarPopup");
        Popup.classList.remove("popup-inicial");
        ModalPopupContent.style.transform = "translateY(0rem)";
        ModalPopupContent.style.transition = "1.5s ease"
        ModalPopupContent.style.border = "9px solid #000"
    })
});
closePopup.addEventListener('click', CloseModal);
Popup.addEventListener('click', modalBackgrounds)
// Funcion

function CloseModal() {
    Popup.classList.remove("MostrarPopup");
    ModalPopupContent.style.transform = null;
    ModalPopupContent.style.transition = null
}   
function modalBackgrounds() {
    Popup.classList.remove("MostrarPopup");
    ModalPopupContent.style.transform = null;
    ModalPopupContent.style.transition = null
}