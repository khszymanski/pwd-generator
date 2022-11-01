/*

ASCII TABLE

48-57 - NUMBERS
33-47 + 58-64 + 91-96 + 123-126 - SYMBOLS
65-90 - CAPITAL LETTERS
97-122 - SMALL LETTERS

*/

let numbers = new Array();
let symbols = new Array();
let capitalLetters = new Array();
let samllLetters = new Array();

for (i = 0; i < 10; i++) {
  numbers += i;
}

for (i = 33; i <= 47; i++) {
  symbols += String.fromCharCode(i);
}
for (i = 58; i <= 65; i++) {
  symbols += String.fromCharCode(i);
}
for (i = 91; i <= 96; i++) {
  symbols += String.fromCharCode(i);
}
for (i = 123; i <= 126; i++) {
  symbols += String.fromCharCode(i);
}

for (i = 65; i <= 90; i++) {
  capitalLetters += String.fromCharCode(i);
}

for (i = 97; i <= 122; i++) {
  samllLetters += String.fromCharCode(i);
}

window.addEventListener("load", () => {
  passGenerate();
  getFooter();
});

generate = document
  .getElementById("generatePwd")
  .addEventListener("click", () => {
    passGenerate();
  });

function passGenerate() {
  let letters = document.querySelector("#letters").value;
  let length = parseInt(document.querySelector("#length").value);
  let nums = document.querySelector("#nums").checked;
  let specials = document.querySelector("#sybmols").checked;
  let prefix = document.querySelector("#prefix").value;
  let sufix = document.querySelector("#sufix").value;

  let pwd = new Array();
  let clipboard = new Array()

  let pwdLength = 0;

  if (prefix != "") length = length + prefix.length;

  if (sufix != "") length = length + sufix.length;

  if (length < 6) length = 6;

  //while (pwd.length < length) {
  while (pwdLength < length) {
    type = rndm(4);
    switch (type) {
      case 0: //number
        if (nums == true) {
          x = rndm(numbers.length)
          console.log('nums['+x+'] : '+numbers[x])
          pwd += '<span class="num">'+numbers[x]+'</span>';
          clipboard += numbers[x]
          pwdLength++
        }
        break;
      case 1: //symbol
        if (specials == true){
          x = rndm(symbols.length)
          console.log('symbols['+x+'] : '+symbols[x])
          pwd += '<span class="symbol">'+symbols[x]+'</span>'
          clipboard += symbols[x]
          pwdLength++
        }
        break;
      case 2: //capital
        if (letters == "both" || letters == "capitals"){
          x = rndm(capitalLetters.length)
          console.log('capitals['+x+'] : '+capitalLetters[x])
          pwd += '<span class="capital letter">'+capitalLetters[x]+'</span>'
          clipboard += capitalLetters[x]
          pwdLength++
        }
        break;
      case 3: //small
        if (letters == "both" || letters == "small"){
          x = rndm(samllLetters.length)
          console.log('small['+x+'] : '+samllLetters[x])
          pwd += '<span class="small letter">'+samllLetters[x]+'</span>'
          clipboard += samllLetters[x]
          pwdLength++
        }
        break;
      default:
        pwd = pwd;
    }
  }

 copy(clipboard)

  document
  .getElementById("copy")
  .addEventListener("click", () => {
    copy(clipboard);
  });

  document
  .getElementById("copyPwd")
  .addEventListener("click", () => {
    copy(clipboard);
  });

  document.getElementById("generatedPwd").innerHTML =
    '<span class="solid">' + prefix + pwd + sufix + "</span>";
}

function rndm(max) {
  return Math.floor(Math.random() * max);
}

function copy(newClip) {
  navigator.clipboard.writeText(newClip).then(() => {
    //document.querySelector('#copy').classList.add("copied");
    document.querySelector('#copiedInfo').innerHTML = '<span class="text-success">Copied successfully</span>'
  }, () => {
    document.querySelector('#copiedInfo').innerHTML = '<span class="text-danger">Copy failed</span>'
  });
}

function getFooter(){
  //<span>© - Website created by <a href="https://khs.company/" target="_blank" class="_copyright-cxanew"><img src="https://resources.khs.company?img=main_logo.png&s=pwd-generator" alt="KHS company"> KHS</a></span>
  const today = new Date();
  const year = today.getFullYear();
  
  document.querySelector('#footer').innerHTML = '<span>© '+year+' - Website created by <a href="https://khs.company/" target="_blank" class="_copyright-cxanew"><img src="https://resources.khs.company?img=main_logo.png&s=pwd-generator" alt="KHS company"> KHS</a></span>'
}