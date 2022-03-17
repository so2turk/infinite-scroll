<script>
export default {
  name: 'Numbers',
  components: {},
  data() {
    return {
      more: false,
      numbers: Array.from({ length: 50 }, () => '#' + ((Math.random() * 0xffffff) << 0).toString(16)),
    }
  },

  created() {
    this.handleScroll()
  },

  methods: {
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
        this.numbers = [
          ...this.numbers,
          ...Array.from({ length: 50 }, () => '#' + ((Math.random() * 0xffffff) << 0).toString(16)),
        ]
        this.more = false
      }, 500)
    },
  },
}
</script>

<template>
  <div>
    <div id="numbers">
      <div id="number" v-for="n in numbers" :key="n" :style="{ backgroundColor: n }">
        {{ n }}
      </div>
    </div>
    <div id="loadMore" v-if="{ more }">Load more</div>
  </div>
</template>

<style scoped>
#numbers {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 16px;
}
#number {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 140px;

  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 10px;

  border-style: solid;
  border-color: black;
  border-width: 1px;
  border-radius: 8px;

  font-weight: 900;
  font-size: 32px;
}

#loadMore {
  display: grid;
  font-size: 20px;
  font-weight: 900;
}
</style>
