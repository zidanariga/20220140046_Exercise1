function showStats(player) {
  var stats = document.getElementById("stats-" + player);
  if (stats.style.display === "none") {
    stats.style.display = "block";
  } else {
    stats.style.display = "none";
  }
}
