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
      var content = reply.content
      if (reply.image) {
        content = `![image](${reply.image})\n` + content
      }
      if (reply.buttons) {
        content += '\n'
        reply.buttons.map(button => {
          content += `![${button}][${button}]`
        })
      }
      return botui.message.update(index, {
        loading: false,
        delay: 0,
        content: content,
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
      for (var i=0; i<prompt.content.primary.length; i++) {
        buttons.push({text: prompt.content.primary[i], value: prompt.content[i]})
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
