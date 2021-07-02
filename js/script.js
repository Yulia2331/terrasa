document.addEventListener("DOMContentLoaded", function() {
    
    const modalTrigger = document.querySelectorAll('.call-trig'),
        modal = document.querySelector('.call__modal');

        modalTrigger.forEach((i) =>{
            i.addEventListener('click', openModal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal.querySelector('.modal__dialoge') || e.target === modal.querySelector('.modal__content') || e.target === modal.querySelector('.close')){
                closeModal();
            }     
        });  

        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape" && !modal.classList.contains('hide')) { 
                closeModal();
            }
        });

        function openModal () {
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        }
    
        function closeModal () {
            modal.classList.add('hide');
            document.body.style.overflow = ''; 
        }

    const catalogeMenuTrigger = document.querySelector('.cataloge-btn'),
            catalogeMenu = document.querySelector('.cataloge__nav');
    
            catalogeMenuTrigger.addEventListener('click', () => {
                catalogeMenu.classList.toggle('hide');
            });
        // const mobMenuTrigger = document.querySelectorAll('.mob-menu'),
        // mobMenu = document.querySelector('.mob-menu__nav');

        // mobMenuTrigger.forEach((i) =>{
        //     i.addEventListener('click', () => {
        //         mobMenu.classList.toggle('hide');
        //     });
        // });

  });