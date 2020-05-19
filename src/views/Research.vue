<template>
<v-row justify="center">
  <v-col cols=12 sm=12 md=8 lg=8 xl=6>
    <p class="text-justify">
      The Interactive Data and Immersive Environments (Indie) research lab at the University of Florida conducts human-centered research of interactive visualizations. We focus on the design and evaluation of applications and techniques that support effective interaction and understanding of data, information, and virtual environments. Most of our research lies under the umbrella of human-computer interaction (HCI), and projects address topics information visualization, visual analytics, virtual reality, or 3D interaction.
    </p>

    <v-card flat :to="'/research/'+project.id"  v-for="(project,index) in projects" :key=index class=px-6>
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
  data(){
    return {
      projects
    }
  }
}
</script>