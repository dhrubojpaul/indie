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
        
        <v-card flat color=#DDDDDD class="py-2 px-4" style="position:absolute;z-index:1;font-size:5 !important" v-if="emailVisibility">Email copied to clipboard</v-card>
        <input type=text style="position:fixed;opacity:0" :value="person.mail" id="emailtocopy">
        
        <v-card-actions>
          <v-btn small elevation=0 @click="showEmail">E-Mail</v-btn>
          <v-btn small elevation=0 target="_blank" :href="person.website">Website<v-icon x-small>mdi-open-in-new</v-icon></v-btn>
          <v-btn small elevation=0 target="_blank" :href="person.scholar">Scholar<v-icon x-small>mdi-open-in-new</v-icon></v-btn>
        </v-card-actions>
      </v-card>

      

      <v-list>
        <v-list-item><v-btn block text rounded :to="'/people/'+id+'/projects'">Project</v-btn></v-list-item>
        <v-list-item><v-btn block text rounded :to="'/people/'+id+'/publications'">Publications</v-btn></v-list-item>
        <v-list-item><v-btn block text rounded target="_blank" :href="'/data/people/'+id+'/cv.pdf'">CV</v-btn></v-list-item>
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
  data(){
    return {
      emailVisibility: false,
    }
  },
  methods: {
    showEmail(){
      var copyText = document.getElementById("emailtocopy");
      copyText.select();
      copyText.setSelectionRange(0, 99999)
      document.execCommand("copy");
      copyText.blur();
      this.emailVisibility = true;
      setTimeout(() => { this.emailVisibility = false; }, 700);
    }
  },
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