function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ecqwF2KiH/model.json', modelReady);

}

function modelReady()
{
    classifier.classify(gotResults);
}



function gotResults (error, results) {
    if (error) {
        console.log(error);
    }
    else  {
    console.log(results);

    r= Math.floor(Math.random()*255);
    g= Math.floor(Math.random()*255);
    b= Math.floor(Math.random()*255);

    document.getElementById("result_label").innerHTML="I can hear: "+results[0].label;
    document.getElementById("result_confidence").innerHTML="Accuracy: "+(results[0].confidence*100).toFixed(3);
    

    document.getElementById("result_label").style.color= "rgb("+r+","+g+","+b+")";
    document.getElementById("result_confidence").style.color= "rgb("+r+","+g+","+b+")";
   
    img1 = document.getElementById('animal1');
    img2 = document.getElementById('animal2');
    img3 = document.getElementById('animal3');
    img4 = document.getElementById('bg4');

    if (results[0].label == "Clap") 
    {
        img1.src = 'animals-01.gif';
        img2.src = 'animals-02.png';
        img3.src = 'animals-03.png';
        img4.src = 'bg-04.png';
  

    }
    else if (results[0].label == "Bell") 
    {
        img1.src = 'animals-01.png';
        img2.src = 'animals-02.gif';
        img3.src = 'animals-03.png';
        img4.src = 'bg-04.png';
  

    }
    else if (results[0].label == "Tinker") 
    {
        img1.src = 'animals-01.png';
        img2.src = 'animals-02.png';
        img3.src = 'animals-03.gif';
        img4.src = 'bg-04.png';
  

    }
    else {
        img1.src = 'animals-01.png';
        img2.src = 'animals-02.png';
        img3.src = 'animals-03.png';
        img4.src = 'bg-04.gif';
    }
  

    }

}
