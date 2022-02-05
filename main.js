var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("text-box").innerHTML="";
    recognition.start();

}
recognition.onresult=function run (event){
    console.log (event);
    var content=event.results[0][0].transcript;
    console.log (content);
    document.getElementById("text-box").innerHTML=content;
    if(content=="take my selfie"){
      speak();}
    }
function speak(){
var synth=window.speechSynthesis;
var speak_data="taking your selfie in 5 seconds";
var utterthis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterthis);
Webcam.attach(camera);
setTimeout(function(){
takesnapshot();
save();
},5000);
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
 });
  var camera=document.getElementById("camera");

  function takesnapshot(){
      Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML="<img id='my_selfie' src='"+data_uri+"'>";    
      });
  }
function save(){
  link=document.getElementById("link");
  image=document.getElementById("my_selfie").scr;
  link.href=image;
  link.click();  
}


