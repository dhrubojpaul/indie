<template>
<v-row justify="center">
  <v-col cols=12 sm=12 md=8 lg=8 xl=6>
    <v-card flat>
      <v-card-title>{{project.name}}</v-card-title>
      <v-row justify="center">
        <v-col cols=12 sm=8 md=6>
          <v-img :src="'/data/research/'+project.id+'/photo.jpg'" width=100% contain></v-img>
        </v-col>
      </v-row>
      <p class=text-justify v-for="(item,index) in project.description" :key=index>{{item}}</p>
    </v-card>

    <!--
    <v-card flat>
      <p class="subtitle-1 font-weight-medium">Related Publications</p>
      <v-row justify="center">
        <v-col cols=12 sm=12 md=11>
          <publications :data=relatedPublications></publications>
        </v-col>
      </v-row>
    </v-card>
    -->

  </v-col>
</v-row>
 
</template>

<script>
import projects from "../data/research";
import publicationList from "../data/publications";
import Publications from "../components/Publications";

export default {
  components: {
    Publications
  },
  computed: {
    id(){
      return this.$route.params.id;
    },
    project() {
      var i = this.$route.params.id;
      return projects.find(function(item){return item.id === i})
    },
    relatedPublications(){
      var i = this.$route.params.id;
      return publicationList.filter(function(publication){
        return publication;
      });
    }
  },
}
</script>