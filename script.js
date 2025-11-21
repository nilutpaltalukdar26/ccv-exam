// Simple fun facts for each place
const facts = {
  "gongar lake":
    "Gongar Lake is known for its crystal-clear water that reflects the surrounding peaks like a mirror.",
  "mago valley":
    "Mago Valley is a popular starting point for several Himalayan treks and is rich in biodiversity.",
  "bumla pass":
    "Bumla Pass is located at over 15,000 feet and is covered with snow for most of the year.",
  "sela pass":
    "Sela Pass is home to the famous Sela Lake, which often freezes completely during winter."
};

// Handle fun fact button clicks
const buttons = document.querySelectorAll(".fact-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const placeName = card.dataset.name;
    const fact = facts[placeName] || "This is a beautiful place in Arunachal Pradesh!";
    alert(fact);
  });
});

// Search/filter functionality
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", function () {
  const searchText = this.value.toLowerCase();

  cards.forEach((card) => {
    const name = card.dataset.name;
    if (name.includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

