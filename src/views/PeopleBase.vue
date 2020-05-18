<template>
<div>
  <v-row>
    <v-col cols=12 sm=4 md=3>
      <v-card flat>
        <router-link :to="'/people/'+id">
          <v-img  :src="'./data/people/'+person.id+'/profile.jpg'" width=100%></v-img>
        </router-link>
        <v-card-title>{{person.name}}</v-card-title>
        <v-card-subtitle>{{person.designation}}</v-card-subtitle>
        <v-card-actions>
          <v-btn small elevation=0 >E-Mail</v-btn>
          <v-btn small elevation=0 target="_blank" :href="person.website">Personal Website</v-btn>
        </v-card-actions>
      </v-card>

      <v-list>
        <v-list-item><v-btn block text rounded :to="'/people/'+id+'/projects'">Project</v-btn></v-list-item>
        <v-list-item><v-btn block text rounded :to="'/people/'+id+'/publications'">Publications</v-btn></v-list-item>
        <v-list-item><v-btn block text rounded :to="'/people/'+id+'/cv'">CV</v-btn></v-list-item>
      </v-list>
      
    </v-col>
    <v-col cols=12 sm=8>
      <v-card flat>
        <transition name=slide-left mode=out-in>
          <router-view/>
        </transition>
      </v-card>
    </v-col>
  </v-row>
</div>
</template>

<script>
import people from "../data/people.js";
export default {
  computed: {
    id(){
      return this.$route.params.id;
    },
    person() {
      var i = this.$route.params.id;
      return people.find(function(item){return item.id === i})
    }
  },
}
</script>