const form = document.querySelector("form");
const heSoAInput = document.querySelector("#he-so-a");
const heSoBInput = document.querySelector("#he-so-b");
const ketQuaDiv = document.querySelector("#ket-qua");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const heSoA = parseInt(heSoAInput.value);
  const heSoB = parseInt(heSoBInput.value);

  if (heSoA === 0) {
    if (heSoB === 0) {
      ketQuaDiv.textContent = "Phương trình vô số nghiệm!";
    } else {
      ketQuaDiv.textContent = "Phương trình vô nghiệm!";
    }
  } else {
    const nghiemX = -heSoB / heSoA;
    ketQuaDiv.textContent = `Nghiệm x = ${nghiemX}`;
  }
});
