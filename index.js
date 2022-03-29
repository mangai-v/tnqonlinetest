let content = document.querySelector("#content");
let find = document.getElementById("find");
let submit = document.getElementById("submit");

submit.addEventListener("click", e => {
  e.preventDefault();

  let words = content.value;
  let value = find.value;
  let array = words.split(" ");
  let count = 0;

  let filtered = array.forEach((val, index, array) => {
    if (val === value) {
      count++;
    }
  });
  result.textContent = `${count} Matches found`;
});
