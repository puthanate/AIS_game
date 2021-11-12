const cards = document.querySelectorAll('.ais-card');

function flipCard(){
    this.classList.toggle('flip');
}
cards.forEach(card => card.addEventListener('click',flipCard));

(function shuffle(){
    cards.forEach(card =>{
        let randomPos = Math.floor(Math.random() * 8);
        card.style.order = randomPos;
    });
})();