export const vote = function () {
  const showVoteNow = document.querySelectorAll(
    ".previous__view-link .vote-now"
  );

  for (var i = 0; i < showVoteNow.length; i++) {
    showVoteNow[i].addEventListener("click", showButtonsVote);
  }
};

function showButtonsVote(e) {
  var parent = this.parentElement;

  if (!parent.classList.contains("active")) {
    parent.classList.add("active");
  } else {
    parent.classList.remove("active");
  }
}
