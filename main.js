function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ZBFOV-GjF/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
if(error)
{
    console.error(error);
}
else
{
    console.log(results);
    document.getElementById("result_label").innerHTML='I can hear -'+ results[0].label;
    document.getElementById("result_confidence").innerHTML='Accuracy-'+(results[0].condfindece*100).toFixed(2)+"%";

    img=document.getElementById('dog');
    img1=document.getElementById('cat');
   

    if(results[0].label=="dog sound")
    {
        img.src='dog.jpg';
    }

    else if(results[0].label=="cat sound") 
    {
        img1.src='cat.jpg';
    }

   
    else
    {
img.src='dog.jpg';
img1.src='cat.jpg';
    }

}
}