  let name = prompt("Enter your Name plzzzzzz!");

  if (name == "" || name == undefined || name == null) {
    location.reload()

  }

  let sss = document.getElementById("sss").innerHTML = name;
  let ss = document.getElementById("ssss").innerHTML = name;
  let b = document.getElementById("b");

  b.addEventListener("click", () => {
    if ("speechSynthesis" in window) {

      let u = new SpeechSynthesisUtterance();
      u.text = `      Happy birthday to you,
      
      Happy birthday dear ${name}
      
      Happy birthday to you.
      Happy Birthday Wishing you a day filled with love joy, and all your favorite things. May this year bring you endless happiness and success. Enjoy your special day!
`;
      u.rate = 0.7;
      u.lang = "hi-IN"
      u.volume = 1;
      console.log(u);
      window.speechSynthesis.speak(u)
    }
    else {
      alert('Browser not supported ')
    }
  })
  let index = 0;
  let color = ["red", "green", "maroon","fuchsia", "orange","blue","lime","olive","teal","aqua"];
  color[index++]
  setInterval(() => {
  window.document.body.style.backgroundColor = color[index];
  index = (index + 1) % color.length

  }, 1500)
