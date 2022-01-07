// to accomodate twitter share functionality, quotes can have a maximum of 220 characters (excluding quotation marks)
'use strict';

export interface QuoteObject {
    id: number,
    quote: string,
    year?: number
}

const quotes: QuoteObject[] = [
    {
        "id": 1,
        "quote": "I was having a shit.",
        "year": 2006
    },
    {
        "id": 2,
        "quote": "...",
        "year": 2008
    },
    {
        "id": 3,
        "quote": "Um, uh, I don't think I'll answer that. It's better that I don't say anything.",
        "year": 2008
    },
    {
        "id": 4,
        "quote": "Don't talk to me in the middle of a corner!",
        "year": 2009
    },
    {
        "id": 5,
        "quote": "We're so fucking shit, it's unbelievable.",
        "year": 2011
    },
    {
        "id": 6,
        "quote": "I don't care what happened to the others.",
        "year": 2012
    },
    {
        "id": 7,
        "quote": "I'd rather be probably out of second and third place so I don't have to go to the prize-giving.",
        "year": 2012
    },
    {
        "id": 8,
        "quote": "I know what I'm doing so just be quiet!",
        "year": 2012
    },
    {
        "id": 9,
        "quote": "I spun.",
        "year": 2012
    },
    {
        "id": 10,
        "quote": "Just leave me alone, I know what I'm doing.",
        "year": 2012
    },
    {
        "id": 11,
        "quote": "Last time, you guys was giving me shit because I didn't really smile enough, so...",
        "year": 2012
    },
    {
        "id": 12,
        "quote": "Not much, really.",
        "year": 2012
    },
    {
        "id": 13,
        "quote": "So give me full power then!",
        "year": 2012
    },
    {
        "id": 14,
        "quote": "Why do I get all the time blue flags?",
        "year": 2012
    },
    {
        "id": 15,
        "quote": "Yes, yes, yes, yes! I'm doing all the time. You don't have to remind every ten seconds.",
        "year": 2012
    },
    {
        "id": 16,
        "quote": "Don't shout there, fuck's sake! I will move when I have a chance but not in the fast corners.",
        "year": 2013
    },
    {
        "id": 17,
        "quote": "For sure, sometimes I don't know what I am doing.",
        "year": 2013
    },
    {
        "id": 18,
        "quote": "I hit the wall.",
        "year": 2013
    },
    {
        "id": 19,
        "quote": "No, I don't want to.",
        "year": 2013
    },
    {
        "id": 20,
        "quote": "OK...",
        "year": 2013
    },
    {
        "id": 21,
        "quote": "That fucking idiot. I wanna hit him when I see him.",
        "year": 2013
    },
    {
        "id": 22,
        "quote": "That idiot will crash into me if I wouldn't have gone straight.",
        "year": 2013
    },
    {
        "id": 23,
        "quote": "Tch.",
        "year": 2013
    },
    {
        "id": 24,
        "quote": "What the hell he is doing?!",
        "year": 2013
    },
    {
        "id": 25,
        "quote": "I crashed — uh — I guess you saw it.",
        "year": 2014
    },
    {
        "id": 26,
        "quote": "No.",
        "year": 2014
    },
    {
        "id": 27,
        "quote": "Why do we have a drive-through penalty?",
        "year": 2013
    },
    {
        "id": 28,
        "quote": "We can always dream about things, but we don't make the rules.",
        "year": 2014
    },
    {
        "id": 29,
        "quote": "We have to stop.",
        "year": 2014
    },
    {
        "id": 30,
        "quote": "Hey, what the fuck is this Williams?!",
        "year": 2017
    },
    {
        "id": 31,
        "quote": "I mean he's retiring again, so let's see if it actually happens.",
        "year": 2017
    },
    {
        "id": 32,
        "quote": "The only thing you see is the airport, the hotel next to the airport, and the circuit. So you can choose from that whether you're gonna miss it or not.",
        "year": 2017
    },
    {
        "id": 33,
        "quote": "What do you mean we are behind Bottas?",
        "year": 2017
    },
    {
        "id": 34,
        "quote": "Yeah yeah, if he cannot see behind then he should stay on the reporting stuff and not drive.",
        "year": 2017
    },
    {
        "id": 35,
        "quote": "Did you win the championship or not?",
        "year": 2018
    },
    {
        "id": 36,
        "quote": "Fucking finally.",
        "year": 2018
    },
    {
        "id": 37,
        "quote": "No, I don't have the power, so what's the point to waste in even thinking about it?",
        "year": 2018
    },
    {
        "id": 38,
        "quote": "Thank you.",
        "year": 2018
    },
    {
        "id": 39,
        "quote": "Why not?",
        "year": 2018
    },
    {
        "id": 40,
        "quote": "Yeah, I mean half of the track is DRS, so it should make it pretty easy...",
        "year": 2018
    },
    {
        "id": 41,
        "quote": "I don't know! You'll have to tell me.",
        "year": 2019
    },
    {
        "id": 42,
        "quote": "Is it on or not? The drink?",
        "year": 2018
    },
    {
        "id": 43,
        "quote": "Driving is the only thing I love about F1.",
        "year": 2019
    },
    {
        "id": 44,
        "quote": "It's more like a hobby for me, so obviously I don't need to do it if I don't want.",
        "year": 2019
    },
    {
        "id": 45,
        "quote": "What the fuck was he doing!? He almost hit me!",
        "year": 2019
    },
    {
        "id": 46,
        "quote": "Can you hear me now?",
        "year": 2020
    },
    {
        "id": 47,
        "quote": "FOR WHAT?!",
        "year": 2020
    },
    {
        "id": 48,
        "quote": "It's too fucking late now! Fuck's sake!",
        "year": 2020
    },
    {
        "id": 49,
        "quote": "Never been. Still not, so...",
        "year": 2020
    },
    {
        "id": 50,
        "quote": "Pit lane, new tyres!",
        "year": 2020
    },
    {
        "id": 51,
        "quote": "But you answer still.",
        "year": 2021
    },
    {
        "id": 52,
        "quote": "For me, the principle's exactly the same; you just have to perform at your maximum with the car you're given.",
        "year": 2021
    },
    {
        "id": 53,
        "quote": "Honestly, I just did whatever made me happy — I always have.",
        "year": 2021
    },
    {
        "id": 54,
        "quote": "I think sleeping is underrated.",
        "year": 2021
    },
    {
        "id": 55,
        "quote": "Good bye!",
        "year": 2021
    },
    {
        "id": 56,
        "quote": "I achieved what I wanted to do in F1, and that's the thing that matters. I don't care what anybody else thinks.",
        "year": 2021
    },
    {
        "id": 57,
        "quote": "I'm not here to please people.",
        "year": 2021
    },
    {
        "id": 58,
        "quote": "My favourite race will be Abu Dhabi, because it's my last F1 race.",
        "year": 2021
    },
    {
        "id": 59,
        "quote": "My plan is to have no plan and spend time with my family.",
        "year": 2021
    },
    {
        "id": 60,
        "quote": "The most surprising thing that happened — will happen — nothing.",
        "year": 2021
    },
    {
        "id": 61,
        "quote": "What will I do next? I don't know.",
        "year": 2021
    },
    {
        "id": 62,
        "quote": "Winning the title didn't really change my life... apart from making it more hectic.",
        "year": 2021
    },
    {
        "id": 63,
        "quote": "Yeah I know, because it just happened fucking fifty metres in front of me...",
        "year": 2021
    },
    {
        "id": 64,
        "quote": "Ah, go and interview Mikko Leppilampi. He likes to talk."
    },
    {
        "id": 65,
        "quote": "Bwoah."
    },
    {
        "id": 66,
        "quote": "Coulthard can say what he wants. I'm not interested in what he's saying."
    },
    {
        "id": 67,
        "quote": "Formula 1 would be a paradise without the media."
    },
    {
        "id": 68,
        "quote": "I don't give a damn about what Trulli says."
    },
    {
        "id": 69,
        "quote": "I'm not interested in what Jackie says. He hasn't got anything to do with me."
    },
    {
        "id": 70,
        "quote": "I'm not interested in what people think about me. I'm not Michael Schumacher."
    },
    {
        "id": 71,
        "quote": "I read somewhere that I drive with the luck of a drunk."
    },
    {
        "id": 72,
        "quote": "It's all the same if it rains or not."
    },
    {
        "id": 73,
        "quote": "Mwoah."
    },
    {
        "id": 74,
        "quote": "Others can sit in the simulators if they want. I'm here to drive."
    },
    {
        "id": 75,
        "quote": "The first sector is okay, the rest is a bit shit."
    },
    {
        "id": 76,
        "quote": "What the papers write about me afterwards makes me laugh."
    },
    {
        "id": 77,
        "quote": "You don't drive races on paper."
    },
    {
        "id": 78,
        "quote": "Boring race."
    },
    {
        "id": 79,
        "quote": "There's always a lot of talk about motivation to race, but nobody really knows what I do or what I think apart from myself, so I don't really care what people think."
    },
    {
        "id": 80,
        "quote": "I'm happy, but there's nothing to jump around about."
    },
    {
        "id": 81,
        "quote": "In F1 too many things overshadow the racing. There is too much politics."
    },
    {
        "id": 82,
        "quote": "Come on, get that McLaren out of the way!",
        "year": 2015
    },
    {
        "id": 83,
        "quote": "This guy's a fucking joke.",
        "year": 2015
    },
    {
        "id": 84,
        "quote": "That guy keeps pushing me off the circuit every time, when I'm next to him. So if that's legal, then I will do the same next time.",
        "year": 2015
    },
    {
        "id": 85,
        "quote": "What the fuck is this Marussia doing? He has been three corners now in the middle of the road.",
        "year": 2015
    }
]

export default quotes;
