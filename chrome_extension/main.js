
const callMeaning = document.getElementById("callMeaning");
const wordt = document.getElementById("word");
const err = document.getElementById("error");
const buttn = document.getElementById("getMeaning");
const voice = document.getElementById("callVoice")

function helper(url1){
  
    callMeaning.innerText = "Loading..";
    
console.log("hello")
let url2 = url1 + '/definitions?limit=10&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
const dict = async () =>{
    try{
    const request = await axios.get(url2);
    console.log(request.data);
    var i = Math.ceil(Math.random() * 10);

    callMeaning.innerText = request.data[i].text;
    }
    catch (e){
        console.log("error",e);
    }

}
dict();



let url3 = url1 + '/audio?useCanonical=false&limit=50&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
// request2.open('GET',url3, true);
// request2.onload = function () {
//     if (request2.status >= 200 && request2.status < 400) {
//         var data2 = JSON.parse(request2.responseText);
//         var audio = document.createElement("AUDIO");
//         audio.setAttribute("src", data2[0].fileUrl);  
//         audio.setAttribute("controls", "controls");
//         audio.setAttribute("autoplay", "autoplay");
//         voice.appendChild(audio);

//     } else {
//         voice.innerText = "CAN'T LOAD";
//     }
// }
// request2.onerror = function() {
//     err.innerText = "ERROR OCURRED";
     
// };
// request2.send();
const music = async () =>{
    try{
    const request1 = await axios.get(url3);
    console.log(request1.data);
    var audio = document.createElement("AUDIO");
        audio.setAttribute("src", request1.data[0].fileUrl);  
        audio.setAttribute("controls", "controls");
        audio.setAttribute("autoplay", "autoplay");
        voice.appendChild(audio);

    }
    catch (e){
        console.log("error",e);
        voice.innerText = "CAN'T LOAD";
        err.innerText = "ERROR OCURRED";
    }
}
music();
}
buttn.addEventListener("click" , ()=>{
    callMeaning.innerText = "";
  err.innerText = "";
  var wordformeang = wordt.value;
  var url1 = 'http://api.wordnik.com:80/v4/word.json/' + wordformeang  ;
  
  helper(url1);
    
})

