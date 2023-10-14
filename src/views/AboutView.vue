<template>
  <div class="about">
    <h1 class="text-3xl">About</h1>
    <button class="linkBtn border-2 border-gray-800 " @click="createUsers()">Create 150 users</button>
    <button class="linkBtn border-2 border-gray-800 " @click="createPublications()">Create 50 publications</button>
    <button class="linkBtn border-2 border-gray-800 " @click="createFriendsRequest()">Create 6 friends request</button>
  </div>
</template>
<script>
import { faker } from '@faker-js/faker';
import { api } from '@/services/api.js';
export default {
  name: "AboutView",
  data() {
    return {
      publications: []
    }
  },
  methods: {
    createUsers() {
      for (let i = 0; i < 10; i++) {
        const user = {
          name: faker.person.fullName(),
          email: faker.internet.email(),
          age: faker.number.int({ min: 18, max: 65 }),
          password: faker.internet.password(),
          role: faker.helpers.arrayElement(['admin', 'journalist', 'reader', 'editor', 'developer', 'analyst', 'designer']),
          city: faker.address.city(),
          image: faker.image.avatar(),
          status: faker.helpers.arrayElement(['online', 'offline']),
          created_at: faker.date.past(),
          updated_at: faker.date.recent()
        }
        api.post('/users', user)
      }
    },
    createPublications() {
      for (let i = 0; i < 50; i++) {
        let publication = {
          id: faker.number.int(),
          user_id: faker.number.int({ min: 1, max: 6 }),
          title: faker.lorem.sentence(),
          description: faker.lorem.paragraph(),
          type: faker.helpers.arrayElement(['publication', 'opportunity']),
          comments: faker.helpers.arrayElement([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
          shares: faker.helpers.arrayElement([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
          likes: faker.helpers.arrayElement([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
          created_at: faker.date.past(),
          updated_at: faker.date.recent()
        }

        api.post('/user_publications', publication)
      }
    },
    createFriendsRequest() {
      for (let i = 0; i < 6; i++) {
        let friendRequest = {
          id: faker.number.int(),
          from: {
            user_id: faker.number.int({ min: 1, max: 70 }),
            name: faker.person.fullName(),
            image: faker.image.avatar(),
          },
          to: {
            user_id: 1,
            name: 'John',
          },
          status: 'pending'
        };

        api.post('/friendship_requests', friendRequest)
      }
    }
  }
};
</script>