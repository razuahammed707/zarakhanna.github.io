function generate_reply_prompt_pair(user){
  text = user.value;
  text_lower = text.toLowerCase();
  /**
  return {reply: {type: "text", //text/image
                  content: "Greetings human😎! I am a Martian👽 and my team and I are trying to decide if we should give you this scientifically-designed explosion-worthy-cake🎂, or EAT YOU FOR MY DINNER🍽😲! Roast head is a favorate of ours! If you want the cake, you must answer these questions correctly. One wrong move, and we will consider roasting you for dinner. Do you agree?",
                 }
          prompt: {type: "button", //button/text/dropdown???
                   content: ["Yes", "Yes"]}
         }
  */

  if (text_lower == "new conversation") {
    return {reply: create_reply("text", "Greetings human😎! I am a Martian, mr. å¥πø (Ay-yp-pi-oslash) 👽 and my team and I are trying to decide if we should give you this scientifically-designed explosion-worthy-cake🎂, ![cake](https://techflourish.com/images/birthday-cake-gif-clipart.gif) or EAT YOU FOR MY DINNER🍽😲! Roast head is a favorate of ours! If you want the cake, you must answer these questions correctly. One wrong move, and we will consider roasting you for dinner. Do you agree?"),
            prompt: create_prompt("button", ["Bah, dumbo, OK.","URGH!!! Fine."])}

  } else if (contains("Bah, dumbo, OK", text) || contains("URGH!!! Fine.", text)) {
    return {reply: create_reply("text", "Rude. But I suppose I'll let you get away with it - this twice. So, last chance - ready to riddle your way to cake, or to let me roast you up. Mmmm, I can TASTE the roast head!"),
            prompt: create_prompt("button", ["FINE. UNDER PROTEST.","Born ready!!!"])}

  } else if (contains("Born ready!", text)) {
    return {reply: create_reply("text", "So confident, eh? Well then, I'll send for the hardest. # Mr. å¥πø, the hardest jokes are ready!!! # Exelent!😋 What do you call a sight-seeing robot?!?"),
            prompt: create_prompt("button", ["R2Detour!","A bus!"])}

  } else if (contains("R2", text) || contains("egg", text))  {
    return {reply: create_reply("text", "Did I mention that - no, I kept it a seceret! That was the hardest of them all! You earned your cake - and roast chicken is just as good. Ωˆ˜˜ˆå, fech the - hmmm, ah! - the superjump sause. Tonight we go to MARS!!! ![mars](http://bestanimations.com/Earth&Space/Planets/mars-planet-animation-4.gif)"),
            prompt: create_prompt("button", ["Bye!","Bye!"])}

  } else if (contains("FINE. UNDER PROTEST.", text)) {
    return {reply: create_reply("text", "I'll take pity on you, lucky roasted head! Heres an tough one, and thats pity for you in mars - What do you call a confused chicken?"),
            prompt: create_prompt("button", ["A fork in yolk","Scrambled eggs!"])}

  } else if (contains("fork", text) || contains("bus", text))  {
    return {reply: create_reply("text", "Bom bom bom! Wrong! Sorry! Hand on a sec, martion call - Hello...Oh!...OK...WHAT?!...Fine...Bye, å¬¬ˆå. I just found out - it's your birthday. Go on eat. Allia, or å¬¬ˆå, ruined my spare head suply and geve them back to humans, so chicken is fine. Toodles!! ![lol](https://thumbs.gfycat.com/ViciousTerribleIberianmidwifetoad-size_restricted.gif)"),
            prompt: create_prompt("button", ["Bye!!!","Toodles!"])}

  } else if (contains("bye", text_lower) || contains("toodles", text_lower))  {
    return {reply: create_reply("text", "I said, bye! Start the engines, åµåΩ´å©ˆ®¬(amazagirl)! ![bye](https://thumbs.gfycat.com/BitesizedTerribleCanine-small.gif)"),
            prompt: create_prompt("null", null)}
  }

};
