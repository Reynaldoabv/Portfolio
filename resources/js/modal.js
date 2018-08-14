const contactModal = document.querySelector(".button-cover");

contactModal.addEventListener("click", e => {
    console.log(e);
    e.preventDefault();

    const modalToggle = e.target.closest("button-cover");

    if(! modalToggle) return;
    const closeButton = modal.querySelector("modal-close");

    modalToggle.classList.add("is-open");

    closeButton.addEventListener("click", _ => {
        modal.classList.remove("is-open");
    })
})