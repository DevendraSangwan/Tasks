document.body.style.margin = "0";
document.body.style.padding = "0";

const emoji=document.createElement("img");
document.body.appendChild(emoji);
emoji.src="https://emojiisland.com/cdn/shop/products/Unhappy_Face_Emoji_Icon_ios10_large.png?v=1571606093";
emoji.style.height="300px";
emoji.style.width="300px"



const button=document.createElement("button");
document.body.appendChild(button);
button.style.backgroundColor="#000000";
button.style.color="#ffffff";
button.innerText="unhappy";
button.style.borderRadius="6px";
button.style.padding="6px";
button.style.marginTop="300px";

button.addEventListener("click",()=>{
    if(button.innerText==="unhappy"){
        button.innerText="Happy";
         emoji.src =
      "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/65532/happy-emoji-clipart-md.png";
  
    }else{
        button.innerText="unhappy";
        emoji.src="https://emojiisland.com/cdn/shop/products/Unhappy_Face_Emoji_Icon_ios10_large.png?v=1571606093";


    }
})


