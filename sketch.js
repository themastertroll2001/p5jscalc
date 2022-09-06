let buttons = [];
let math = [""];
let result;
let input;
let button0;
let buttonEquals;

function setup() {
  noCanvas();
  result = createP("&nbsp;");
  input = createInput("");
  buttons.push(result); 
  buttons.push(input); 
  createElement("br"); 
  buttons.push(createButton("7")); 
  buttons.push(createButton("8")); 
  buttons.push(createButton("9")); 
  buttons.push(createButton("/ ")); 
  createElement("br");
  buttons.push(createButton("4"));
  buttons.push(createButton("5")); 
  buttons.push(createButton("6")); 
  buttons.push(createButton("*"));
  createElement("br");
  buttons.push(createButton("1"));
  buttons.push(createButton("2"));
  buttons.push(createButton("3")); 
  buttons.push(createButton("+")); 
  createElement("br");
  button0 = createButton("0");
  buttons.push(button0);
  buttons.push(createButton("."));
  buttons.push(createButton("-"));
  createElement("br");
  buttonEquals = createButton("=");
  buttons.push(buttonEquals);

  for (let index = 0; index < buttons.length; index += 1) {
    buttons[index]
      .style("padding", "5px 30px")
      .style("width", "120px")
      .style("border-radius", "25px")
      .style("font-size", "2em")
      .style("background-color", "rgb(46, 229, 201)")
      .style("color", "rgb(252, 2, 2)")
      .style("border-style", "double")
      .style("border-color", "rgb(2, 252, 192)")
      .style("cursor", "pointer")
      .style("outline", "none")
      .style("margin", "0")
      .mousePressed(OnButtonClicked);
  }

  button0.style("width", "240px");
  buttonEquals.style("width", "480px");

  input
    .style("font-size", "2em")
    .style("cursor", "default")
    .style("width", "420px")
    .style("passing-left", "10px")
    .style("passing-right", "10px");

  result
    .style("width", "421px")
    .style("background-color", "rgb(180, 231, 229)")
    .style("text-align", "left")
    .style("font-size", "4em");
}

function OnButtonClicked() {
  let value = this.html();

  if (value === "+") {
    math.push(value);
    math.push("");
  } else if (value === "-") {
    math.push(value);
    math.push("");
  } else if (value === "*") {
    math.push(value);
    math.push("");
  } else if (value === "/") {
    math.push(value);
    math.push("");
  } else if (value === "=") {
    // Do the math
    for (let index = 0; index < math.length; index++) {
      if (math[index] === "*") {
        math.splice(index - 1, 3, math[index - 1] * math[index + 1]);
        index--;
      }
      if (math[index] === "/") {
        math.splice(index - 1, 3, math[index - 1] / math[index + 1]);
        index--;
      }
    }
    for (let index = 0; index < math.length; index++) {
      if (math[index] === "+") {
        math.splice(
          index - 1,
          3,
          parseFloat(math[index - 1]) + parseFloat(math[index + 1])
        );
        index--;
      }
      if (math[index] === "-") {
        math.splice(index - 1, 3, math[index - 1] - math[index + 1]);
        index--;
      }
    }
    result.html(math.join(" "));
    math.length = 0;
    math.push("");
  } else {
    math[math.length - 1] += value;
  }

  input.value(math.join(" "));
}
