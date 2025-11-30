const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api', (req, res) => {
  res.send({ users : ['User1', 'User2', 'User3'] });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});