document.body.style.margin="0";
document.body.style.padding="0";

const div=document.createElement("div");
div.className="bimage";
div.style.justifyContent="center";
div.style.display="flex";
div.style.flexDirection="column";
div.style.backgroundImage =
"url(https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg)";
div.style.backgroundSize="cover";
div.style.height="100vh";
div.style.padding="30px";
div.style.borderColor="#48ee59";
div.style.borderWidth="5px";
div.style.borderStyle="solid";

const heading=document.createElement("h1");
heading.innerText="Code is more than some bytes in a file";
heading.className="top";
heading.style.color="#ffffff";
heading.style.fontFamily="Bree Serif";
heading.style.backgroundColor="#00000080";
heading.style.padding="15px";
heading.style.fontSize="30px";

div.appendChild(heading);
document.body.appendChild(div);