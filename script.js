/* =====================================
   BIRTHDAY WEBSITE V2
   SCRIPT PART 1
===================================== */

// Secret Code
const secretCode = "29/4/2023";

// Elements
const loading = document.getElementById("loading");
const lockScreen = document.getElementById("lockScreen");
const giftScreen = document.getElementById("giftScreen");
const website = document.getElementById("website");
const error = document.getElementById("error");
const password = document.getElementById("password");
const music = document.getElementById("music");

// ----------------------------
// Loading Screen
// ----------------------------

window.addEventListener("load", () => {

setTimeout(() => {

loading.style.display = "none";

lockScreen.style.display = "flex";

},3000);

});

// ----------------------------
// Unlock
// ----------------------------

function unlock(){

if(password.value === secretCode){

error.innerHTML="";

lockScreen.style.display="none";

giftScreen.style.display="flex";

}else{

error.innerHTML="❌ Wrong Secret Code";

}

}

// ----------------------------
// Gift Open
// ----------------------------

const gift=document.getElementById("gift");

gift.addEventListener("click",()=>{

gift.style.transform="scale(.9) rotate(8deg)";

setTimeout(()=>{

giftScreen.style.display="none";

website.style.display="block";

music.play();

startHearts();

},500);

});

// ----------------------------
// Floating Hearts
// ----------------------------

function startHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},500);

}

/* =====================================
   SCRIPT PART 2
===================================== */

// ==========================
// Romantic Letter
// ==========================

const letter = const letter = `❤️ Happy Birthday Meri Chanda ❤️

Ye chota sa gift tmhre liye ❤️

1 simple c wish...
Bs hamesha khush rho,
mere sth rho,
or aese hi khoon peti rho,
tng krti rho meri moti. ❤️

I Love You So Muchhh Chanda. ❤️

Meri mushkil m hr trh se sth rehna hamesha,
jese rehti ho.
Or hamesha aesi hi bn ke rehnaa,
meri cuto c moti c,
meri laadli c begum. ❤️

Tmhe pta hia m tmse itna zada piyar krta hnn,
jis ki koi had hi nhi hia.
Mtlb bhut zadaaa...
Or hamesha krta rhongaa. ❤️

Khair...
Ye sb lfzon m tu bayan nhi ho skta,
lkn phr bhi 1 shair sirf apke liye. ❤️

"Jo hia jitna hia tmse hia kafi,
Ab ishq kaho ya paglpan,
Hum sub m raazi. ❤️"

Or isme jo bhi 1-1 chez likhi hia,
wo sb mane khud likhi hia.
Hr line,
hr lafz,
hr ehsaas,
sirf apke liye. ❤️

I Love You. ❤️

Hamesha khush rho,
lrti jhgrti,
jesi bhi rho,
meri maasi. ❤️😂

Love You So Muchhh. ❤️

Wish You A Very Very Happy Birthday, Meri Jaan! 🎂🎉❤️`;

const typing = document.getElementById("typing");

let index = 0;

function typeLetter(){

if(!typing) return;

typing.innerHTML = "";

index = 0;

const timer = setInterval(()=>{

typing.innerHTML += letter.charAt(index);

index++;

if(index >= letter.length){

clearInterval(timer);

}

},45);

}

// ==========================
// Start typing after website opens
// ==========================

const oldStartHearts = startHearts;

startHearts = function(){

oldStartHearts();

setTimeout(()=>{

typeLetter();

},1000);

}

// ==========================
// Cake Button
// ==========================

const blowBtn = document.getElementById("blowBtn");

if(blowBtn){

blowBtn.addEventListener("click",()=>{

blowBtn.innerHTML="🎉 Wish Granted ❤️";

blowBtn.disabled=true;

});

}

// ==========================
// Music Control
// ==========================

document.addEventListener("click",()=>{

if(music.paused){

music.play().catch(()=>{});

}

},{once:true});

// ==========================
// Image Animation
// ==========================

const images=document.querySelectorAll(".photos img");

images.forEach(img=>{

img.addEventListener("click",()=>{

img.style.transform="scale(1.15)";

setTimeout(()=>{

img.style.transform="";

},600);

});

});

/* =====================================
   SCRIPT PART 3
   Fireworks + Balloons + Sparkles
===================================== */

// Balloon Generator
function createBalloon(){

const balloon=document.createElement("div");

balloon.innerHTML="🎈";

balloon.style.position="fixed";
balloon.style.left=Math.random()*100+"vw";
balloon.style.bottom="-80px";
balloon.style.fontSize=(30+Math.random()*30)+"px";
balloon.style.zIndex="999";
balloon.style.pointerEvents="none";
balloon.style.transition="transform 8s linear, opacity 8s linear";

document.body.appendChild(balloon);

setTimeout(()=>{

balloon.style.transform="translateY(-120vh)";
balloon.style.opacity="0";

},100);

setTimeout(()=>{

balloon.remove();

},8500);

}

// Start Balloons
setInterval(createBalloon,2500);


// Sparkles
function sparkle(){

const star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";
star.style.left=Math.random()*100+"vw";
star.style.top=Math.random()*100+"vh";
star.style.fontSize=(12+Math.random()*18)+"px";
star.style.pointerEvents="none";
star.style.opacity="1";

document.body.appendChild(star);

setTimeout(()=>{

star.style.transition="1s";
star.style.opacity="0";

},100);

setTimeout(()=>{

star.remove();

},1200);

}

setInterval(sparkle,400);


// Fireworks
function firework(){

const colors=[
"#ff4d9d",
"#FFD700",
"#00ffff",
"#ffffff",
"#ff0000"
];

for(let i=0;i<40;i++){

const p=document.createElement("div");

p.style.position="fixed";
p.style.width="8px";
p.style.height="8px";
p.style.borderRadius="50%";
p.style.background=colors[Math.floor(Math.random()*colors.length)];

const x=window.innerWidth/2;
const y=window.innerHeight/2;

p.style.left=x+"px";
p.style.top=y+"px";

document.body.appendChild(p);

const angle=Math.random()*Math.PI*2;
const distance=Math.random()*250;

const dx=Math.cos(angle)*distance;
const dy=Math.sin(angle)*distance;

p.animate([

{
transform:"translate(0,0)",
opacity:1
},

{
transform:`translate(${dx}px,${dy}px)`,
opacity:0
}

],{

duration:1500,
easing:"ease-out"

});

setTimeout(()=>{

p.remove();

},1500);

}

}


// Blow Candle Button
if(blowBtn){

blowBtn.addEventListener("click",()=>{

firework();

});

}


// Final Message
setTimeout(()=>{

console.log("❤️ Birthday Website V2 Loaded");

},5000);