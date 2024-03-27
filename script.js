function addNumber() {
  var num1 = parseFloat(document.querySelector("#input-1").value);
  var num2 = parseFloat(document.querySelector("#input-2").value);
  var result = document.querySelector("#result");
  var add = num1 + num2;
  result.innerText = "Result : " + add;
}
