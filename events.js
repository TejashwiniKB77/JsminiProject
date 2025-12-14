const eventsContainer = document.querySelector(".events-list");

const eventsData = [
  { title: "Annual Sports Day", date: "20 Feb 2025", desc: "Athletics & games" },
  { title: "Science Exhibition", date: "05 Mar 2025", desc: "Student projects" },
  { title: "Career Fair", date: "10 Apr 2025", desc: "Career guidance" }
];

function simulateDelay(callback) {
  setTimeout(callback, 1000);
}

function renderEvents() {
  eventsData.forEach(event => {
    const article = document.createElement("article");
    article.className = "event";
    article.innerHTML = `
      <h3>${event.title}</h3>
      <p>${event.date}</p>
      <p>${event.desc}</p>
      <button class="copy-btn">Copy</button>
    `;
    eventsContainer.appendChild(article);
  });

  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      navigator.clipboard.writeText(e.target.parentElement.innerText);
      alert("Event copied to clipboard");
    });
  });
}

async function loadEvents() {
  await new Promise(resolve => simulateDelay(resolve));
  renderEvents();
}

loadEvents();
