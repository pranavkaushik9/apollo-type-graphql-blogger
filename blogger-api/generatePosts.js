const faker = require('faker');

module.exports = (threshold, users, blogs) => {
    const posts = [];
    for (let i = 1; i<= threshold; i++) {
        const randomUserId = Math.floor(Math.random() * (users.length)) + 1;
        const userBlogs = blogs.filter(blog => blog.id.indexOf(`${randomUserId}-`) > -1)
        if (userBlogs.length == 0) {
            continue;
        }
        const randomBlogIndex = Math.floor(Math.random() * (userBlogs.length - 1));
        posts.push({
            id: `${i}`,
            authorId: randomUserId,
            blogId: userBlogs[randomBlogIndex].id,
            title: faker.lorem.words(),
            body: faker.lorem.paragraphs()
        });
    }
    return posts;
};
