function contains(val, arr){
  if(typeof arr.indexOf==="function"){return arr.indexOf(val)!==-1}
  return arr.hasOwnProperty(val)
};

function create_reply(my_type, my_content) {
  return {type: my_type,
          content: my_content}
}
function create_prompt(my_type, my_content) {
  return {type: my_type,
          content: my_content}
}

function display_reply(reply, index, user_info) {
  switch (reply.type) {
    case "text":
      return botui.message.update(index, {
        loading: false,
        delay: 0,
        content: reply.content,
      });
      break;
    case "card":
      return botui.message.update(index, {
        loading: false,
        delay: 0,
        content: '![image]('+reply.image+')' + reply.content,
      });
      break;
    default:
      return botui.message.update(index, {
        loading: false,
        delay: 0,
        content: "Unhandled type: " + reply.type,
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
        //autoHide: false,
        delay: 50,
        action: buttons
      });
    case "text":
      return botui.action.text({
        delay: 50,
        action: {
          value: '',
          placeholder: prompt.content
        }
      });
    default:
      return botui.message.bot({
        delay: 50,
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
