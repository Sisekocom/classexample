import express from 'express'
import { Person } from './person.js' // Assuming Person.js is in the same directory

const app = express();
const router = express.Router();
const port = process.env.PORT || 4000;

app.use(
  express.json(),
  router
);

router.get('^/$|/ejd', async (req, res) => {
  res.json({
    status: res.statusCode,
    msg: 'You\'re Home'
  });
});

router.get('/person', async (req, res) => {
  let person1 = new Person();
  person1.display();
  res.end('Please check the console');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
