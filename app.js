// console.log("app");

const express = require('express');

const app = express();
const port = 3000;

const posts = [
  {
    title: 'Ciambellone',
    content: 'Ricetta ciambellone',
    imgUrl: '/imgs/ciambellone.jpeg',
    tags: ['stringa', 'stringa', 'stringa']
  },
  {
    title: 'Cracker alla barbabietola',
    content: 'Ricetta cracker alla barbabietola',
    imgUrl: '/imgs/cracker_barbabietola.jpeg',
    tags: ['stringa', 'stringa', 'stringa']
  },
  {
    title: 'Pane fritto dolce',
    content: 'Ricetta pane fritto dolce',
    imgUrl: '/imgs/pane_fritto_dolce.jpeg',
    tags: ['stringa', 'stringa', 'stringa']
  },
  {
    title: 'Pasta Barbabietola',
    content: 'Ricetta ciambellone',
    imgUrl: '/imgs/past_barbabietola.jpeg',
    tags: ['stringa', 'stringa', 'stringa']
  },
  {
    title: 'Torta paesana',
    content: 'Ricetta torta paesana',
    imgUrl: '/imgs/torta_paesana.jpeg',
    tags: ['stringa', 'stringa', 'stringa']
  }
];

app.use(express.static('public')); //resa pubblica degli asset statici

app.get('/', (req, res) => {
  console.log(req);
  res.send('Server del mio blog');
}); // url for test 'http://localhost:3000'
app.listen(3000, () => {
  console.log(`Server listening on port ${port}`);
});

//array rotta lista almeno 5 post
app.get('/bacheca', (req, res) => {
  const postCounter = posts.length;

  const myResponse = {
    postCount: postCounter,
    posts: posts
  };

  res.json(myResponse);
});
//array rotta bacheca ==> oggetto json con lista dei post e il conteggio partendo da un array
