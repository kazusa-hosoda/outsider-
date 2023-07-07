const modalBtns = document.querySelectorAll(".modal-btn")
const closeBts = document.querySelectorAll(".modal-close")

window.onclick = function (event) {
    if (event.target.className == "modal") {
        event.target.style.display = "none";
    }
}

modalBtns.forEach(function (btn) {
    btn.onclick = function () {
        let modal = btn.getAttribute("data-modal")
        // console.log(document.getElementById(modal))
        // console.log(modal)
        document.getElementById(modal).style.display = "block"
    }

})

closeBts.forEach(function (btn) {
    btn.onclick = function () {
        let modal = btn.closest(".modal")
        modal.style.display = "none"
    }
})
