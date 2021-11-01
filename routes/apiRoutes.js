/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  try {
    console.log('default route reached');
    res.send('You\'ve touched the default route!');
  } catch (err) {
    console.log(error);
  }
});

router.get('/get', (req, res) => {
  try {
    console.log('get route reached');
    res.send('You\'ve touched the get route!');
  } catch (err) {
    console.log(error);
  }
});

router.put('/put', (req, res) => {
  try {
    res.send('hello from put');
    console.log('put from stuff');
  } catch (error) {
    console.log(error);
  }
});

router.post('/post', (req, res) => {
  try {
    res.send('post route');
    console.log('post from the stuff')
  } catch(error) {
    console.log(error)
  }
});

router.delete('/delete', (req, res) => {
  try {
    res.send('delete route');
    console.log('delete from stuff');
  } catch (error) {
    console.log(error);
  }
});


  //Testing earlier for postman ignore wink
router.route('/stuff')
  .get((req, res) => {
    try {
      console.log('stuff default route reached');
      res.json({id: 123});
    } catch (err) {
      console.log(error);
    }
  })
  .post((req, res) => {
    try {
      console.log('post from stuff');
      res.send('you have posted something cool')
    } catch (error) {
      console.log(error);
    }
  })
  .delete((req,res)=> {
    try {
      console.log('delete from stuff');
      res.send('<h1>deleting</h1>')
    } catch (error) {
      console.log(error);
    }
  })
  .put((req, res) => {
    try {
      res.send('putting stuff')
      console.log('put from stuff');
    } catch (error) {
      console.log(error);
    }
  })

export default router;
