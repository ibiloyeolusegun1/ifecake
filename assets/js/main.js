let navMenu = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navMenu.classList.toggle('active');
}
window.onscroll = () =>{
    navMenu.classList.remove('active');
}



/*================= Search box toggle =================*/
let search = document.querySelector('.search');
document.querySelector('#search').onclick=() =>{
    search.classList.toggle('active');
}

/*================= Whatsapp toggle =================*/
let loginForm = document.querySelector('.chat-form-container');
document.querySelector('#whatsapp-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}
document.querySelector('#close-whatsapp-btn').onclick = () =>{
    loginForm.classList.remove('active');
}

function whatsapp(){
    var name = document.getElementById("Wname").value;
    var phone = document.getElementById("Wphone").value;
    var email = document.getElementById("Wemail").value;
    var message = document.getElementById("Wmessage").value;

    var url = "https:/wa.me/09033382694?text="
    +"Name : "+Wname+"%0a"
    +"Phone : "+Wphone+"%0a"
    +"Email : "+Wemail+"%0a"
    +"Message : "+Wmessage+"%0a"

    window.open(url, '_blank').focus();
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
