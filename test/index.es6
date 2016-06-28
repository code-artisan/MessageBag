import MessageBag from '../MessageBag.es6';

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

// console.log( $messages.messages() );
// console.log( $messages.first() );

$messages.merge({
  'email': [
    'email is not invalid.'
  ]
});

console.log( $messages.messages() );
