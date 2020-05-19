<template>
  <div>
    <publications :data=publicationList></publications>
  </div>
</template>

<script>
import Publications from "../components/Publications"
import publicationList from "../data/publications"

export default {
  components: {
    Publications
  },
  data(){
    return{
      publicationList
    }
  }
}
</script>
