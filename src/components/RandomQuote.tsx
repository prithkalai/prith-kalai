type Quote = {
  id: number;
  content: string;
  author: string;
};

const quotes: Quote[] = [
  {
    id: 1,
    content: "Coding like poetry should be short and concise.",
    author: "Santosh Kalwar",
  },
  {
    id: 2,
    content: "It's not a bug; it's an undocumented feature.",
    author: "Anonymous",
  },
  {
    id: 3,
    content: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    id: 4,
    content: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House",
  },
  {
    id: 5,
    content: "Make it work, make it right, make it fast.",
    author: "Kent Beck",
  },
  {
    id: 6,
    content:
      "Clean code always looks like it was written by someone who cares.",
    author: "Robert C. Martin",
  },
  {
    id: 7,
    content: "Of course, bad code can be cleaned up. But it’s very expensive.",
    author: "Robert C. Martin",
  },
  {
    id: 8,
    content:
      "Programming is the art of algorithm design and the craft of debugging errant code.",
    author: "Ellen Ullman",
  },
  {
    id: 9,
    content:
      "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
    author: "Rick Cook",
  },
  {
    id: 10,
    content:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    id: 11,
    content: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde",
  },
  {
    id: 12,
    content:
      "Programming is the art of telling another human being what one wants the computer to do.",
    author: "Donald Ervin Knuth",
  },
  {
    id: 13,
    content: "Confusion is part of programming.",
    author: "Felienne Hermans",
  },
  {
    id: 14,
    content:
      "No matter which field of work you want to go in, it is of great importance to learn at least one programming language.",
    author: "Ram Ray",
  },
  {
    id: 15,
    content:
      "If we want users to like our software, we should design it to behave like a likable person.",
    author: "Alan Cooper",
  },
  {
    id: 16,
    content:
      "Quality is a product of a conflict between programmers and testers.",
    author: "Yegor Bugayenk",
  },
  {
    id: 17,
    content:
      "Everybody should learn to program a computer because it teaches you how to think.",
    author: "Steve Jobs",
  },
  {
    id: 18,
    content:
      "I taught myself how to program computers when I was a kid, bought my first computer when I was 10, and sold my first commercial program when I was 12.",
    author: "Elon Musk",
  },
  {
    id: 19,
    content:
      "Software and cathedrals are much the same — first we build them, then we pray.",
    author: "Anonymous",
  },
  {
    id: 20,
    content:
      "Web development is difficult, only then it is fun to do. You just have to set your standards. If it were to be easy, would anyone do it?",
    author: "Olawale Daniel",
  },
  {
    id: 21,
    content:
      "Programmers seem to be changing the world. It would be a relief, for them and for all of us, if they knew something about it.",
    author: "Ellen Ullman",
  },
  {
    id: 22,
    content:
      "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
    author: "Linus Torvalds",
  },
  {
    id: 23,
    content: "Programmer: A machine that turns coffee into code.",
    author: "Anonymous",
  },
  {
    id: 24,
    content:
      "When I wrote this code, only God and I understood what I did. Now only God knows.",
    author: "Anonymous",
  },
  {
    id: 25,
    content:
      "I'm not a great programmer; I'm just a good programmer with great habits.",
    author: "Kent Beck",
  },
  {
    id: 26,
    content:
      "You might not think that programmers are artists, but programming is an extremely creative profession. It’s logic-based creativity.",
    author: "John Romero",
  },
  {
    id: 27,
    content: "Programming is learned by writing programs.",
    author: "Brian Kernighan",
  },
  {
    id: 28,
    content: "Software comes from heaven when you have good hardware.",
    author: "Ken Olsen",
  },
  {
    id: 29,
    content: "There is always one more bug to fix.",
    author: "Ellen Ullman",
  },
  {
    id: 30,
    content:
      "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
    author: "Sam Redwine",
  },
  {
    id: 31,
    content: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
  },
  {
    id: 32,
    content:
      "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
    author: "Dan Salomon",
  },
  {
    id: 33,
    content: "If, at first, you do not succeed, call it version 1.0.",
    author: "Khayri R.R. Woulfe",
  },
  {
    id: 34,
    content: "Computers are fast; developers keep them slow.",
    author: "Anonymous",
  },
];

const RandomQuote = () => {
  const quote = quotes[Math.floor(Math.random() * 35)];
  return (
    <div className="w-full h-fit mb-20">
      <p className="font-poppins font-medium text-lg sm:text-xl w-fit mx-auto pt-2 mb-3">
        Here's a Random Quote for you!
      </p>
      <div className="w-full pl-4 pr-4">
        <div className="w-fit mx-auto p-4 shadow-md max-w-[610px] text-xs sm:text-sm text-center font-poppins rounded-xl">
          {quote.content} <br /> - {quote.author}
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
