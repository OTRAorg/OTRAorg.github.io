///////////////////////////////////////////////
// copies text (e.g. from code) into clipboard
function copyText(id) {
  ta = document.createElement('textarea');
  ta.value = id.textContent;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);

   // Change button value to "Copied!"
  var buttons = document.getElementsByClassName('copyButton');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].innerText = "Copied!";
  }

  // Change button value back to "Copy" after 2 seconds
  setTimeout(function() {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].innerText = "Copy";
    }
  }, 2000);
}