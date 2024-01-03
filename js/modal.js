(() => {
  const openModalBtns = document.querySelectorAll("[data-modal-open]");
  const closeModalBtns = document.querySelectorAll("[data-modal-close]");
  const modals = document.querySelectorAll("[data-modal]");
  const body = document.body;

  openModalBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      closeModal(index);
    });
  });

  closeModalBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      closeModal(index);
    });
  });

  function closeModal(index) {
    modals[index].classList.toggle("is-hidden");
    body.classList.toggle("no-scroll");
  }

  const forms = document.querySelectorAll("#subscribe");

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      var message = form.querySelector("#message").value;

      var subscribe = `New message recieved :${message}`;

      var token = "6270391808:AAEeDST2kRZacIxzisJz-GBovp8C8uRHcY0";
      var chat_id = "308432208";
      var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${subscribe}&parse_mode=html`;

      let api = new XMLHttpRequest();
      api.open("GET", url, true);
      api.send();

      console.log("Subscribe successfully sent!");
      form.reset();
      closeModal();
    });
  });
})();
