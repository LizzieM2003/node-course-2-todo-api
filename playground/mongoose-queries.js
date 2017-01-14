const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// const id = '5879e610bc97a1620bce6eab11';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

/*
Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo by id', todo);
}).catch(e => console.log(e));
*/

const id = '58790bcf8a478542f7a1bde4';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User By Id', user);
}).catch(e => console.log(e));
