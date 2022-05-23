function komentarz() {
  let pseudonym = document.getElementById("pse").value;
  let comment = document.getElementById("com").value;
  if (pseudonym.length == 0) {
    console.log("pseudonim nie moze byc pusty");
    return;
  }
  if (pseudonym.length > 24) {
    console.log("pseudonim moze miec max 24 znaki");
    return;
  }
  if (comment.length == 0) {
    console.log("komenatarz nie moze byc pusty");
    return;
  }
  if (comment.length > 128) {
    console.log("komenatarz moze miec maks 128 znaków");
    return;
  }
  let div1 = document.getElementById("div1");
  let gowno =
    '<div class="comment"><h2>' +
    pseudonym +
    "</h2><p>" +
    comment +
    "</p></div>";
  div1.innerHTML = gowno + div1.innerHTML;
}
