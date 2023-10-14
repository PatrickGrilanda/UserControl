<template>
  <div class="lg:grid lg:grid-cols-5 lg:gap-4">
    <aside class="hidden lg:block rounded-lg h-full max-h-fit">
      <div class="sticky start-0 top-24">
        <h3 class="text-lg font-semibold text-gray-700">Actions</h3>
        <ul class="flex flex-col gap-2">
          <li class="border px-2 pb-2 linkBtn text-start text-gray-800 hover:bg-purple-600 hover:text-white flex gap-2">
            <span class="bi bi-person-fill-add"></span>
            Add Friends
          </li>
          <li class="border px-2 pb-2 linkBtn text-start text-gray-800 hover:bg-purple-600 hover:text-white flex gap-2">
            <span class="bi bi-briefcase-fill"></span>
            Oportunities
          </li>
          <li class="border px-2 pb-2 linkBtn text-start text-gray-800 hover:bg-purple-600 hover:text-white flex gap-2">
            <span class="bi bi-bookmark-fill"></span>
            Saved Oportunities
          </li>
          <li class="border px-2 pb-2 linkBtn text-start text-gray-800 hover:bg-purple-600 hover:text-white flex gap-2">
            <span class="bi bi-people-fill"></span>
            Groups
          </li>
          <li class="border px-2 pb-2 linkBtn text-start text-gray-800 hover:bg-purple-600 hover:text-white flex gap-2">
            <span class="bi bi-exclamation-circle-fill"></span>
            Last Notices
          </li>
        </ul>
        <hr class="my-2">
        <h3 class="text-lg font-semibold text-gray-700">Groups</h3>
        <ul class="flex flex-col gap-2">
        </ul>
      </div>
    </aside>
    <main class="col-span-3 max-h-full">
      <div class="bg-white rounded-lg shadow border p-2 sticky top-24 z-10">
        <div class="flex justify-between gap-4 items-center">
          <img :src="user.image" class="w-10 h-10 rounded-full">
          <button class="form-input rounded-xl text-start bg-slate-200 hover:bg-slate-500 hover:text-white">
            {{ 'What are you thinking ' + user.name + '?' }}
          </button>
        </div>
        <hr class="my-2">
        <div class="flex flex-col lg:flex-row justify-around gap-4">
          <button class="btn border text-gray-800 hover:bg-purple-600 hover:text-white flex items-center gap-2">
            <span class="bi bi-briefcase-fill"></span>
            Promote an Oportunity
          </button>
          <button class="btn border text-gray-800 hover:bg-purple-600 hover:text-white flex items-center gap-2">
            <span class="bi bi-image-fill"></span>
            Image
          </button>
          <button class="btn border text-gray-800 hover:bg-purple-600 hover:text-white flex items-center gap-2">
            <span class="bi bi-play-btn-fill"></span>
            Video
          </button>
        </div>
        <div class="flex justify-end my-3">
          <DropdownComponent>
            <template v-slot:dropdown-title>
              <div class="flex justify-between gap-2">
                <span class="text-md font-bold">Order by: {{ feedClassification }}</span>
                <span class="bi bi-arrow-down"></span>
              </div>
            </template>
            <template v-slot:dropdown-content>
              <ul class="flex flex-col gap-2">
                <li class="linkBtn text-start" @click="feedClassification = 'Most Recent'">
                  Most Recent
                </li>
                <li class="linkBtn text-start" @click="feedClassification = 'Most Popular'">
                  Most Popular
                </li>
              </ul>
            </template>
          </DropdownComponent>
        </div>
      </div>
      <ul class="flex flex-col gap-2 my-8 ">
        <li v-for="publication in friendsPublications" :key="publication.id">
          <CardComponent :title="publication.title">
            <template v-slot:card-header>
              <div class="flex justify-between">
                <div class="flex items-center gap-2">
                  <img :src="filterFriend(publication.user_id).image" class="w-10 h-10 rounded-full">
                  <span class="text-md font-bold">{{ filterFriend(publication.user_id).name }}
                  </span>
                </div>
                <span class="text-gray-600 text-sm">{{ formatDateTime(publication.created_at) }}</span>
              </div>
              <hr class="my-2">
            </template>
            <template v-slot:card-content>
              <p class="text-gray-600">{{ publication.description }}</p>
              <img v-if="publication.image" :src="publication.image" class="w-full h-48 object-cover rounded-lg">
              <div v-if="publication.type == 'opportunity'"
                class="flex flex-col gap-4 md:flex-row md:justify-between justify-start md:items-end mt-4">
                <PostsActionbarComponent :likes="publication.likes" :comments="publication.comments"
                  :shares="publication.shares">
                </PostsActionbarComponent>
                <div class="lg:flex lg:justify-end">
                  <div class="lg:flex lg:flex-col lg:gap-2">
                    <button class="btn btn-primary flex gap-2">
                      <span class="bi bi-check-circle-fill"></span>
                      Apply
                    </button>
                  </div>
                </div>
              </div>
              <div v-else class="flex flex-col gap-4 md:flex-row md:justify-between justify-start md:items-end mt-4">
                <PostsActionbarComponent></PostsActionbarComponent>
              </div>
            </template>
          </CardComponent>
        </li>
      </ul>
    </main>
    <aside class="hidden lg:block rounded-lg h-full max-h-fit">
      <div class="flex flex-col gap-2 sticky right-0 top-24">
        <div class="flex flex-col gap-2">
          <h3 class="text-lg font-semibold text-gray-700">Friendship Requests</h3>
          <ul class="flex flex-col gap-2" v-if="friendshipRequests.length > 4">
            <li v-for="i in 4" :key="i">
              <div class="grid grid-cols-3 items-center" v-if="friendshipRequests[i] != undefined">
                <div class="col-span-2 flex">
                  <img :src="friendshipRequests[i].from.image" class="w-10 h-8 rounded-full">
                  <span class="ml-2">{{ friendshipRequests[i].from.name }}</span>
                </div>
              </div>
            </li>
          </ul>
          <button
            class="text-center btn bg-slate-200 border border-slate-300 shadow-sm text-gray-800 hover:bg-slate-700 hover:text-white  my-3"
            v-if="friendshipRequests.length > 4">See more...</button>
        </div>
        <hr class="my-2">
        <div class="flex flex-col gap-2">
          <h3 class="text-lg font-semibold text-gray-700">Friends</h3>
          <ul class="flex flex-col gap-2">
            <li class="linkBtn" v-for="friend in friends" :key="friend.id">
              <div class="flex items-center">
                <div class="relative">
                  <img :src="friend.image" class="inline-block h-10 w-10 rounded-full ring-2 ring-white">
                  <span v-if="friend.status == 'online'"
                    class="absolute bottom-0 right-0 w-3 h-3 z-10 bg-green-600 rounded-full  border-2 border-white">
                  </span>
                  <span v-else-if="friend.status == 'offline'"
                    class="absolute bottom-0 right-0 w-3 h-3 z-10 bg-gray-600 rounded-full  border-2 border-white">
                  </span>
                </div>
                <span class="ml-2">{{ friend.name }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import { api } from '@/services/api.js'
import CardComponent from '@/components/utilities/CardComponent.vue'
import DropdownComponent from '@/components/utilities/DropdownComponent.vue'
import PostsActionbarComponent from '@/components/layout/PostsActionbarComponent.vue'
import { helper } from '@/services/helpers.js'
export default {
  name: 'HomeView',
  data() {
    return {
      friends: [],
      friendsPublications: [],
      friendshipRequests: [],
      feedClassification: 'Most Recent'
    }
  },
  components: {
    CardComponent,
    DropdownComponent,
    PostsActionbarComponent
  },
  methods: {
    async getFriendsPublications() {
      if (Array.from(this.user.friends).length === 0) return;
      await api.get('/user_publications' + this.mountQuery(Array.from(this.user.friends), 'user_id'))
        .then((response) => {
          this.friendsPublications = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    mountQuery(friends, tag) {
      let query = '?'
      friends.forEach((friend) => {
        query += `${tag}=${friend}&`
      })
      return query;
    },
    getFriends() {
      api.get('/users' + this.mountQuery(Array.from(this.user.friends), 'id'))
        .then((response) => {
          this.friends = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getFriendshipRequests() {
      api.get('/friendship_requests?to.user_id=' + this.user.id + '&status=pending')
        .then((response) => {
          this.friendshipRequests = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    updateFriends() {
      setTimeout(() => {
        this.getFriendsPublications(),
          this.getFriends(),
          this.getFriendshipRequests()
      }, 500)
    },
    filterFriend(id) {
      const foundFriend = this.friends.find(friend => friend.id === id);
      if (!foundFriend) {
        return { image: 'path/to/default/image.png', name: 'Desconhecido' }; // ou qualquer outro valor padrão
      }
      return foundFriend;
    },
    formatDateTime(date) {
      return helper.formatDateTime(date)
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  watch: {
    feedClassification(el) {
      if (el === 'Most Recent') {
        this.friendsPublications.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at)
        })
      } else if (el === 'Most Popular') {
        this.friendsPublications.sort((a, b) => {
          return b.likes.length - a.likes.length
        })
      }
    }
  },
  created() {
    this.updateFriends()
  }
}
</script>
