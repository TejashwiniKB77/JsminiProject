const contactForm = document.querySelector(".form-card");

contactForm.addEventListener("submit", e => {
  e.preventDefault();

  const data = new FormData(contactForm);

  const messageData = {
    name: data.get("name"),
    email: data.get("email"),
    message: data.get("message")
  };

  localStorage.setItem("contactMessage", JSON.stringify(messageData));

  alert("Message sent successfully");
  contactForm.reset();
});
