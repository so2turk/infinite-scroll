<script>
export default {
  name: 'UserCard',
  props: ['user'],
  data() {
    return {
      firstName: null,
      lastName: null,
      photo: null,
      username: null,
      country: null,
    }
  },
  mounted() {
    this.createUser()
  },

  methods: {
    createUser() {
      this.firstName = this.user.name.first
      this.lastName = this.user.name.last
      this.photo = this.user.picture.large
      this.username = this.user.login.username
      this.country = this.user.location.country
    },
  },
}
</script>

<template>
  <div class="userCard">
    <img class="photo" :src="photo" :alt="username" />
    <div class="userName">{{ firstName }} {{ lastName }}</div>
    <div class="userInfo">{{ country }}</div>
  </div>
</template>

<style scoped>
.userCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.userName {
  font-size: 20px;
  margin-top: 5px;
}
.userInfo {
  font-size: 16px;
}
.photo {
  width: 150px;
}
</style>
