// function validcircle(){
// let nylon = document.querySelector("main");
// let spoon = document.getElementById
//   }



function validcircle() {
    let theMain = document.querySelector(".main");
    // let circle = document.querySelector(".numbercircled");
    let circle = document.querySelector(".rating-form");
    let thankYou = document.querySelector(".thank-you-respond");

    // preventDefault();
    // the query won't refresh*
    let to_select = "input[name=cirNo]:checked";
    let check_outInput = document.querySelector(to_select);

    // A must to select from the numbers to go further*
    if (check_outInput !== null) {
        let selectedNumber = document.querySelector("to_select");
        selectedNumber.textContent =
            "You selected" + check_outInput.getAttribute("value") + "out of 5";
        theMain.classList.add("hidden");
        thankYou.classList.remove("hidden");
        circle.addEventListener("submit");
    }
}
// cirl.addEventListener("submit");
