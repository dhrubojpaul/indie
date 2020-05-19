<template>
<v-row justify="center">
  <v-col cols=12 sm=12 md=8 lg=8 xl=6>

    <v-card flat :to="'/research/'+project.id" v-for="(project,index) in projects" :key=index class=px-6>
      <v-card-title>{{project.name}}</v-card-title>
      <v-card-subtitle>
        <p class="text-justify" v-for="(item,index) in project.description" :key=index>{{item}}</p>
      </v-card-subtitle>
    </v-card>

  </v-col>
  </v-row>
 
</template>

<script>
import projects from "../data/research";
export default {
  computed: {
    id(){
      return this.$route.params.id;
    },
    person() {
      var i = this.$route.params.id;
      return projects.find(function(item){return item.id === i})
    }
  },
}
</script>