/* Function for changing images in full or large screen devices */
function changeImage(n){
    var thumbnail = document.getElementsByClassName("thumbnail_container");
    for (i = 0; i < thumbnail.length; i++) {
        thumbnail[i].className = thumbnail[i].className.replace(" selected_thumbnail", "");
      }
    thumbnail[n-1].className += " selected_thumbnail";
    switch(n){
        case 1:

            document.getElementById("display_image").src='images/image-product-1.jpg';
            break;
        case 2:
            document.getElementById("display_image").src='images/image-product-2.jpg';
            break;
        case 3:
            document.getElementById("display_image").src='images/image-product-3.jpg';
            break;
        case 4:
            document.getElementById("display_image").src='images/image-product-4.jpg';
            break;
        default:
            document.getElementById("display_image").src='images/image-product-1.jpg';
    }
    
}

/*This part is where the carosel for small screen devices was created*/
var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slidePosition-1].style.display = "block";
} 

/* This part is for the quantity of product button */
var quantity = 0;
const max_quantity = 10;
const min_quantity = 0
var product_quantity = document.getElementById("product_quantity");
function increaseQuantity(){
  if(quantity!==max_quantity){
    quantity = quantity+1;
    product_quantity.innerHTML = quantity;
  }
}

function decreaseQuantity(){
  if(quantity!==min_quantity){
    quantity = quantity-1;
    product_quantity.innerHTML = quantity;
  }
}

/*For the side bar cancel button */

function hidesidebar(){
  var sidebar = document.getElementById("sidebar");
  sidebar.style.display="none";
  document.body.style.position="";
}

function showsidebar(){
  var sidebar = document.getElementById("sidebar");
  sidebar.style.display = "block";
  document.body.style.position="fixed";
}
