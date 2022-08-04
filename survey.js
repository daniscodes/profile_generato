const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (answer) => {
  let name = answer
  rl.question("What's an activity you like doing? ", (answer) => {
    let activity = answer
    rl.question("What do you listen to while doing that? ", (answer) => {
      let music = answer
      rl.question("What is your favourite colour? ", (answer) => {
        let colour = answer
        rl.question("What is your favourite food? ", (answer) => {
          let food = answer
          console.log("Hi. My name is " + name + " and I like " + activity + " while listening to " + music + ". My favourite colour is " + colour + " and my favourite food is " + food + ".")
          rl.close();
        });
      });
    });
  });
});
