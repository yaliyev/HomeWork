
import {get,getByID,deleteByID,post,put} from './requests.js';


let sliders = document.getElementById('sliders');

let footballers = [];

function loadSliders(){
    sliders.innerHTML = "";

    for(let i = 0;i < footballers.length;i++){
        let swiperSlide = document.createElement("div");
        let swiperTitle = document.createElement("p");

        let swiperImage = document.createElement("img");

        swiperSlide.setAttribute("class","swiper-slide");

        swiperTitle.setAttribute("class","swiper-title");

        swiperImage.src = footballers[i].imageURL;

        swiperTitle.innerText = footballers[i].title;

        swiperSlide.appendChild(swiperTitle);
        swiperSlide.appendChild(swiperImage);

        sliders.appendChild(swiperSlide);
    }
}

(async ()=>{
 footballers = await get();
loadSliders();
})();