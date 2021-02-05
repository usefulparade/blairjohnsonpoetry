var tempo;
var sentence; 
var sentenceArray;
var progress;

function setup(){
    tempo = 240;
   sentence = "Thus it was not rare to find, on the Sunday, the tallboy on its feet by the fire, and the dressing table on its head by the bed, and the night-stool on its face by the door, and the washand-stand on its back by the window; and, on the Monday, the tallboy on its back by the bed, and the dressing table on its face by the door, and the night-stool on its back by the window and the washand-stand on its feet by the fire; and on the Tuesday"
   sentenceArray = sentence.split(" ");
   progress = 0;
   setTimeout(TheFirst, 800);
}

function TheFirst(){
    setInterval(Stamp, tempo);

}

function Stamp(){

    if (mouseX != 0 && mouseY != 0){
        //make the p
        var p = document.createElement("p");
        var word = document.createTextNode(sentenceArray[progress]);
        p.appendChild(word);

        //style the p
        p.style.left = "" + mouseX + "px";
        p.style.top = "" + mouseY + "px";

        //add the p to the "container" div
        var container = document.getElementById("container");
        container.appendChild(p);
        progress++;
        if (progress >= sentenceArray.length){
            progress = 0;
        }
    }
}