const btn = document.getElementById('btn');
const reseaux = document.querySelector('.reseaux');

btn.addEventListener("click", () => {         

    if (reseaux.classList.contains('hidden')){
    reseaux.classList.remove('hidden');
} else  {
    reseaux.classList.add('hidden');
}
          
})