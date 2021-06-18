const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    message: '“Live as if you were to die tomorrow. Learn as if you were to live forever.”',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    message: '“That which does not kill us makes us stronger.”',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    message: '“Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.”',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    message: '“We must not allow other people’s limited perceptions to define us.”',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    message: '“Do what you can, with what you have, where you are.”',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    message: '“Be yourself; everyone else is already taken.”',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    message: 'This above all: to thine own self be true.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    message: '“If you cannot do great things, do small things in a great way.”',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    message: '“If opportunity doesn’t knock, build a door.”',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    message: '“Wise men speak because they have something to say; fools because they have to say something.”',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    message: '“Strive not to be a success, but rather to be of value.”',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    message: '“Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.”',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    message: '“Do not let what you cannot do interfere with what you can do.”',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    message: '“Whenever you find yourself on the side of the majority, it is time to pause and reflect.”',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    message: '“I haven’t failed. I’ve just found 10,000 ways that won’t work.”',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    message: '“Either you run the day, or the day runs you.”',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    message: '“A journey of a thousand leagues begins beneath one’s feet.”',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    message: '“I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    message: '“Life shrinks or expands in proportion to one’s courage.”',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    message: '“You must be the change you wish to see in the world.”',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
