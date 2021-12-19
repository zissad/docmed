// navigation Drop Down menu 
const sub_1 = document.querySelector('ul li.sub-menu');
const sub_2 = document.querySelector('ul li.sub-menu-1');

sub_1.onclick = () => {
    sub_1.classList.toggle('active');
    sub_2.classList.remove('active');
}

sub_2.onclick = () => {
    sub_2.classList.toggle('active');
    sub_1.classList.remove('active');
}
// navigation Responsive 

const bar = document.querySelector('nav .container .bar .fa-bars');
const menuList = document.querySelector('nav .container .nav-right ul');

bar.onclick = () => {
    menuList.classList.toggle('active')
}

// Tab 

const btn_1 = document.querySelector('#tab_bt1');
const btn_2 = document.querySelector('#tab_bt2');
const btn_3 = document.querySelector('#tab_bt3');

const layout_1 = document.querySelector('#layout_1');
const layout_2 = document.querySelector('#layout_2');
const layout_3 = document.querySelector('#layout_3');

btn_1.onclick = () => {
    btn_1.style.background = '#fff';
    btn_2.style.background = '#F5FBFF';
    btn_3.style.background = '#F5FBFF';

    layout_1.classList.add('active');
    layout_2.classList.remove('active');
    layout_3.classList.remove('active');
}
btn_2.onclick = () => {
    btn_2.style.background = '#fff';
    btn_1.style.background = '#F5FBFF';
    btn_3.style.background = '#F5FBFF';

    layout_2.classList.add('active');
    layout_1.classList.remove('active');
    layout_3.classList.remove('active');
}
btn_3.onclick = () => {
    btn_3.style.background = '#fff';
    btn_2.style.background = '#F5FBFF';
    btn_1.style.background = '#F5FBFF';

    layout_3.classList.add('active');
    layout_2.classList.remove('active');
    layout_1.classList.remove('active');
}
// carusol 
const slider = document.querySelector('#slider');

const left_arrow = document.querySelector('.fa-chevron-left');
const right_arrow = document.querySelector('.fa-chevron-right');

left_arrow.addEventListener('click', () => {
    slider.scrollLeft -= 305;
})

right_arrow.addEventListener('click', () => {
    slider.scrollLeft += 305;
})

const maxScrollWidth = slider.scrollWidth - slider.clientWidth;

function autoPlay() {
    if(slider.scrollLeft > (maxScrollWidth - 1)){
        slider.scrollLeft -= maxScrollWidth;
    }
    else {
        slider.scrollLeft += 305;
    }
}

let play =  setInterval(autoPlay, 5000);