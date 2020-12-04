<template>
  <div>
    {{$store.state.message}}
    <br>
    <button @click="$store.dispatch('delayAddMessage')">modify</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
   
  
}
</script>

<style>
</style>