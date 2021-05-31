let form = ((d) => {
  const $form = d.querySelector(".contact-form"),
  $loader = d.querySelector(".contact-form-loader"),
  $response = d.querySelector(".contact-form-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/dietrich.fdez@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    }).then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);
      location.hash = "#thx";
      $form.reset();
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Oops, something happened. Please try again"
      $response.querySelector("h3").innerHTML = `Error ${err.status}: ${message}`;
    }).finally(()=> {
      $loader.classList.add("none");
      setTimeout(() => {
        location.hash = "#close";
      }, 3000);
    });
  });
})(document);

export {form};