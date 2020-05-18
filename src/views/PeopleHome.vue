<template>
<div>
  <p v-for="(item,index) in person.description" :key=index>{{item}}</p>
</div>
</template>

<script>
import people from "../data/people.js";
export default {
  computed: {
    person() {
      var i = this.$route.params.id;
      return people.find(function(item){return item.id === i})
    }
  },
}
</script>