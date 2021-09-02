customText = document.getElementById("customText");
soundCheckbox = document.getElementById("soundCheckbox");
startBtn = document.getElementById("startBtn");
content = document.getElementById("content");

startBtn.addEventListener("click", main);
customText.addEventListener("click", () => document.getElementById("customOption").selected = true);

function main() {
    document.getElementsByClassName("options")[0].style.display = "none";
    document.getElementsByClassName("main")[0].style.display = "block";

    textChoice = document.querySelector("option:checked").innerText;
    radioChoice = document.querySelector("input[name='speed']:checked").value;

    if (customText.value == "" && document.querySelector("option:checked").innerText == "Custom Text") {
        textChoice = "Aesop's Fables";
    }

    if (textChoice == "Aesop's Fables") {
        text = "Aesop was one of the great Greek writers. He is best know for his fables, stories that have a moral. They teach us something about how we should live our lives. Aesop wrote thousands of these stories. Here are a few. The Wolf in Sheep's Clothing Once upon a time, a Wolf decided to disguise the way he looked. He thought it would help him get food more easily. He put on the skin of a sheep, then he went out with the flock into the pasture. Even the shepherd was fooled by his clever costume. In the evening, the shepherd put him in with the rest of the sheep. He closed the gate and made sure it was secure before he went to bed. In the middle of the night, he came back to the fold to get some meat for the next day. Instead of a sheep, though, he grabbed the Wolf, killing him instantly. Those who look to harm others will be harmed themselves. The Bat and the Weasel. A Bat fell on the ground and was caught by a Weasel. It begged the Weasel to spare its life, but the Weasel refused. It told the Bat that birds, by nature, were its enemy. The Bat assured him that it was not a bird, it was a mouse. The Weasel thought a moment, then set it free. A while later, the Bat fell again to the ground, and it was caught by another Weasel. It begged this Weasel not to eat him, either. The Weasel, though, said it did not like mice at all and would eat it. The bat told the Weasel that it was not a mouse, but a Bat. The second Weasel had not good answer, so he let it go. The Bat know it is always wise to turn events to your advantage.";
        textChars = text.split("");
        textWords = text.split(" ");
    }
    else if (textChoice == "Benefits of Video Games") {
        text = "Video games are seen as a useless entertainment to many parents and some even believe that they damage a child's brain. Over the years, violent video games have been blamed for leading people to a life of crime because they believe that games are the cause of kids becoming violent or develop antisocial behavior. In reality many psychologists and scientists have found that playing video games can actually have benefits towards a person's brain. Video games can eventually teach kids skills that they will need and use in their lives. Research shows that video games can be used for therapeutic purposes, exercise, stress relievers, positive interactive learning, hand eye coordination, and different types of patient treatment for people all around the world.";
        textChars = text.split("");
        textWords = text.split(" ");
    }
    else if (textChoice == "Custom Text") {
        text = customText.value;
        textChars = text.split("");
        textWords = text.split(" ");
    }

    i = 0;
    document.body.addEventListener("keypress", () => {
        if (radioChoice == "char" && textChars[i] != undefined) {
            content.textContent += textChars[i];
            i++;
        }
        else if (radioChoice == "word" && textWords[i] != undefined) {
            content.textContent += textWords[i] + " ";
            i++;
        }

        if (soundCheckbox.checked) {
            new Audio("keyboard-sound.mp3").play();
        }
    });
}
