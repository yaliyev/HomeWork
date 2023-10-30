let images = ["../assets/images/breaking-bad-1.jpg","../assets/images/breaking-bad-2.jpg","../assets/images/breaking-bad-3.jpg","../assets/images/breaking-bad-4.jpeg"];

let currentImage = 1;

let sliderImage = document.getElementById('slider-image');

let sliderControlLeftButton = document.getElementById('slider-control-button-left');

let sliderControlRightButton = document.getElementById('slider-control-button-right');

sliderControlLeftButton.addEventListener('click',function(){
    if(currentImage >= 1){
       
       document.getElementById('slider').style.animationName = 'slider-image-movement-right';
       delayPreviousImageAnimation();
    }
});

sliderControlRightButton.addEventListener('click',function(){
    if(currentImage < images.length - 1){
        document.getElementById('slider').style.animationName = 'slider-image-movement-left';
        delayNextImageAnimation();
    }
 });

function previousImage(){

    currentImage--;
    
    sliderImage.src = images[currentImage];
}

function nextImage(){

    currentImage++;
    
    sliderImage.src = images[currentImage];
}

async function delayPreviousImageAnimation(){
    setTimeout(()=>{
        previousImage();
        document.getElementById('slider').style.animationName = 'slider-image-movement-from-left-to-right';
       },1500);
       
}

async function delayNextImageAnimation(){
    setTimeout(()=>{
        nextImage();
        document.getElementById('slider').style.animationName = 'slider-image-movement-from-right-to-left';
       },1500);
       
}