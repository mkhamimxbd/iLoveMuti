const affirmationArr = [
  "I am always here for you, you are not alone.",
  "We can get throught this togetrher. Trust me.",
  "I love you with everything i have.",
  "I promise I will marry you.",
  "You are miy everything.",
  "Whenever you feel sad, come to me, I will accompany you.",
  "Life is not easy. But we will be beside each other all the time.",
  "Never hide you sadness from me. We will cry together, as we laugh together.",
  "We can make it work. Trust me.",
  "With you, every day is a bright day.",
  "You transformed my life from Black and White to Flower and Colors.",
  "You are enough for me.",
  "We are not just couple. We are soulmates.",
  "Never forget that theres a boy in Bangladesh who really loves you.",
  "I am so grateful to have you.",
  "I am so lucky to have you",
  "I will visit you. Just give me time.",
  "We will have a great loving family.",
  "I never compare you with anyone. You are special, really special.",
  "You are my Queen. And I am your King.",
  "You are perfect for me.",
  "I always trust you.",
  "I choose you, and you choose me. We will always be together.",
  "Your love is enough for me.",
  "I can see a great mother in you.",
  "You will be a great mother.",
  "You are my home.",
  "You are the love of my life.",
  "You heart is only for you.",
  "I hope our love always grow, never go down."
];

let affirmationSentence = document.getElementById("affirmation-sentence")
let typingInterval
const music = new
Audio("perfect.mp3")


function selectRandomAffirmation() {
  function randomNumber(max) {
    return Math.floor(Math.random() * max)
  }

  clearInterval(typingInterval)
  affirmationSentence.innerHTML = ""

  let random = randomNumber(affirmationArr.length)
  let text = affirmationArr[random]
  let i = 0

  typingInterval = setInterval(() => {
    affirmationSentence.innerHTML += text[i]
    i++
    if (i === text.length) clearInterval(typingInterval)
  }, 50)
}
document.getElementById("play-btn").addEventListener("click", () => {
  music.play();
})