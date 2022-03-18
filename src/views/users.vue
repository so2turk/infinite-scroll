<script>
export default {
  name: 'Users',
  data() {
    return {
      more: false,
      numbers: Array.from({ length: 30 }, (_, i) => i + 1),
      users: null,
    }
  },

  created() {
    this.getUsers()
    this.handleScroll()
  },

  methods: {
    async getUsers() {
      try {
        const res = await fetch('https://randomuser.me/api/?results=100')
        this.users = await res.json()
      } catch (err) {
        console.log(err)
      }
    },
    handleScroll() {
      window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 0.5 === document.documentElement.offsetHeight) {
          this.loadMore()
          this.more = true
        }
      }
    },

    loadMore() {
      setTimeout(() => {
        this.numbers = [...this.numbers, ...Array.from({ length: 20 }, (_, i) => i + this.numbers.length + 1)]
        this.more = false
      }, 1500)
    },
  },
}
</script>

<template>
  <div>
    <div v-if="users" id="users">
      <div id="user" v-for="n in numbers" :key="n">
        {{ n }}
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
