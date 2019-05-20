var textP;
var date;
var hour;
var minute;
var minuteCountdown;
var second;
var secondCountdown;
var texts = [];
var wait;
var waitP;

function setTexts(){
    texts = [
//hour three
        "This was the time of listening and shells. When I didn't hear what I wanted, I might hear them talking. I heard my grandfather say, <em>why do we listen to these stories about people who kill each other.</em> She wouldn't answer. We had learned it wasn't worth talking. I knew where the books were hidden in the guest bed spread out in the center under the duvet. <em>why do you like these redundant mysteries.</em> No one ever yelled and no one ever knew each other's secrets and we tried not to touch each other as we passed in the hall. I was upside down in bed, blowing the sheet away from my mouth so I could breathe. I worried if I would be able to hear. I poked the throbbing tip of my finger out the side of the blanket. I wanted the One who had always come to come. I waited.",
//hour four
        "A car started in the darkness. I would rather talk about this time as though it were an event to be performed. Why these redundant mysteries. A car starts in the darkness. Then it starts again. Always twice. A signal or an omen. I lay in bed moving the ache around from left to right. More than one night I had imagined I had a fox and a white curtain and I would go to the window and I would put my hand down to rest on its muzzle stand with my shoulders back pull up my hood put my tongue over my teeth. That's where it started, the fox and the curtain and the window, two lies, and the One who came. The car starts in the darkness, and then it starts again.",
//hour five
        "something acidic aching fingertip crease in the back of the knee a muted cough click windowsill the copy of a key reaching backward the One who always aching talking but without filling just being there laughter stifled it was always dark reaching aching and reaching back the One who curled my hair around a finger it never stopped signal something acidic fizzling the back of my throat I didn't think it was strange at first it was always the same I couldn't remember the time before",
//hour six 
        "Walking down the stairs I pulled the fabric of the One's shirt against my face, and my breathing sucked it into my mouth then pushed it out. I worried about lint in my eye. I can't remember, but I think I knew. It was night and we moved quickly through the streets and the sidewalks were perfectly flat the way they always were. I didn't look but I knew what kind of night it was, the kind where even the blue light alternating from the living room windows was gone, its watchers sleeping. Was there anyone there? It was always the same. The One alternated like current. I have to remember what happened.",
//hour seven
        "At the table we sat face to face I hadn't practiced I put my palms flat and the wood was damp I didn't get a splinter but I thought about it happening I knew I couldn't do something I hadn't done before the One who sat across from me had probably been here a second time the One reached out a fingertip put one on each wrist <em>Now you're here.</em> I didn't answer I didn't answer I didn't think I knew the One slid thumbs underneath <em>Do you know what's happening to you?</em> I didn't answer I didn't think I knew the One closed a circle around my wrists my hands couldn't be my hands.",
//hour eight
        "This is the time to remember. Resurfacing the last time. It must have taken long, long shadows. Resurfacing, I thought. I thought and it took a long time to get back to me. The way I imagined it, but it must have happened over time. I had attached to something that came after, was dragged a nameless direction, but it must have happened over time. An open mouth, the bones stretching the face too far. I couldn't, I couldn't. I waited for the sound. But this was just the way I imagined it, I think it happened over time. A click. Inside, the One outside, resurfacing.",
//hour nine
        "They taught me how to shape my tongue into something smoother and silver pebbled. How to sing to catch the echoes. It was dark but I had I practiced being afraid. Teeth scraping. Inside the mouth. It was dark but I knew to pull up my hood and cover my teeth with my tongue and sing with the others. I was so far beneath, and I had myself but I had no surface. I didn't feel much but I made the noise of the mouth. I waited for the sound but it was hard to hear over the mouths singing. I was making room for something but it began to ache, the absence. I felt the walls but they felt me back harder. They said <em>we imagined it that way too.</em> I ached. Something would come.",
//daylight
        "Come back in the dark.",
        "Come back in the dark.",
        "Come back in the dark.",
        "Come back in the dark.",
        "Come back in the dark.",
        "Come back in the dark.",
        "Come back in the dark.",
        "Come back in the dark.",
        "Come back in the dark.",
        "Come back in the dark.",
        "Come back in the dark.",
        "Come back in the dark.",
        "Come back in the dark.",
        "Come back in the dark.",
        "Come back in the dark.",
//hour one
        "That night I practiced. I walked the perimeter of the room in the darkness, covering my teeth with my tongue so no one could see a glint. Slinking, a word I liked that I would chant to feel the texture of the seconds. I practiced most nights. What I did before. What it meant before. I am attached to this new shape. A new mouth, these new ways to move a tongue over my teeth, behind and around. Tongue slinking away.", 
//hour two
        "This was during the time I thought I was always there. I listened. I don't remember much of the house, the food I hated at breakfast. No light got through. I fixed the mortar, smoothing over the wet paste with a putty knife. It scraped. I did this in my sleep, sometimes over that same part of the wall, sometimes new, a place that wasn't there yet. I knew the walls like my hand. I thought I knew them until I looked. Then they could not be my hands. This was all before the sound, or it was during the period of waiting for that sound, the sound that was a path and it would take me out and it would take me up to the surface of myself. Something waits at the end of the path, but I'm not sure I knew, not sure I knew that, not then. I bit the tip of my finger. These could not be the walls."

    ];
}

function updateTime(){
    date = new Date();
    hour = date.getHours();
    minute = ("0"+date.getMinutes()).slice(-2);
    minuteCountdown = ("0"+(59-minute)).slice(-2);
    second = ("0"+date.getSeconds()).slice(-2);
    secondCountdown = ("0"+(59-second)).slice(-2);
    hourCountdown = ("0" + (22-hour)).slice(-2);
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
    if (hour <=6 || hour >= 21){
        wait = minuteCountdown + ":" + secondCountdown;
    } else {
        wait = hourCountdown + ":" + minuteCountdown + ":" + secondCountdown;
    }
    waitP = document.getElementById("wait");
    waitP.innerHTML = wait;
}