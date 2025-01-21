const textbox = document.getElementById("textbox");
const ctk = document.getElementById("ctk");
const ktc = document.getElementById("ktc");
const result = document.getElementById("result");
let t;

function convert() {
  if (ctk.checked) {
    t = Number(textbox.value);
    t = (t * 9) / 5 + 32;
    result.textContent = t.toFixed(1) + "F";
  } else if (ktc.checked) {
    t = Number(textbox.value);
    t = (t - 32) * (5 / 9);
    result.textContent = t.toFixed(1) + "F";
  } else {
    result.textContent = "select  unit";
  }
}
