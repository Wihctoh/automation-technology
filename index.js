const container = document.querySelector(".dropdown_list");
const dropdownListElText = document.querySelector(".dropdown_list_el_text");
const dropdownBtn = document.querySelector(".dropdown_list_img");

container.addEventListener("click", function (event) {
  event.target.appendChild(dropdownListElText);
});

// dropdownBtn[0].addEventListener("click", function () {
//   if (dropdownListElText[0].hidden) {
//     dropdownListElText[0].hidden = false;
//   } else dropdownListElText[0].hidden = true;
// });

// dropdownBtn[1].addEventListener("click", function () {
//   if (dropdownListElText[1].hidden) {
//     dropdownListElText[1].hidden = false;
//   } else dropdownListElText[1].hidden = true;
// });

// dropdownBtn[2].addEventListener("click", function () {
//   if (dropdownListElText[2].hidden) {
//     dropdownListElText[2].hidden = false;
//   } else dropdownListElText[2].hidden = true;
// });

// dropdownBtn[3].addEventListener("click", function () {
//   if (dropdownListElText[3].hidden) {
//     dropdownListElText[3].hidden = false;
//   } else dropdownListElText[3].hidden = true;
// }
// );
