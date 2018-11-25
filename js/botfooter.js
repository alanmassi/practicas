               const menu = document.querySelector('.footer'); //selector para el menu
               const burguerButton = document.querySelector('#footer-setting'); //seletor del burger button
                
                burguerButton.addEventListener('click', hideShow)

                function hideShow(){
                    if(menu.classList.contains('is-active')){ //si tiene la clase is-active 
                        menu.classList.remove('is-active'); // lo remueve
                    }else{ //sino la abre
                        menu.classList.add('is-active');//mostramos el menu gracias al classlist
                    }
                }