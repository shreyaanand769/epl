const clubs = [
  {
    name: "Manchester City",
    captain: "Kevin De Bruyne",
    points: 89
  },
  {
    name: "Liverpool",
    captain: "Virgil van Dijk",
    points: 85
  },
  {
    name: "Arsenal",
    captain: "Martin Ødegaard",
    points: 83
  },
  {
    name: "Chelsea",
    captain: "Reece James",
    points: 74
  },
  {
    name: "Manchester United",
    captain: "Bruno Fernandes",
    points: 71
  },
  {
    name: "Tottenham",
    captain: "Son Heung-min",
    points: 69
  }
];

const container = document.getElementById("clubContainer");

clubs.forEach(club => {
  const box = document.createElement("div");
  box.className = "club-box";
  box.setAttribute("data-club", club.name);

  box.innerHTML = `
    <h2>${club.name}</h2>
    <div class="club-info">
      <p><strong>Captain:</strong> ${club.captain}</p>
      <p><strong>Points:</strong> ${club.points}</p>
    </div>
  `;

  box.addEventListener("click", () => {
    const info = box.querySelector(".club-info");
    info.style.display = info.style.display === "block" ? "none" : "block";
  });

  container.appendChild(box);
});
