/*Sticky header*/
    const onScroll = () => {
        const navbar = document.getElementsByTagName('header')[0];
        const scroll = document.documentElement.scrollTop
        const cureent_postion = document.documentElement.clientWidth;
        if(cureent_postion > 768){
            if(typeof navbar !== 'undefined'){
                if (scroll > 300) {
                    navbar.classList.add("stick_header");
                }else {
                    navbar.classList.remove("stick_header")
                }
            }
        }

        const scrollclass = document.getElementsByClassName('scrollup')[0];
        const curent_lengt  = document.getElementsByClassName('scrollup').length;
        if(curent_lengt == 1){
            if (scroll > 300) {
            scrollclass.classList.add("scrollhome");
            }else {
                scrollclass.classList.remove("scrollhome")
            }
        }
        
        if (scroll > 2200) {
            document.querySelectorAll('.skills .chart .bar ').forEach(anchor => {
            let newe = anchor.getAttribute('per'); 
            anchor.style.width= newe+'%';
            })
        }   
    }
    window.addEventListener('scroll', onScroll)
//let mobile_toggle = document.querySelector(".toggle_menu");