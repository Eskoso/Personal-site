window.addEventListener("load", function () {
    var loading = document.querySelector(".loading");
    var loader = document.querySelector(".loader");
    document.body.style.overflow = "hidden";
    setTimeout(function () {
        loading.style.opacity = 0;
        loader.style.opacity = 0;
        document.body.style.overflow = "auto";
    }, 1000); 
    setTimeout(function () {
        loading.style.display = "none"; 
        loader.style.display = "none"; 
    }, 1600); 
});

var copy = document.querySelector(".middle-content").cloneNode(true);
document.querySelector(".slider").appendChild(copy);