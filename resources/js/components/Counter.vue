<template>
  <div>
    {{ count }}
    <button @click="increment">+</button>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    computed: mapState(['count']),

    methods: {
      ...mapMutations(['increment'])
    },
  }
</script>
