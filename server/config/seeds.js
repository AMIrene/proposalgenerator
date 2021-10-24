const db = require('./connection');
const { User, Project } = require('../models');

const userSeeds = require('./userSeeds.json');
const projectSeeds = require('./projectSeeds.json');

db.once('open', async () => {
  try {
    await Project.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < projectSeeds.length; i++) {
      const { _id, projectManager } = await Project.create(projectSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: projectManager },
        {
          $addToSet: {
            projects: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});



// db.once('open', async () => {
//   await User.deleteMany();

//   await User.create({
//     email: 'pamela@testmail.com',
//     password: 'password12345'
//   });

//   await User.create({
//     email: 'eholt@testmail.com',
//     password: 'password12345'
//   });

//   console.log('users seeded');

//   process.exit();
// });
