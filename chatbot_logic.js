function contains(val, arr){
  if(typeof arr.indexOf==="function"){return arr.indexOf(val)!==-1}
  return arr.hasOwnProperty(val)
};
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
    return {reply: create_reply("text", "Greetings human😎! I am a Martian, mr. å¥πø (Ay-yp-pi-oslash) 👽 and my team and I are trying to decide if we should give you this scientifically-designed explosion-worthy-cake🎂, or EAT YOU FOR MY DINNER🍽😲! Roast head is a favorate of ours! If you want the cake, you must answer these questions correctly. One wrong move, and we will consider roasting you for dinner. Do you agree?"),
            prompt: create_prompt("button", ["Bah, dumbo, OK.","URGH!!! Fine."])}

  } else if (contains("Bah, dumbo, OK", text) || contains("URGH!!! Fine.", text)) {
    return {reply: create_reply("text", "Rude. But I suppose I'll let you get away with it - this twice. So, last chance - ready to riddle your way to cake, or to let me roast you up. Mmmm, I can TASTE the roast head!"),
            prompt: create_prompt("button", ["FINE. UNDER PROTEST.","Born ready!!!"])}

  } else if (contains("Born ready!", text)) {
    return {reply: create_reply("text", "So confident, eh? Well then, I'll send for the hardest. # Mr. å¥πø, the hardest jokes are ready!!! # Exelent!😋 What do you call a sight-seeing robot?!?"),
            prompt: create_prompt("button", ["R2Detour!","A bus!"])}

  } else if (contains("R2", text) || contains("egg", text))  {
    return {reply: create_reply("text", "Did I mention that - no, I kept it a seceret! That was the hardest of them all! You earned your cake - and roast chicken is just as good. Ωˆ˜˜ˆå, fech the - hmmm, ah! - the superjump sause. Tonight we go to MARZ!!!"),
            prompt: create_prompt("button", ["Bye!","Bye!"])}

  } else if (contains("FINE. UNDER PROTEST.", text)) {
    return {reply: create_reply("text", "I'll take pity on you, lucky roasted head! Heres an tough one, and thats pity for you in mars - What do you call a confused chicken?"),
            prompt: create_prompt("button", ["A fork in yolk","Scrambled eggs!"])}

  } else if (contains("fork", text) || contains("bus", text))  {
    return {reply: create_reply("text", "Bom bom bom! Wrong! Sorry! Hand on a sec, martion call - Hello...Oh!...OK...WHAT?!...Fine...Bye, å¬¬ˆå. I just found out - it's your birthday. Go on eat. Allia, or å¬¬ˆå, ruined my spare head suply and geve them back to humans, so chiken is fine. Toodles!!"),
            prompt: create_prompt("button", ["Bye!!!","Toodles!"])}

  } else if (contains("bye", text_lower) || contains("toodles", text_lower))  {
    return {reply: create_reply("text", "I said, bye! Start the engines, Ωˆ˜˜ˆå!"),
            prompt: create_prompt("null", null)}
  }

};

function create_reply(my_type, my_content) {
  return {type: my_type,
          content: my_content}
}
function create_prompt(my_type, my_content) {
  return {type: my_type,
          content: my_content}
}

function display_reply(reply) {
  switch (reply.type) {
    case "text":
      return botui.message.bot({
        delay: 300,
        content: reply.content
      });
      break;
    case "image":
      //TODO
    default:
      return botui.message.bot({
        delay: 300,
        content: "Unhandled type: " + reply.type
      });
  }
}

function display_prompt(prompt) {
  switch (prompt.type) {
    case "button":
      var buttons = [];
      for (var i=0; i<prompt.content.length; i++) {
        buttons.push({text: prompt.content[i],value: prompt.content[i]})
      }
      return botui.action.button({
        action: buttons
      });
    case "text":
      return botui.action.text({
        delay: 1000,
        action: {
          value: '',
          placeholder: prompt.content
        }
      });
    default:
      return botui.message.bot({
        delay: 300,
        content: "Unhandled type: " + prompt.type
      });
  }
}

/**
THIS IS A BLOCK COMMENT
1. greet
2. riddles (3 doors, coffee mud, scenic droid, and many more)
3. is it your birthday? (ask if answer riddle wrongly)
4. sing happy birthday song (variants of it)
5. And you may eat the cake (display cake)
6. remove cake GENTLY!!!! 🎂
Note: put in 1000000000000000º emojis!!
*/
