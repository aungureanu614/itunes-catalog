const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const fetch = require('node-fetch');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/api/search', async(req, res) => {
  const itunes = await fetch(`https://itunes.apple.com/search?term=${req.query.term}`);
  const answer = await itunes.json(); 
  const kindObj = {};
  // TODO: clean up this function
  answer.results.forEach((media) => {
    if(media.kind && !kindObj[media.kind]) {
      kindObj[media.kind] = [{id: media.trackId, name: media.trackName, genre: media.primaryGenreName, url: media.trackViewUrl, artwork: media.artworkUrl100}];
    } else if(media.kind && kindObj[media.kind]) {
      kindObj[media.kind].push({id: media.trackId, name: media.trackName, genre: media.primaryGenreName, url: media.trackViewUrl, artwork: media.artworkUrl100})
    }
  });
  
  res.send(kindObj);
});
app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});
app.listen(port, () => console.log(`Listening on port ${port}`));