document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.textAlign = "center";
document.body.style.backgroundColor = "#000000";

const switchStatus = document.createElement("h1");
switchStatus.innerText = "Switched On";
switchStatus.style.color = "#ffffff";
switchStatus.id = "switchstatus";
document.body.appendChild(switchStatus);

const bulb = document.createElement("img");
bulb.src = "offbulb.png";
bulb.style.width = "150px";
bulb.style.height="200px";
document.body.appendChild(bulb);

const cat = document.createElement("img");
cat.src = "cateyes.png";
cat.style.width = "200px";
cat.style.height="200px"
cat.style.display = "block";
cat.style.margin = "20px auto";
document.body.appendChild(cat);

const btnDiv = document.createElement("div");
btnDiv.style.marginTop = "20px";
document.body.appendChild(btnDiv);

const offBtn = document.createElement("button");
offBtn.innerText = "Switch OFF";
offBtn.style.backgroundColor = "#cbd2d9";
offBtn.style.padding = "10px 20px";
offBtn.style.marginRight = "10px";
offBtn.style.border = "none";
offBtn.style.borderRadius = "6px";
btnDiv.appendChild(offBtn);

const onBtn = document.createElement("button");
onBtn.innerText = "Switch ON";
onBtn.style.backgroundColor = "#22c55e";
onBtn.style.padding = "10px 20px";
offBtn.style.marginLeft = "10px";
onBtn.style.border = "none";
onBtn.style.borderRadius = "6px";
btnDiv.appendChild(onBtn);

offBtn.addEventListener("click", () => {
  bulb.src = "offbulb.png";
  cat.src = "cateyes.png";
  onBtn.style.backgroundColor = "#22c55e";
  offBtn.style.backgroundColor = "#cbd2d9";
  switchStatus.innerText = "Switched Off";
});

onBtn.addEventListener("click", () => {
  bulb.src = "onbulb.png";
  cat.src = "cat.png";
  offBtn.style.backgroundColor = "#e12d39";
  onBtn.style.backgroundColor = "#cbd2d9";
  switchStatus.innerText = "Switched On";
});
