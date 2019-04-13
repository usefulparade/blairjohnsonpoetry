var textP;
var date;
var hour;
var minute;
var minuteCountdown;
var second;
var secondCountdown;
var texts = [];

function setTexts(){
    texts = [
        "Among many other fine qualities, my royal friend Tranquo, being gifted with a devout love for all matters of barbaric vertu, had brought together in Pupella whatever rare things the more ingenious of his people could invent; chiefly carved woods of wonderful devices, chiselled shells, inlaid spears, costly paddles, aromatic canoes; and all these distributed among whatever natural wonders, the wonder-freighted, tribute-rendering waves had cast upon his shores.",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "Already has it been related how the great leviathan is afar off descried from the mast-head; how he is chased over the watery moors, and slaughtered in the valleys of the deep; how he is then towed alongside and beheaded; and how (on the principle which entitled the headsman of old to the garments in which the beheaded was killed) his great padded surtout becomes the property of his executioner; how, in due time, he is condemned to the pots, and, like Shadrach, Meshach, and Abednego, his spermaceti, oil, and bone pass unscathed through the fire;—but now it remains to conclude the last chapter of this part of the description by rehearsing—singing, if I may—the romantic proceeding of decanting off his oil into the casks and striking them down into the hold, where once again leviathan returns to his native profundities, sliding along beneath the surface as before; but, alas! never more to rise and blow.",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "twenty three " + minuteCountdown + ":" +  secondCountdown + " yep",
        "24"
    ];
}

function updateTime(){
    date = new Date();
    hour = date.getHours();
    minute = ("0"+date.getMinutes()).slice(-2);
    minuteCountdown = ("0"+(59-minute)).slice(-2);
    second = ("0"+date.getSeconds()).slice(-2);
    secondCountdown = ("0"+(59-second)).slice(-2);
}

function changeText(){
    updateTime();
    setTexts();
    textP = document.getElementById("textToChange");
    textP.innerHTML = texts[hour];
    setInterval(updateText, 1000);
}

function updateText(){
    updateTime();
    setTexts();
    textP = document.getElementById("textToChange");
    textP.innerHTML = texts[hour];
}