var source="ɪf ɪt wər pasəbəl tu ɪmædʒən æn ɛsθɛtɪk əv tɛkstʃəwəl plɛʒər ɪt wʊd hæv tu ɪnklud rajtɪŋ əlawd ðɪs vokəl rajtɪŋ wɪtʃ ɪz nəθɪŋ lajk spitʃ ɪz nat præktɪst bət ɪt ɪz dawtləs wət ɑrtoʊd rɛkəmɛndəd ænd wət salərz ɪz dɪmændɪŋ lɛt əs tɔk əbawt ɪt æz ðo ɪt ɪgzɪstəd ən æntɪkwəti rɛtərɪk ɪnkludəd e sɛkʃən wɪtʃ ɪz fərgatən sɛnsərd baj klæsɪkəl kaməntetərz ðə æktiːʊ e grup əv fɔrmjələ dəzajnd tu əlaw fɔr ðə kɔːrpɔːriəl ekstɪəriərɪzeɪʃən əv dɪskɔrs ɪt dɛlt wɪð e θiətər əv ɪksprɛʃən ðə æktər ɔrətər ɪksprɛsɪŋ hɪz ɪndɪgneʃən hɪz kəmpæʃən ɛtsɛtərə rajtɪŋ əlawd ɪz nat ɪksprɛsɪv ɪt livz ɪksprɛʃən tu ðə fənɒtɛkst tu ðə rɛgjələr kod əv kəmjunəkeʃən ɪt bəlɔŋz tu ðə dʒino tɛkst tu sɪgnɪfɪkəns ɪt ɪz kærid nat bɑɪ drəmætɪk ɪnflɛkʃənz sətəl strɛsəz sɪmpəθɛtɪk æksɛnts bət baj ðə gren əv ðə vɔjs wɪtʃ ɪz æn ɪratɪk mɪkstʃər əv tɪmbər ænd læŋgwədʒ ænd kæn ðɛrfɔr ɔlso bi əlɔŋ wɪð dɪkʃən ðə səbstəns əv æn art ðə art əv gajdɪŋ wənz badi wɛns ɪts ɪmpɔrtəns ən far istərn θiətərz du əlawəns biɪŋ med fɔr ðə sawndz əv læŋgwədʒ rajtɪŋ əlawd ɪz nat fonəladʒɪkəl bət fənɛtɪk ɪts em ɪz nat ðə klɛrəti əv mɛsədʒəz ðə θiətər əv ɪmoʃənz wət ɪt sərtʃəz fɔr ən e pərspɛktɪv əv blɪs ar ðə pʊlʒənəl ɪnsədənts ðə læŋgwədʒ lajnd wɪð flɛʃ e tɛkst wɛr wi kæn hɪr ðə gren əv ðə θrot ðə pətinə əv kansənənts ðə vəlʌptʃuəsnəs əv vawəlz e hol karnəl sterioʊfəni ðə artɪkjəleʃən əv ðə badi əv ðə təŋ nat ðæt əv minɪŋ əv læŋgwədʒ e sərtən art əv sɪŋɪŋ kæn gɪv æn ajdiə əv ðɪs vokəl rajtɪŋ bət sɪns mɛlədi ɪz dɛd wi me fajnd ɪt mɔr izəli təde æt ðə sɪnəmə ən fækt ɪt səfajsəz ðæt ðə sɪnəmə kæptʃər ðə sawnd əv spitʃ klos əp ðɪs ɪz ən fækt ðə dʒɛnərəlajzd dɛfənɪʃən əv ðə gren əv rajtɪŋ ænd mek əs hɪr ən ðɛr mətɪriæləti ðɛr sɛntʃəwæləti ðə brɛθ ðə gʌtərəlz ðə flɛʃɪnəs əv ðə lɪps e hol prɛzəns əv ðə hjumən məzəl ðæt ðə vɔjs ðæt rajtɪŋ bi æz frɛʃ səpəl lubrəketəd dɛləkətli grænjələr ænd vajbrənt æz æn ænəməlz məzəl tu səksid ən ʃɪftɪŋ ðə sɪgnəfajd e gret dɪstəns ænd ən θroɪŋ so tu spik ðə ənanəməs badi əv ðə æktər ɪntu maj ɪr ɪt ɡrænjəleɪts ɪt krækəlz ɪt kərɛsɪz ɪt grets ɪt kəts ɪt kəmz ðæt ɪz blɪs";

// replace all phonetic symbols with instructions

//dipthongs come before individual vowels
source = source.replace(/eɪ/g, " 14 ");
source = source.replace(/ɪə/g, " 15 ");
source = source.replace(/ʊə/g, " 16 ");
source = source.replace(/ɔɪ/g, " 17 ");
source = source.replace(/əʊ/g, " 18 ");
source = source.replace(/o/g, " 18 ");
source = source.replace(/eə/g, " 19 ");
source = source.replace(/ɑɪ/g, " 20 ");
source = source.replace(/ɑʊ/g, " 21 ");

//monopthongs
source = source.replace(/ɪ/g, " 1 ");
source = source.replace(/i/g, " 1 ");
source = source.replace(/a/g, " 2 ");
source = source.replace(/e/g, " 3 ");
source = source.replace(/ɜ/g, " 4 ");
source = source.replace(/ɛ/g, " 4 ");
source = source.replace(/æ/g, " 5 ");
source = source.replace(/ʊ/g, " 6 ");
source = source.replace(/u:/g, " 7 ");
source = source.replace(/u/g, " 7 ");
source = source.replace(/ɔ:/g, " 8 ");
source = source.replace(/ɔ/g, " 8 ");
source = source.replace(/ɑ:/g, " 9 ");
source = source.replace(/ɒ/g, " 10 ");
source = source.replace(/ə/g, " 11 ");
source = source.replace(/ɜ:/g, " 12 ");
source = source.replace(/ʌ/g, " 13 ");

//plosives
source = source.replace(/p/g, " 22 ");
source = source.replace(/b/g, " 23 ");
source = source.replace(/t/g, " 24 ");
source = source.replace(/d/g, " 25 ");
source = source.replace(/k/g, " 26 ");
source = source.replace(/g/g, " 27 ");


//affricatives
source = source.replace(/ʧ/g, " 28 ");
source = source.replace(/ʤ/g, " 29 ");


//fricatives
source = source.replace(/f/g, " 30 ");
source = source.replace(/v/g, " 31 ");
source = source.replace(/θ/g, " 32 ");
source = source.replace(/ð/g, " 33 ");
source = source.replace(/s/g, " 34 ");
source = source.replace(/z/g, " 35 ");
source = source.replace(/ʃ/g, " 36 ");
source = source.replace(/ʒ/g, " 37 ");
source = source.replace(/h/g, " 38 ");

//nasals
source = source.replace(/m/g, " 39 ");
source = source.replace(/n/g, " 40 ");
source = source.replace(/ŋ/g, " 41 ");

//lateral phoneme
source = source.replace(/l/g, " 42 ");

//liquid phoneme
source = source.replace(/w/g, " 43 ");
source = source.replace(/r/g, " 44 ");
source = source.replace(/j/g, " 45 ");

// instructions
source = source.replace(/ 43 /g, " tongue lifts in back of mouth while vocal cords vibrate through narrow airway");
source = source.replace(/ 44 /g, " tongue is elevated and bunched while vocal cords vibrate");
source = source.replace(/ 45 /g, " tongue lifts in front of mouth then glides into the next position");


source = source.replace(/ 14 /g, " tongue pulls back");
source = source.replace(/ 15 /g, " tongue rests");
source = source.replace(/ 16 /g, " tongue pulls back");
source = source.replace(/ 17 /g, " tongue moves from low in back of mouth to high in front of mouth");
source = source.replace(/ 18 /g, " tongue moves from low in front of mouth to high in back of mouth");
source = source.replace(/ 19 /g, " tongue rests");
source = source.replace(/ 20 /g, " tongue moves from back to front");
source = source.replace(/ 21 /g, " tongue moves from low in back of mouth to high in back of mouth");

source = source.replace(/ 1 | 2 | 3 | 4 | 5 /g, " tongue shifts forward");
source = source.replace(/ 6 | 7 | 8 | 9 | 10 /g, " tongue shifts backward");
source = source.replace(/ 11 | 12 | 13 /g, " tongue rests");

source = source.replace(/ 22 /g, " tongue rests while lips block air then release a noise burst");
source = source.replace(/ 23 /g, " tongue rests while lips block air then release a noise burst");
source = source.replace(/ 24 /g, " tongue tip blocks air then releases a noise burst");
source = source.replace(/ 25 /g, " tongue tip blocks air then releases a noise burst");
source = source.replace(/ 26 /g, " midtongue retracts and blocks air then releases a noise burst");
source = source.replace(/ 27 /g, " midtongue retracts and blocks air then releases a noise burst");

source = source.replace(/ 28 /g, " tongue creates seal on roof of mouth then releases a noise burst");
source = source.replace(/ 29 /g, " tongue creates seal on roof of mouth then releases a noise burst");

source = source.replace(/ 30 /g, " tongue rests while air is forced between lower lip touching upper teeth");
source = source.replace(/ 31 /g, " tongue rests while vocal cords vibrate between lower lip touching upper teeth");
source = source.replace(/ 32 /g, " tongue tip touches upper teeth while air is pushed through the narrow opening");
source = source.replace(/ 33 /g, " tongue tip touches upper teeth while air is pushed through the narrow opening");
source = source.replace(/ 34 /g, " tongue tip touches bottom teeth while air is pushed through the narrow opening");
source = source.replace(/ 35 /g, " tongue tip touches bottom teeth while vocal cords vibrate");
source = source.replace(/ 36 /g, " tongue touches the roof of the mouth while air is pushed through protruded lips");
source = source.replace(/ 37 /g, " tongue touches the roof of the mouth while vocal cords vibrate through protruded lips");
source = source.replace(/ 38 /g, " tongue rests while air is pushed through vocal cords pulling toward each other");

source = source.replace(/ 39 /g, " lips seal the mouth closed while vocal cords vibrate");
source = source.replace(/ 40 /g, " tongue tip touches the roof of the mouth while vocal cords vibrate");
source = source.replace(/ 41 /g, " tongue creates seal behind the teeth while vocal cords vibrate");

source = source.replace(/ 42 /g, " tongue flattens against roof of mouth while vocal cords vibrate");
source = source.replace(/  /g, " ");

// text generation variables

var i = 0;
var eachWord = source.split(" ");
var instructionsArray = [];
var instructionsString = "";
var instructionsDiv;
var interval = 500;

// speech synthesis variables

var synth = window.speechSynthesis;
var utterances = [];
var voices = synth.getVoices();
console.log(voices);

for (j=0;j<eachWord.length;j++){
    utterances[j] = new SpeechSynthesisUtterance(eachWord[j]);
    utterances[j].rate = 1.3;
    utterances[j].pitch = 1;
    if (voices[40].name == "Victoria"){
        utterances[j].voice = voices[40];
    }

}

console.log(utterances[1]);


function startInstructions(){
    i = 0;
    interval = Math.round(Math.random() * 500);

    instructionsDiv = document.getElementById('x');

    function loop(){
        interval = Math.round(Math.random() * 500)  + 250;

        setTimeout(function(){
            synth.speak(utterances[i]);
            updateInstructions();
            if (i<eachWord.length){
                loop();
            }

        }, interval);
    }

    loop();

}

function updateInstructions(){

    // update the array
    instructionsDiv = document.getElementById('x');
    instructionsArray[i] = eachWord[i];
    
    // convert the array back to a string
    instructionsString = instructionsArray.toString();
    instructionsString = instructionsString.replace(/,/g, " ");

    // update the HTML
    instructionsDiv.innerHTML = instructionsString;

    // advance by one word
    i++;
    
}