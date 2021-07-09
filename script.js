const form = document.querySelector(".form");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    document.body.setAttribute("data-state", "thank-you");
  });
}
