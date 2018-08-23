import MessageBag from '../index.es6';

window.$messages = new MessageBag({
  'email': [
    'email is required.',
    'email has be taken.'
  ],
  'username': [
    'uesrname is required',
    'username has be taken'
  ]
});

$messages.merge({
  'email': [
    'email is not invalid.'
  ],
  'password': [
    'password is required.'
  ]
});

// $messages.refresh({
//   'nickname': 'nickname is not invalid.'
// });

console.log( $messages.first('email', 'key: :key, message: :message') );
console.log( $messages.all('key: :key, message: :message') );
console.log( $messages.messages() );
