let database = require('./db');
let generateUsers = require('./generateUsers');
let generateBlogs = require('./generateBlogs');
let generatePosts = require('./generatePosts');

const threshold = 50;

database.users = generateUsers(threshold);
database.blogs = generateBlogs(threshold, database.users);
database.posts = generatePosts(threshold, database.users, database.blogs);
console.log(JSON.stringify(database));