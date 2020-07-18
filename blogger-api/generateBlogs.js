const faker = require('faker');

const categories = [
    'TECH',
    'FOOD',
    'travel'
];

module.exports = (threshold, users) => {
    const blogs = [];
    for (let i = 1; i<= threshold; i++) {
        const randomUserId = Math.floor(Math.random() * (users.length)) + 1;
        const randomCategoryIndex = Math.floor(Math.random() * (categories.length - 1));
        blogs.push({
            id: `${randomUserId}-${i}`,
            name: faker.lorem.words(),
            category: categories[randomCategoryIndex],
            authorId: `${randomUserId}`
        });
    }
    return blogs;
};
