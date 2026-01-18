document.body.style.margin="0";
document.body.style.padding="0";

const div1= document.createElement("div");
div1.className="background";
div1.style.backgroundImage =
"url(https://images.unsplash.com/photo-1501785888041-af3ef285b470)";
div1.style.backgroundSize="cover";
div1.style.height="100vh";

const heading=document.createElement("h1");
heading.className="heading";
heading.innerText="Chat";
heading.style.color="#ffffff";
heading.style.backgroundColor="#323f4b";
heading.style.fontSize="20px";
heading.style.textAlign="center";
heading.style.fontFamily="Roboto";
heading.style.fontWeight="bold";
heading.style.padding="14px";


const div2=document.createElement("div");
div2.className="whole";
div2.style.padding="14px";
div2.style.color="#ffffff";
div2.style.fontFamily="Roboto";
div2.style.fontSize="12px";


const para1=document.createElement("p");
para1.innerText="Hello,how are you?";
para1.className="text-sent";
para1.style.backgroundColor="#47a3f3";
para1.style.padding="12px";
para1.style.borderTopLeftRadius="12px";
para1.style.borderTopRightRadius="12px";
para1.style.borderBottomLeftRadius="12px";
para1.style.textAlign="right";


const para2=document.createElement("p");
para2.innerText="Hi Varakumar,I am good How are you?";
para2.className="text-rec";
para2.style.backgroundColor="#52606d";
para2.style.padding="12px";
para2.style.borderTopLeftRadius="12px";
para2.style.borderTopRightRadius="12px";
para2.style.borderBottomRightRadius="12px";
para2.style.textAlign="left";

const para3=document.createElement("p");
para3.innerText="I'm fine, I am learming HTML and CSS";
para3.className="text-sent";
para3.style.backgroundColor="#47a3f3";
para3.style.padding="12px";
para3.style.borderTopLeftRadius="12px";
para3.style.borderTopRightRadius="12px";
para3.style.borderBottomLeftRadius="12px";
para3.style.textAlign="right";

const para4=document.createElement("p");
para4.innerText="HTML and CSS?";
para4.className="text-rec";
para4.style.backgroundColor="#52606d";
para4.style.padding="12px";
para4.style.borderTopLeftRadius="12px";
para4.style.borderTopRightRadius="12px";
para4.style.borderBottomRightRadius="12px";
para4.style.textAlign="left";

const para5=document.createElement("p");
para5.className="text-sent";
para5.innerText="Yes, by doing projects parallelly , i am learning hTML or CSS";
para5.style.backgroundColor="#47a3f3";
para5.style.padding="12px";
para5.style.borderTopLeftRadius="12px";
para5.style.borderTopRightRadius="12px";
para5.style.borderBottomLeftRadius="12px";
para5.style.textAlign="right";

const para6=document.createElement("p");
para6.innerText="Awesome , can you tell how you are learing hTML or CSS";
para6.className="text-rec";
para6.style.backgroundColor="#52606d";
para6.style.padding="12px";
para6.style.borderTopLeftRadius="12px";
para6.style.borderTopRightRadius="12px";
para6.style.borderBottomRightRadius="12px";
para6.style.textAlign="left";

const para7=document.createElement("p");
para7.innerText="can I call you? ";
para7.className="text-sent";
para7.style.backgroundColor="#47a3f3";
para7.style.padding="12px";
para7.style.borderTopLeftRadius="12px";
para7.style.borderTopRightRadius="12px";
para7.style.borderBottomLeftRadius="12px";
para7.style.textAlign="right";

div2.appendChild(para1);
div2.appendChild(para2);
div2.appendChild(para3);
div2.appendChild(para4);
div2.appendChild(para5);
div2.appendChild(para6);
div2.appendChild(para7);
div1.appendChild(heading);
div1.appendChild(div2);
document.body.appendChild(div1);
