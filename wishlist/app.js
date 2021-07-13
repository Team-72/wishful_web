const modal = document.getElementById('modal');
const closeModalBtn= document.getElementById('close');
const openModalBtn = document.getElementById('open');

// openModalBtn.addEventListener('click', openModal(modal));
// closeModalBtn.addEventListener('click', closeModal(modal));
// window.addEventListener('click', outsideClick);

openModalBtn.addEventListener('click', function () {
    if (modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');
});
// function openModal(modal) {
//     if (modal == null) return
//     modal.classList.add('active');
//     overlay.classList.add('active');
// };

closeModalBtn.addEventListener('click', function (){
    if (modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
});

// function closeModal(modal) {
//     if (modal == null) return
//     modal.classList.remove('active');
//     overlay.classList.remove('active');
// };

// function outsideClick(e) {
// if (e.target == modal) {

// }
// }

const button = document.querySelector('#button');
const select = document.querySelector('#dropdown');
const options = document.querySelectorAll('.dropdown label');
selectLabel = document.querySelector('#select-label');

button.addEventListener('click', function(e) {
    e.preventDefault();
    toggleHidden();
})

function toggleHidden() {
    select.classList.toggle('show');
}

options.forEach(function(option) {
    option.addEventListener('click', function(e) {
        setSelectTitle(e);
    })
})

function setSelectTitle(e) {
    const labelElement = document.querySelector(`label[for="${e.target.id}"]`).innerText;
    selectLabel.innerText = labelElement;
    toggleHidden();
}