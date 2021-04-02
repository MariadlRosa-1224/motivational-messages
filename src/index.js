
const messages = [
    "You don't have to know everything. We all have our own talents.",
    "No matter what you think, there's always someone who cares about you.",
    "You are incredible.",
    "Continue with the great work.",
    "A smile can make a better day.",
    "You deserve to be happy.",
    "All your work will matter.",
    "It's okay to feel sad sometimes.",
    "Your emotions matter.",
    "Never hide your feelings.",
    "There are things that you can't control, they are not your responsability.",
    "Learn as if you will live forever, live like you will die tomorrow.",
    "It's good to change, but don't let people change you.",
    "Now is always a good moment to start something.",
    "Nothing last forever, no even the bad moments.",
    "You are wonderful.",
    "You will be ok.",
    "Dreams come true",
    "Success is getting what you want, happiness is wanting what you get.",
    "Don’t let yesterday take up too much of today.",
    "Just one small positive thought in the morning can change your whole day.",
    "Don't let someone else's opinion of you become your reality.",
    "Just be yourself",
    "You are not alone",
    "Don’t worry about failure; you only have to be right once.",
    "never look back, darling. It distracts from the now.",
    "If you really want to do something, you'll find a way. If you don't, you'll find an excuse.",
    "Today is a perfect day to start something new.",
    "Work isn't everything, everyone need to rest sometimes",
    "Stay away from those people who try to disparage your ambitions.",
    "We May Encounter Many Defeats But We Must Not Be Defeated.",
    "No matter how many times we see a sunset, they are always beautiful.",
    "Whether You Think You Can Or Think You Can’t, You’re Right.",
    "Creativity Is Intelligence Having Fun.",
    "You Are Never Too Old To Set Another Goal Or To Dream A New Dream.",
    "Today’s Accomplishments Were Yesterday’s Impossibilities."
]

const motivationalMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
};

module.exports = { motivationalMsg };