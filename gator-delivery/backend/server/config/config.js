//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

export default {
  db: {
    uri: 'mongodb+srv://user:test@cen3031-summer-2020-jqavu.mongodb.net/<dbname>?retryWrites=true&w=majority'//place the URI of your mongo database here.
  }, 
  openCage: {
    key: 'ff3c9cb50b894f4cb65866e39a3f2b9b' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 5000
};