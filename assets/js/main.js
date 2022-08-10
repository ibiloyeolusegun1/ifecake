let navMenu = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navMenu.classList.toggle('active');
}
window.onscroll = () =>{
    navMenu.classList.remove('active');
}




let search = document.querySelector('.search');
document.querySelector('#search').onclick=() =>{
    search.classList.toggle('active');
}


/*================= PRODUCT SLIDER =================*/
var swiper = new Swiper(".product-row",{
    spaceBetween: 14,
    centeredSlides: true,
    loop: 'true',
    autoplay:{
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        460: {
            slidesPerView: 2,
        },
        800: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});



/*================= REVIEW SLIDER =================*/
var swiper = new Swiper(".review-row",{
    spaceBetween: 30,
    centeredSlides: true,
    loop: 'true',
    autoplay:{
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});



/*================= CATEGORY ITEM FILTER =================*/
const filterContainer = document.querySelector(".category-filter-inner"),
      filterBtns = filterContainer.children,
      totalFilterBtn = filterBtns.length,
      portfolioItems = document.querySelectorAll(".category-item"),
      totalPortfolioItem = portfolioItems.length;


      for(let i=0; i<totalFilterBtn; i++){
          filterBtns[i].addEventListener("click", function(){
              filterContainer.querySelector(".active").classList.remove("active");
              this.classList.add("active");

              const filterValue = this.getAttribute("data-filter");
              for(let k=0; k<totalPortfolioItem; k++){
                  if(filterValue === portfolioItems[k].getAttribute("data-category")){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                  }
                  else{
                    portfolioItems[k].classList.add("hide");
                    portfolioItems[k].classList.remove("show");
                  }
                  if(filterValue === "all"){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                  }
              }
          })
      }
