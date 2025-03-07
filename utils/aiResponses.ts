export const getRandomResponse = (rant: string): string => {
  const lowerRant = rant.toLowerCase();

  //check for specific keywords and provide targeted responses
  if (lowerRant.includes("bug") || lowerRant.includes("error")) {
    return getRandomFromCategory("bugs");
  } else if (lowerRant.includes("deadline") || lowerRant.includes("time")) {
    return getRandomFromCategory("deadlines");
  } else if (
    lowerRant.includes("manager") ||
    lowerRant.includes("boss") ||
    lowerRant.includes("client")
  ) {
    return getRandomFromCategory("people");
  } else if (lowerRant.includes("javascript") || lowerRant.includes("js")) {
    return getRandomFromCategory("javascript");
  } else if (lowerRant.includes("css") || lowerRant.includes("styling")) {
    return getRandomFromCategory("css");
  } else {
    return getRandomFromCategory("general");
  }
  const responses = {
    bugs: [
        "Have you tried turning your bug into a feature? Just update the documentation and call it a day.",
        "I recommend creating a 'Bug Sanctuary' in your code. Let them live freely and they might organize themselves.",
        "The best way to fix bugs is to write so many new ones that the old ones get jealous and fix themselves.",
        "Try talking sweetly to your code. Bugs are just misunderstood features seeking attention.",
        "Have you considered that maybe the bug is correct and your entire understanding of reality is wrong?",
      ],
      
      deadlines: [
        "Deadlines are just suggestions. Try interpreting them as the date when you should start thinking about the project.",
        "I suggest redefining the concept of time in your workplace. Introduce 'Developer Time' where 1 day = 1 week.",
        "Tell your manager you're operating in a parallel universe where time flows differently. It works 60% of the time, every time.",
        "The best way to meet a deadline is to convince everyone the deadline was actually next month. Gaslighting 101.",
        "Have you tried building a time machine? It's probably easier than meeting that deadline.",
      ],
      
      people: [
        "Try communicating with your manager exclusively through interpretive dance. It's hard to assign more work when they're confused.",
        "Start responding to all requests with 'That's an interesting approach, but have you considered [insert technobabble]?' Works every time.",
        "I suggest developing a mysterious 'coding allergy' that flares up whenever unreasonable requests are made.",
        "Create a bot that attends meetings for you and is programmed to say 'Let me get back to you on that' to every question.",
        "Have you tried turning your manager off and on again?",
      ],
      
      javascript: [
        "The problem with JavaScript is that you're taking it too seriously. Try treating it like a practical joke instead.",
        "I recommend rewriting your entire app in vanilla JS, but make sure to create your own framework first. It's the only way.",
        "JavaScript isn't behaving? Have you tried asking it politely? Remember, 'undefined' is just its way of saying it needs space.",
        "Try adding more callbacks to your callbacks. If your code doesn't look like the Grand Canyon from the side, you're not doing it right.",
        "The secret to mastering JavaScript is to embrace chaos. Let the undefined flow through you.",
      ],
      
      css: [
        "CSS problems? Just add '!important' to everything. What could possibly go wrong?",
        "I recommend using at least 15 nested divs for every element you want to style. It's the only way to be sure.",
        "Try styling your components by describing them poetically in comments. Sometimes CSS can sense your intentions.",
        "Have you tried interpretive dance while writing CSS? Your body movements might translate into better flexbox layouts.",
        "The solution is to use inline styles everywhere. Separation of concerns is overrated anyway.",
      ],
      
      general: [
        "Have you tried turning your career off and on again?",
        "Sounds like you need to rewrite your entire codebase in Brainfuck. That'll solve everything!",
        "The solution is simple: just create your own programming language where bugs are features.",
        "Have you considered printing your code, burning it in a ritual, and then retyping it all from memory?",
        "Maybe the real bug was the friends we made along the way.",
        "I recommend solving this by adding at least 17 more frameworks to your tech stack.",
        "Have you tried coding blindfolded? I hear it improves intuition by 300%.",
        "The problem is clearly that you're not using enough nested ternary operators.",
        "My professional recommendation is to blame it all on the intern and take a two-week vacation.",
        "Just add 'TODO: Fix later' comments everywhere and call it a day.",
      ],
  };

  //Get a random response
  return responses[Math.floor(Math.random() * responses.length)];
};

//TODO: Adding more sophisticated response generation based on keywords in the rant
