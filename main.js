prediction_1 = "" ;
prediction_2 = ""; 

Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:90 
}) ;

camera=document.getElementById("camera") ;

Webcam.attach('#camera') ;

function takeSnapshot(){
  Webcam.snap(function(data_uri){
   document.getElementById("result").innerHTML ='<img id="captured_image" src="'+data_uri+'">' ;
  })  ;
}

console.log('ml5 version' , ml5.version) ;

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5uTx04EnA/model.json'  ,modelLoaded) ;

function modelLoaded(){
    console.log('Model has been Loaded .');
}

function speak(){
  synth=window.SpeechSynthesis ;
  speak_1="The first prediction is "  + prediction_1 ;
  speak_2="And the second prediction is" + prediction_2 ;
  var utterThis = new SpeechSynthesisUtterance(speak_1 + speak_2) ;
  synth.speak(utterThis);
}