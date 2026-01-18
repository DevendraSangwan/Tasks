document.body.style.margin = "0";
document.body.style.padding = "0";

const style = document.createElement("style");
style.textContent = `
  .hello {
    background-image: url("https://img.freepik.com/free-photo/flat-lay-notebook-with-list-desk_23-2148938724.jpg?w=1380&t=st=1705589139~exp=1705589739~hmac=bf9e192e8095ceb6b0a426d7b81a0d08eae620dade1c54099a7304bc0510370a");
    background-size: cover;
    height: 100vh;
    padding: 30px;
  }
`;
document.head.appendChild(style);

const div = document.createElement("div");
div.classList.add("hello");
document.body.appendChild(div);

const heading = document.createElement("h1");
heading.innerText = "Todolist";
heading.style.color = "#000000";
heading.style.textAlign = "center";
div.appendChild(heading);

const para1 = document.createElement("p");
para1.innerText = "Each day I will accomplish one thing on my todo list.";
para1.style.color = "#000000";
para1.style.textAlign = "center";
div.appendChild(para1);

const h4 = document.createElement("h4");
h4.innerText = "Read a Book";
h4.style.color = "#000000";
h4.style.textAlign = "center";
div.appendChild(h4);

const para2 = document.createElement("p");
para2.innerText =
  "I don't think that the human race will survive the next thusand years, unless we spread into space. There are too many accidents that can befall life on a single planet. But I'm an optimist......";
para2.style.color = "#000000";
para2.style.fontSize = "18px";
para2.style.textAlign = "center";
div.appendChild(para2);

const buttonDiv = document.createElement("div");
buttonDiv.style.textAlign = "center";

const button = document.createElement("button");
button.innerText = " Start ";
button.style.color = "#ffffff";
button.style.backgroundColor = "#323f4b";
button.style.padding = "10px 20px";
button.style.border = "none";
button.style.borderRadius = "8px";

buttonDiv.appendChild(button);
div.appendChild(buttonDiv);

const skipPara = document.createElement("p");
skipPara.innerText = "Don't Skip Introduction";
skipPara.style.color = "#000000";
skipPara.style.textDecoration = "underline";
skipPara.style.textAlign = "center";
div.appendChild(skipPara);
