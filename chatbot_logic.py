def generate_reply(user):
    u = user.lower()
    if "hi" in u:
        return "Hellooooooooooo! How ya doin', person! Do I know you? Have I heard of you? Did you know that before Shakesbere invented the name jessica, nobody called anybody jessica? Well, there I go again, mixing stuff up. This is why you come to octa - I teach you to travel, and you teach me to talk! Deal?! Type in 'joke','weather', or 'travel', or 'bye' to explore ME!!👧🏾📲 😜"
    elif "bye" in u:
        return "Todaloooo! ✋🏾🏃🏾"
    elif "weather" in u:
        return "The weather is stormy in Singapore! ⛈😕"
    elif "joke" in user:
        return "Q: Why do they call coffee mud? A: Because it was ground a couple of minutes ago. 😜 And, Q. What do you call a droid that likes taking the scenic route? A. R2-Detour!🤖"
    elif "travel" in user:
        return "Travel is epic! See the sights and go on flights! ✈️🏙"
    else:
        return "Huh? What did you mean by '" + user + "'! Its like you said 'Bah! Humbug!' or something! "
