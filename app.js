console.log("app");

const express = require("express");

const app = express();
const port = 3000;

const posts = [
  {
    title: "Ciambellone",
    content: "Ricetta ciambellone",
    imgUrl: "/public/imgs/ciambellone.jpeg",
    tags: ["stringa", "stringa", "stringa"]
  },
  {
    title: "Cracker alla barbabietola",
    content: "Ricetta cracker alla barbabietola",
    imgUrl: "/public/imgs/cracker_barbabietola.jpeg",
    tags: ["stringa", "stringa", "stringa"]
  },
  {
    title: "Pane fritto dolce",
    content: "Ricetta pane fritto dolce",
    imgUrl: "/public/imgs/pane_fritto_dolce.jpeg",
    tags: ["stringa", "stringa", "stringa"]
  },
  {
    title: "Pasta Barbabietola",
    content: "Ricetta ciambellone",
    imgUrl: "/public/imgs/past_barbabietola.jpeg",
    tags: ["stringa", "stringa", "stringa"]
  },
  {
    title: "Torta paesana",
    content: "Ricetta torta paesana",
    imgUrl: "/public/imgs/torta_paesana_jpeg",
    tags: ["stringa", "stringa", "stringa"]
  }
];

app.get("/", (req, res) => {
  console.log(req);
  res.send("My server");
}); // url for test 'http://localhost:3000'
app.listen(3000, () => {
  console.log(`Server listening on port ${port}`);
});

//array rotta lista almeno 5 post
app.get("/bacheca", (req, res) => {
  const postCounter = posts.length;

  const myResponse = {
    postCount: postCounter,
    posts: posts
  };

  res.json(myResponse);
});
//array rotta bacheca ==> oggetto json con lista dei post e il conteggio partendo da un array
