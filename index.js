const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n = 0;

function changeSlide(){
    for(let i = 0;i<imgs.length;i++){
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}

changeSlide();

prev_btn.addEventListener('click',function(e){
    if(n>0){
        n--;
    }else{
        n = imgs.length-1;
    }
    changeSlide();
});

next_btn.addEventListener('click',function(e){
    if(n < imgs.length-1){
        n++;
    }else{
        n = 0;
    }
    changeSlide();
});

const scrollContainers = document.querySelectorAll(".products");
for (const item of scrollContainers) {
    item.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}
