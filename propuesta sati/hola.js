window.addEventListener('load', function() {

    new Glider(document.querySelector('.g-glider'), {
        // Mobile-first defaults
        slidesToShow: 2,
        slidesToScroll: 1,
        scrollLock: true,
        dots: '.g-dots',
        rewind: true,
        arrows: {
            prev: '.prev',
            next: '.next'
        },
        responsive: [{
            // screens greater than >= 775px
            breakpoint: 775,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 3,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
            }
        }, {
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
            }
        }]
    });




    new Glider(document.querySelector('.cont-carrucel2 .g-glider'), {
        // Mobile-first defaults
        slidesToShow: 2,
        slidesToScroll: 1,
        scrollLock: true,
        dots: '.cont-carrucel2 .g-dots',
        rewind: true,
        arrows: {
            prev: '.cont-carrucel2 .prev',
            next: '.cont-carrucel2 .next'
        },
        responsive: [{
            // screens greater than >= 775px
            breakpoint: 775,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 3,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
            }
        }, {
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
            }
        }]
    });
});





function show() {

    document.getElementById('sidebar').
    classList.toggle('active');
}

window.addEventListener("scroll",
    function() {

        var header = document.querySelector("nav");
        header.classList.toggle("sticky", window.scrollY > 90);
    });

function hidenBar() {

    document.getElementById('check').checked = false;
}

document.getElementById('sub1').onclick = function() {

    var submenu = document.getElementById("sub1list");
    submenu.classList.toggle("sub1_show");

    var iconRow = document.getElementById("row1");
    iconRow.classList.toggle("rotate");

}




// var medida = window.innerWidth;

// console.log("medida", medida);
// if (medida < 400) {
//     document.write("<h3>Its a Mobile Device !</h3>");

//     let header = document.querySelector("header");

//     header.style.visibility = "hidden";

//     console.log("ta chiquito");

// } else {
//     let header = document.getElementById("sidebar");

//     header.style.visibility = "hidden";
//     console.log("ta bien");
// }