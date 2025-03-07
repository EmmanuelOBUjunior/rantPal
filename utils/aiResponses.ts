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
  } else if (lowerRant.includes('css')|| lowerRant.includes('styling')){
    return getRandomFromCategory('css')
  }else{
    return getRandomFromCategory('general')
  }
    const responses = [
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
      "Have you considered a career in goat farming instead? Much less debugging involved.",
      "Try adding more coffee to your code. I hear Java runs better that way.",
      "Your code isn't slow, it's just contemplative.",
      "The solution is to work only between 2 AM and 5 AM when the coding gods are most active.",
      "Have you tried threatening your computer? Sometimes they respond to fear.",
      "I suggest rewriting everything in assembly. It's the only way to be sure.",
      "The problem is that Mercury is in retrograde, affecting your Git commits.",
      "Try coding with your non-dominant hand. It activates the creative side of your brain.",
      "Have you tried interpretive dance as a debugging technique?",
      "Your code isn't buggy, it's just expressing its individuality.",
    ];

  //Get a random response
  return responses[Math.floor(Math.random() * responses.length)];
};

//TODO: Adding more sophisticated response generation based on keywords in the rant
