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


const ball = document.createElement("div");
ball.className = "cursor"
document.body.appendChild(ball);

const ballSize = 50; 

document.addEventListener("mousemove", (e) => {
    const x = e.clientX - ballSize / 2; 
    const y = e.clientY - ballSize / 2;

    ball.style.transform = `translate(${x}px, ${y}px)`;
});

document.querySelectorAll("[data-hover-enabled]").forEach((element) => {
    element.addEventListener("mouseenter", () => {
        ball.style.width = "55px"; 
        ball.style.height = "55px"
    });

    element.addEventListener("mouseleave", () => {
        ball.style.width = "45px"; 
        ball.style.height = "45px" 
    });
});

document.addEventListener("mousedown", () => {
        ball.classList.add("clicked");
});

document.addEventListener("mouseup", () => {
    ball.classList.remove("clicked");
});


var copy = document.querySelector(".middle-content").cloneNode(true);
document.querySelector(".slider").appendChild(copy);