
const callMeaning = document.getElementById("callMeaning");
const wordt = document.getElementById("word");
const err = document.getElementById("error");
const buttn = document.getElementById("getMeaning");
const voice = document.getElementById("callVoice")

function helper(url1){
  
    callMeaning.innerText = "Loading..";
    
request = new XMLHttpRequest;
let url2 = url1 + '/definitions?limit=10&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
request.open('GET',url2 , true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400){
    // Success!
    data = JSON.parse(request.responseText);
    var i = Math.ceil(Math.random() * 10);
    console.log(data);
    callMeaning.innerText = data[i].text;

  }
   else {
    callMeaning.innerText = "CAN'T LOAD";

     console.log("notdict");
  }
};

request.onerror = function() {
    err.innerText = "ERROR OCURRED";
    callMeaning.innerText = "";
     
};

request.send();

var request2 = new XMLHttpRequest;
let url3 = url1 + '/audio?useCanonical=false&limit=50&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
request2.open('GET',url3, true);
request2.onload = function () {
    if (request2.status >= 200 && request2.status < 400) {
        var data2 = JSON.parse(request2.responseText);
        var audio = document.createElement("AUDIO");
        audio.setAttribute("src", data2[0].fileUrl);    //  set the source for audio in html tag
        audio.setAttribute("controls", "controls");
        audio.setAttribute("autoplay", "autoplay");
        voice.appendChild(audio);

    } else {
        voice.innerText = "CAN'T LOAD";
    }
}
request2.onerror = function() {
    err.innerText = "ERROR OCURRED";
     
};
request2.send();

}
buttn.addEventListener("click" , ()=>{
    callMeaning.innerText = "";
  err.innerText = "";
  var wordformeang = wordt.value;
  var url1 = 'http://api.wordnik.com:80/v4/word.json/' + wordformeang  ;
  
  helper(url1);
    
})

