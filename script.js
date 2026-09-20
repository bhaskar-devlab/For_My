const loveMessage = `
Ami jani na tumi thik ki karone rege acho
ba kiser jonno eto oviman kore acho...

Kintu ekta jinis ami khub bhalo kore jani—
ami tomake onek, onek beshi bhalobashi. ❤️

Tumi amar kache shudhu amar girlfriend na,
tumi amar Bou, amar nijer manush.

Tomar mon kharap thakle amar-o mon bhalo thake na.

Ami shudhu chai tumi amar sathe emni korei
theko... aj, kal, ar onekta poth. 🤍
`;

function showPage(pageNumber) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById("page" + pageNumber)
        .classList.add("active");
}


function openLove() {

    showPage(2);

    typeMessage();

}


function typeMessage() {

    const element = document.getElementById("message");

    element.innerHTML = "";

    let i = 0;

    function typing() {

        if (i < loveMessage.length) {

            element.innerHTML += loveMessage.charAt(i);

            i++;

            setTimeout(typing, 25);

        }

    }

    typing();

}


function nextPage() {

    showPage(3);

}


function angry() {

    document.getElementById("reply").innerHTML =
        "Thik ache... rag koro. 🥺❤️ " +
        "Kintu amar theke dure jeo na.";

}


function smile() {

    document.getElementById("reply").innerHTML =
        "Tahole ekta chotto smile dao na... 🥺❤️";

}


function finalPage() {

    showPage(5);

    createHearts();

}


function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.top =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            Math.random() * 20 + 15 + "px";

        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 2500);

    }

}