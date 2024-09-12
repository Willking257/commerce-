document.querySelectorAll('.toggle-chevron').forEach(function(chevron) {
    chevron.addEventListener('click', function() {
        let text = this.parentElement.nextElementSibling; // Obtient le <p> suivant le <p> contenant le chevron
        if (text.classList.contains('expanded')) {
            text.classList.remove('expanded');
            this.classList.remove('bxs-chevron-up');
            this.classList.add('bx-chevron-down');
        } else {
            // Ferme toutes les autres sections ouvertes
            document.querySelectorAll('.toggle-text.expanded').forEach(function(openText) {
                openText.classList.remove('expanded');
                openText.previousElementSibling.querySelector('.toggle-chevron').classList.remove('bxs-chevron-up');
                openText.previousElementSibling.querySelector('.toggle-chevron').classList.add('bx-chevron-down');
            });

            // Ouvre la section actuellement cliquée
            text.classList.add('expanded');
            this.classList.remove('bx-chevron-down');
            this.classList.add('bxs-chevron-up');
        }
    });
});
