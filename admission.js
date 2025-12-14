const form = document.querySelector(".form-card");

form.addEventListener("submit", e => {
  e.preventDefault();

  const name = form.querySelector('[name="name"]').value;
  const email = form.querySelector('[name="email"]').value;
  const phone = form.querySelector('[name="phone"]').value;
  const stream = form.querySelector("select").value;

  if (!name || !email || !phone || !stream) {
    alert("Please fill all required fields");
    return;
  }

  const confirmSubmit = confirm("Do you want to submit the enquiry?");
  if (!confirmSubmit) return;

  const enquiry = { name, email, phone, stream };
  localStorage.setItem("admissionEnquiry", JSON.stringify(enquiry));

  alert("Enquiry submitted successfully");
  location.href = "index.html";
});
