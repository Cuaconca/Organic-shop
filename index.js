// Get html to hidden scrollbar when open it

var html = document.querySelector("html");

// Get the modal
var modal = document.getElementById("myModal");

var modalContent = document.querySelector(".modal-content");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-content__close")[0];

// When the user clicks on the button, open the modal
function ShowDetailProducts(event) {
    modal.style = "display:block";
    html.style = "overflow:hidden";
    modal.querySelectorAll(".modal-content")[0].style = `display:block`;
    modal.querySelectorAll(
        ".modal-content-login-form"
    )[0].style = `display:none`;

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
    </p>`;

    const parser = new DOMParser();
    let doc = parser.parseFromString(priceProduct, "text/html");
    priceProduct = doc.body.childNodes[0];

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
        // modalContent.style = `display: none`;
        html.style = "overflow:visible";
    }
};

// ====#=== Login Form ===#===

function LoginForm() {
    modal.style = "display:flex";
    html.style = "overflow:hidden";

    modal.querySelectorAll(".modal-content")[0].style = `display:none`;
    modal.querySelectorAll(
        ".modal-content-login-form"
    )[0].style = `display:block`;

    modal.querySelectorAll(".modal-content-login-form")[0].style = `
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    margin: 2% auto; /* 15% from the top and centered */
    padding: 40px 20px;
    border: 1px solid #888;
    width: 35%; /* Could be more or less, depending on screen size */
    animation-name: animatetop;
    animation-duration: 0.4s;
    position: relative;
    margin: auto;
    `;
}

var buttonSignUp = document.getElementById("button-signup")

buttonSignUp.onclick = function(event) {
    document.querySelector(".login-form__heading").innerText = "Sign up"
}

// ===#=== Sidebar ===#===

var btnShowSidebar = document.querySelector(".widget-cart");

var sideBar = document.querySelector(".sidebar");
var sideBarContainer = sideBar.querySelector(".container");

btnShowSidebar.onclick = function (event) {
    sideBar.style = `display: block`;
};

sideBar.onclick = function (event) {
    if (event.target == sideBar) {
        sideBar.style = `display: none`;
    }
};

// ===#=== Check out ===#===

var btnCheckOut = document.getElementById("button-checkout");

var checkoutForm = document.querySelector(".modal-content-checkout-form");

btnCheckOut.onclick = function (event) {
    sideBar.style = `display: none`;

    modal.style = "display:block";
    document.querySelector(".modal-content-login-form").style = `display:none`;
    checkoutForm.style = `display:block`;
    html.style = `overflow: hidden`;
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style = `display: none`;

        modalContent.style = `display: none`;
        checkoutForm.style = `display: none`;
        html.style = `overflow: auto`;
    }
};
