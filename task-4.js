

document.body.style.margin="0";
document.body.style.padding="0";



const card=document.createElement("div");
card.style.backgroundImage=
"url(https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303525.jpg?w=1380&t=st=1705607469~exp=1705608069~hmac=278471867b312bc0088e9ffac7a2f27addf229e5e57bacefa17334eee38448ad)";
card.style.backgroundSize="cover";
card.style.backgroundColor="#f6c56e";
card.style.width="350px";
card.style.height="600px";
card.style.margin="auto";
card.style.display = "flex";
card.style.flexDirection = "column";
card.style.justifyContent = "flex-end";


const div=document.createElement("div");
div.style.backgroundColor="#f6c56e";
div.style.padding="0px 20px 0px 20px";
div.style.borderRadius=" 15px 15px 0px 0px ";

const heading=document.createElement("h1");
heading.innerText="Happy Meals";
heading.style.fontFamily="Bree Serif";
heading.style.color="#323f4b";

const p=document.createElement("p");
p.innerText="Discover the best foods over the 1,000 restaurants";
p.style.fontFamily="Roboto";
p.style.color="#323f4b";
p.style.fontSize="20px";
p.style.fontSize="bold";

const button=document.createElement("button");
button.innerText="Book Now";
button.style.backgroundColor="#ffffff";
button.style.fontFamily="Roboto";
button.style.padding="10px";
button.style.color="#323f4b";
button.style.borderRadius="10px";

div.appendChild(heading);
div.appendChild(p);
div.appendChild(button);
card.appendChild(div);
document.body.appendChild(card);



