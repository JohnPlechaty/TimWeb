// get current year
/*(function () {
    var year = new Date().getFullYear();
    document.querySelector("#currentYear").innerHTML = year;
})();*/


document.addEventListener("DOMContentLoaded", function() {
    console.log('Carousel loaded');
    const carousel = document.getElementById("carousel-inner");
    const firstImage = document.querySelector(".first-image");
  
    firstImage.onload = function() {
      const imageHeight = firstImage.naturalHeight;
      carousel.style.maxHeight = `500px`;
      console.log('set ' + carousel + ' maxHeight to ' + imageHeight +' px')
    };
  
    // If the image is cached and already loaded, trigger the onload manually
    if (firstImage.complete) {
      firstImage.onload();
    }
  });
  