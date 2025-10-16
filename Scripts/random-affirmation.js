const affirmationArr = [
  "I am always here for you.",
  "We can get throught this togetrher.",
  "I love you with everything i have.",
  "I promise I will marry you.",
  "You are my everything.",
  "Whenever you feel sad, come to me.",
  "Life is not easy. But we will stay together all the time.",
  "Never hide you sadness from me.",
  "We will cry together, as we laugh together.",
  "We can make it work. Trust me.",
  "With you, every day is a bright day.",
  "You transformed my life from Black and White to Flower and Colors.",
  "You are enough for me.",
  "We are not just couple. We are soulmates.",
  "Never forget that theres a boy in Bangladesh who really loves you.",
  "I am so grateful to have you.",
  "I am so lucky to have you.",
  "I will visit you. Just give me time.",
  "We will have a great loving family.",
  "I never compare you with anyone.",
  "You are special, really special.",
  "You are my Queen. And I am your King.",
  "You are perfect for me.",
  "I always trust you.",
  "I choose you, and you choose me.",
  "We will always be together.",
  "Your love is enough for me.",
  "I can see a great mother in you.",
  "You will be a great mother.",
  "You are my home.",
  "You are the love of my life.",
  "You heart is only for you.",
  "I hope our love always grow, never go down.",
  "Never forget that you have me.",
  "With you, every day is a good day.",
  "You bring happiness into our lives every day.",
  "You are my one and only.",
  "I love the moments we share together.",
  "My love for you keeps getting stronger everyday.",
  "You are the love of my life.",
  "Your love fills my heart with incredible happiness.",
  "I love you more and more every day.",
  "I love you more than words can ever express.",
  "You are the best thing that ever happened to me.",
  "My heart belongs to you, now and forever.",
  "Your love is my greatest treasure.",
  "You make my world brighter every day.",
  "You are the queen of my heart.",
  "You and me, forever and always.",
  "Our love is infinite.",
  "You are my sunshine on the rainiest days.",
  "I choose you, today and always.",
  "In your eyes, I found my forever home.",
  "My love for you grows stronger with each sunrise.",
  "With you, every day is a good day.",
  "You bring happiness into our lives every day.",
  "You are my one and only.",
  "I cherish the moments we share together.",
  "My love for you keeps getting stronger.",
  "You are the love of my life.",
  "Your love fills my heart with incredible happiness.",
  "I love you more and more every day.",
  "I love you more than words can ever express.",
  "You are the best thing that ever happened to me.",
  "My heart belongs to you, now and forever.",
  "Your love is my greatest treasure.",
  "You make my world brighter every day.",
  "You are the queen of my heart.",
  "You and me, forever and always.",
  "Our love is infinite.",
  "You are my sunshine on the rainiest days.",
  "I choose you, today and always.",
  "In your eyes, I found my forever home.",
  "My love for you grows stronger with each sunrise.",
  "I admire your strength.",
  "Your smile lights up my world.",
  "You are beautiful inside and out.",
  "You are the most beautiful woman in the world.",
  "Your beauty takes my breath away.",
  "You have the kindest heart.",
  "You are the funniest person I know.",
  "you never fail to make me laugh",
  "You carry yourself with confidence.",
  "You are not weak",
  "I'm drawn to you every day.",
  "You are such a hard worker. I am really inspired by you.",
  "You know what matters to you in life. I really appreciate how centered you are.",
  "Your beauty radiates from the inside out.",
  "You have a great sense of style.",
  "You have compassion even in difficult times. I really admire you.",
  "You are the best listener.",
  "Your laughter is the sweetest melody to my ears.",
  "You always listen to me. Thank you.",
  "You are a beautiful soul.",
  "Your mind is a masterpiece.",
  "You make every day an adventure.",
  "I love spending time with you, no matter what we do.",
  "You are not just my wife, but also my best friend.",
  "You're the one I can always turn to for support.",
  "I love having fun with you.",
  "I always enjoy exploring and going out with you.",
  "I love mb with you :)",
  "I trust you with my pain and my deepest secrets.",
  "You always respect me when I'm vulnerable. I feel safe with you.",
  "You are my safe place",
  "You understand me like no one else ever could.",
  "I'm grateful for the laughter and joy you bring into my life.",
  "You wil be an amazing mom.",
  "Your love as a mother will fill our home with warmth and joy.",
  "You will be the heart and soul of our family.",
  "Go easy on yourself.",
  "I'm here through and through.",
  "Even when times are tough, you push through.",
  "We make the perfect team.",
  "You can always lean on me. I've got your back.",
  "Your strength inspires me every day.",
  "I believe in you and your dreams.",
  "You are never alone.",
  "I'm here to support you through thick and thin.",
  "Your well-being is my top priority.",
  "Together, we can overcome any challenge.",
  "I'm your biggest fan and your most fervent supporter.",
  "You are capable of achieving anything you set your mind to.",
  "I'm proud of your determination.",
  "Your success is my success, and I'll celebrate every milestone with you.",
  "I'm here to lift you up when you need it.",
  "You are my wife and I'll always stand by you.",
  "I'm here for you, no matter what.",
  "I look forward to a lifetime of love with you.",
  "You are my forever and always.",
  "Together, we'll paint a future filled with laughter and delight.",
  "All of our dreams will come true.",
  "I am so excited to live this life with you.",
  "I can't wait to witness all the amazing things you'll do.",
  "With you, our future is a canvas of endless happiness.",
  "I'm thrilled about the adventures we'll take together.",
  "Our future is bright and full of joy.",
  "The best moments of our lives are yet to come, and I can't wait.",
]

let affirmationSentence = document.getElementById("affirmation-sentence")
let typingInterval
const music = new
Audio("Music/Somewhere only we know.mp3")

fetch('/nav.html')
      .then(res => res.text())
      .then(html => document.getElementById('navbar').innerHTML = html);
fetch('/footer.html')
      .then(res => res.text())
      .then(html => document.getElementById('footer').innerHTML = html);

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