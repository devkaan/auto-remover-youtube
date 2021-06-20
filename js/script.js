allOverlays = document.querySelectorAll(".ytp-ce-element")

if (allOverlays.length == 0) console.log("There is no boxes at the end!")
else {
  allOverlays.forEach(item => {
    item.remove();
  });
  console.log("All boxes removed successfuly by Auto remover!!");
}
