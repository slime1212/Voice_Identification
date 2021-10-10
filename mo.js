function startClass() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/SHADKMY3w/model.json', readyModel)
}

function readyModel() {
    classifier.classify(getResult)
}

function getResult(e, results) {
    if (e) {
        console.error(e)
    }
    else {
        console.log(results);

        rnr = Math.floor(Math.random()*256) + 1;
        rng = Math.floor(Math.random()*256) + 1;
        rnb = Math.floor(Math.random()*256) + 1;

        document.getElementById("sound-label").innerHTML = 'I can hear: ' + results[0].label;
        document.getElementById("accuracy-label").innerHTML = 'Accuracy: ' + (results[0].confidence*100).toFixed(2) + "%";

        document.getElementById("sound-label").style.color = "rgb("+rnr+", "+rng+", "+rnb+")";
        document.getElementById("accuracy-label").style.color = "rgb("+rnr+", "+rng+", "+rnb+")";

        img1 = document.getElementById("b1");
        img2 = document.getElementById("b2");
        img3 = document.getElementById("b3");

        if (results[0].label == "Background Noise") {
            img1.src = 'aliens-01.gif';
            img2.src = 'alien2.png';
            img3.src = 'alien3.png';
        }
        else if (results[0].label == "Clap") {
            img1.src = 'alien1.png';
            img2.src = 'aliens-02.gif';
            img3.src = 'alien3.png';
        }
        else if (results[0].label == "Beep Boop") {
            img1.src = 'alien1.png';
            img2.src = 'alien2.png';
            img3.src = 'aliens-03.gif';
        }
        else {
            img1.src = 'alien1.png';
            img2.src = 'alien2.png';
            img3.src = 'alien3.png';
        }
    }
}