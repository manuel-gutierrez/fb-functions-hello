// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// const axios = require('axios');

// /**
//  * A simple text test assertion to check it is working
//  */

// exports.test = () => {
//     return "hello";
// };

// /**
//  * Responds to any HTTP request that can provide a "message" field in the body.
//  *
//  * @param {Object} req Cloud Function request context.
//  * @param {Object} res Cloud Function response context.
//  */

// exports.helloWorld = (req, res) => {
//     if (req.body.message === undefined) {
//       // This is an error case, as "message" is required
//       res.status(400).send('No message defined!');
//     } else {
//       // Everything is ok
//       console.log(req.body.message);
//       res.status(200).end();
//     }
//   };


//  /**
//  * Make a test request.
//  *
//  * @param {Object} req Cloud Function request context.
//  * @param {Object} res Cloud Function response context.
//  */


// exports.test1 = () => {

//     // const instance = axios.create({
//     //     baseURL: 'https://us18.api.mailchimp.com/3.0/',
//     //     timeout: 3000,
//     //     headers: {'Authorization':'apikey 7de1ffec50d8b6ae4e45a193dd1bbf93-us18'}
//     // });

//     // instance.get('/lists/428fd40657/members')
//     //   .then(response => {
//     // //    console.log(response.data.explanation);
//     //    return console.log(response.data.members[0].id);
//     //   })
//     //   .catch(error => {
//     //     return console.log(error); 
//     //   });
// }



