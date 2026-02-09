const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const question = document.getElementById("question");

const texts = [
    "დარწმუნებული ხარ? ☹️",
    "კარგად დაფიქრდი 😜",
    "ეგ პასუხი არ მომწონს 🤩",
    "error "
    
    
];

noBtn.addEventListener("mouseover", () => {
    const container = document.querySelector(".buttons");


    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = container.clientHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    const randomText = texts[Math.floor(Math.random() * texts.length)];
    noBtn.innerText = randomText;
});

yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <div style=“
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            background: linear-gradient(135deg, #ff4f8b, #ff8fb1);
            color:white;
            text-align:center;
            font-size:32px;
            padding:20px;
        “>
        <h1>            💖ვიცოდი რომ ერთად ვიქნებოდით💖<br>
        ეს ყველაზე ლამაზი პასუხია ✨</h1>
        </div>
    `;
});


