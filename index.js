const links = document.querySelectorAll('.nav-links a');
const paginas = document.querySelectorAll('.pagina');
const hero = document.querySelector('.hero');


links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
       
        const id = link.href.split('#')[1];


        if (id === "inicio") {
            hero.classList.remove('oculto');
            paginas.forEach(pagina => {
                pagina.classList.remove('activa');
            });
            return;
        }


        hero.classList.add('oculto');
       
        paginas.forEach(pagina => {
            pagina.classList.remove('activa');
        });


        document.getElementById(id).classList.add('activa');
    });
});
