var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// init the data store
// ---------------------------
console.log('Running Script... ')
db.defaults({ posts: [] })
    .write()

// add post
// ----------------------------
// db.get('posts')
//     .push({id: 1, titleL: 'Jake Marc'})
//     .write()

// count posts
// ----------------------------
console.log(db.get('posts').value()) 
// find all posts ids
// ----------------------------
// YOUR CODE

// all matches of published false
// ----------------------------
// YOUR CODE

// find post with published false
// ----------------------------
// YOUR CODE
