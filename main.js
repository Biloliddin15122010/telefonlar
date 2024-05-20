let smallImg = document.querySelectorAll(".smallImg img");
let bigImg = document.querySelector(".bigImg img");

smallImg.forEach((item) => {
    item.addEventListener("click", () => {
        bigImg.parentElement.children[1].innerHTML = item.parentElement.children[1].innerHTML;
        bigImg.setAttribute("src", item.src);
    });
});