<script>
import UserCard from '../components/user-card.vue'
import gql from 'graphql-tag'

const numOfUsers = '100'
const gender = 'all'

export default {
  name: 'UserApollo',
  components: { UserCard },
  data() {
    return {
      more: false,
      numbers: Array.from({ length: 30 }, (_, i) => i + 1),
      getUsers: null
    }
  },
  apollo: {
    getUsers: {
      query: gql`
        query GetUsers($numOfUsers: String!, $gender: String!) {
          getUsers(numOfUsers: $numOfUsers, gender: $gender) {
            name {
              first
              last
            }
            location {
              country
            }
            picture {
              large
            }
            id {
              value
            }
          }
        }
      `,
      fetchPolicy: 'no-cache',
      variables: {
        numOfUsers,
        gender
      }
    }
  },

  created() {
    this.handleScroll()
  },

  methods: {
    handleScroll() {
      window.onscroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop + 0.5 ===
          document.documentElement.offsetHeight
        ) {
          this.loadMore()
          this.more = true
        }
      }
    },

    loadMore() {
      setTimeout(() => {
        this.numbers = [
          ...this.numbers,
          ...Array.from({ length: 20 }, (_, i) => i + this.numbers.length + 1)
        ]
        this.more = false
      }, 1500)
    },

    randomUser() {
      return Math.floor(Math.random() * this.getUsers.length)
    }
  }
}
</script>

<template>
  <div>
    <div v-if="getUsers" id="users">
      <div id="user" v-for="n in numbers" :key="n">
        <UserCard :user="getUsers[randomUser()]" />
      </div>
    </div>
    <div id="loadMore" v-if="{ more }">Load more</div>
  </div>
</template>

<style scoped>
#users {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 16px;
}
#user {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 240px;

  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 20px;
  margin-top: 20px;

  font-weight: 900;
  font-size: 32px;
}

#loadMore {
  font-size: 20px;
  font-weight: 900;
}
</style>
