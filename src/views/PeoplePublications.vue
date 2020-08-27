<template>
  <div>
    <publications :data=relatedPublications></publications>
  </div>
</template>

<script>
import people from "../data/people.js"
import Publications from "../components/Publications"
import publicationList from "../data/publications"

export default {
  data(){
    return {
      people
    }
  },
  components: {
    Publications
  },
  computed: {
    relatedPublications(){
      /*
      var i = this.$route.params.id;
      var person = this.people.find(function(item){return item.id === i});
      var temp = publicationList.filter(function(publication){
        return publication;
      });
      var jsonString = JSON.stringify(temp);
      var newList = JSON.parse(jsonString);
      newList.forEach(function(item){
        item.name = item.name.replace(person.pub_name, "<b>"+person.pub_name+"</b>")
      });
      return newList;
      */
    },
  }
}
</script>