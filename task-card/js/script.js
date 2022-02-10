document.body.style.margin = "0";
document.body.style.backgroundColor = "hsl(217, 54%, 11%)";
document.body.style.fontFamily = "Outfit, sans-serif";
document.body.style.fontSize = "18px";

alert("Я оцениваю свою работу на 110 баллов")

let wrapper = document.createElement("div");
wrapper.id = "wrapper";
wrapper.style.marginLeft = "570px";
wrapper.style.display = "flex";
wrapper.style.marginTop = "50px";

let card = document.createElement("div");
card.className = "card";
card.style.backgroundColor = "hsl(216, 50%, 16%)";
card.style.padding = "20px 20px";
card.style.borderRadius = "20px";
card.style.boxShadow = "3px 14px 28px rgba(0,0,0,0.25), 3px 10px 10px rgba(0,0,0,0.22)";

let img = document.createElement("IMG");
img.className = "img-top";
img.src = "./images/image-equilibrium.jpg";
img.style.maxWidth = "300px";
img.style.borderRadius = "10px";
img.style.marginBottom = "3px";


let title = document.createElement("h3");
title.className = "card-title";
title.innerText = "Equilibrium #3429";
title.style.color = "hsl(0, 0%, 100%)";
title.style.marginBottom = "17px";
title.style.fontWeight = "600";


let descr = document.createElement("p");
descr.innerText = "Our Equilibrium collection promotes balance and calm";
descr.className = "descr";
descr.style.fontSize = "280";
descr.style.marginBottom = "17px";
descr.style.color = "hsl(215, 51%, 70%)";
descr.style.margin = "0";
descr.style.maxWidth = "300px";
descr.style.lineHeight = "25px";
descr.style.marginBottom = "17px";
descr.style.fontWeight = "normal"

let inner = document.createElement("div");
inner.style.display = "flex";
inner.style.justifyContent = "space-between";

let price = document.createElement("div");
price.className = "price";

let icon = document.createElement("img");
icon.className = "icon";
icon.src = "./images/icon-ethereum.svg";
icon.style.marginRight = "5px";

let priceNum = document.createElement("p");
priceNum.className = "priceNum";
priceNum.innerText = "0.041 ETH";
priceNum.style.marginTop = "17px;";
priceNum.style.color = " hsl(178, 100%, 50%)";
priceNum.style.display = "inline-block"

let time = document.createElement("div");
time.className = "time";
time.style.display = "flex";
time.style.alignItems = "center";
time.style.marginBottom = "17px";

let imgTime = document.createElement("img");
imgTime.className = "time-img";
imgTime.style.marginRight = "5px";
imgTime.src = "./images/icon-clock.svg";

let timeDescr = document.createElement("p");
timeDescr.className = "time-descr";
timeDescr.style.color = "hsl(215, 51%, 70%)";
timeDescr.innerText = "3 days left";
timeDescr.style.marginTop = "19px";
timeDescr.style.fontSize = "280";
timeDescr.style.fontWeight = "normal"


let line = document.createElement("hr");
line.style.borderColor = "hsl(215, 51%, 70%)";
line.style.marginTop = "-8px";
line.style.size = "1px";
line.style.borderBottom = "0px";



let avatar = document.createElement("div");
avatar.className = "avatar";
avatar.style.alignItems = "center";
avatar.style.marginTop = "22px";
avatar.style.display = "flex";


let avatarImg = document.createElement("img");
avatarImg.className = "avatar-img";
avatarImg.src = "./images/image-avatar.png";
avatarImg.style.maxWidth = "35px";
avatarImg.style.marginRight = "15px";
avatarImg.style.border = "2px solid white";
avatarImg.style.borderRadius = "50%";


let avatarTxt = document.createElement("span");
avatarTxt.className = "avatar-text";
avatarTxt.innerText = "Creation of"
avatarTxt.style.fontSize = "17px"
avatarTxt.style.color = "hsl(215, 51%, 70%)";
avatarTxt.style.textAlign = "center";


let userName = document.createElement("span");
userName.className = "user-name";
userName.style.color = "white";
userName.innerText = " Jules Wyvern";

document.body.appendChild(wrapper);
wrapper.appendChild(card);
card.appendChild(img);
card.appendChild(title);
card.appendChild(descr);
card.appendChild(inner);
inner.appendChild(price);
price.appendChild(icon);
price.appendChild(priceNum);
inner.appendChild(time);
time.appendChild(imgTime);
time.appendChild(timeDescr);
card.appendChild(line);
card.appendChild(avatar);
avatar.appendChild(avatarImg);
avatar.appendChild(avatarTxt);
avatarTxt.appendChild(userName);

