// Get html to hidden scrollbar when open it

var html = document.querySelector("html");

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-content__close")[0];

// When the user clicks on the button, open the modal
function ShowDetailProducts(event) {
    modal.style = "display:block";
    html.style = "overflow:hidden";

    var e = event.target.parentElement;
    var imgProduct = e.querySelector(".info-img").cloneNode(true);
    imgProduct.className = "modal-content__img";

    var descProduct = e.querySelector(".info__desc").cloneNode(true);
    // descProduct.className = "modal-content__heading"

    var titleProduct = e.querySelector(".info__title").cloneNode(true);
    titleProduct.className = "modal-content__heading";

    var priceProduct = e.querySelector(".info__price").cloneNode(true);
    priceProduct = `<p class="modal-content__price">
    <span>${priceProduct.innerHTML}</span> + Free Shipping
    </p>`

    const parser = new DOMParser();
    let doc = parser.parseFromString(priceProduct, 'text/html');
    priceProduct = doc.body.childNodes[0]
    

    // Replace image
    modal
        .querySelector(".modal-content")
        .querySelector(".modal-wrapper")
        .replaceChild(
            imgProduct,
            modal
                .querySelector(".modal-content")
                .querySelector(".modal-wrapper")
                .querySelector(".modal-content__img")
        );

    // Replace title
    modal
        .querySelector(".modal-content")
        .querySelector(".modal-wrapper")
        .querySelector(".modal-wrapper__info")
        .replaceChild(
            titleProduct,
            modal
                .querySelector(".modal-content")
                .querySelector(".modal-wrapper")
                .querySelector(".modal-wrapper__info")
                .querySelector(".modal-content__heading")
        );

    // Replace price
    modal
        .querySelector(".modal-content")
        .querySelector(".modal-wrapper")
        .querySelector(".modal-wrapper__info")
        .replaceChild(
            priceProduct,
            modal
                .querySelector(".modal-content")
                .querySelector(".modal-wrapper")
                .querySelector(".modal-wrapper__info")
                .querySelector(".modal-content__price")
        );
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        html.style = "overflow:visible";
    }
};
