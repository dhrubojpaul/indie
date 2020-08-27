<template>
  <div>
    <!--Director-->
    <h1 v-if="director.length>0">Director</h1>
    <v-row>
      <v-col cols=12 xs=6 sm=4 md=3 v-for="(person,index) in director" :key="index" class=ma-5>
        <v-card flat :to="'/people/'+person.id" outlined>
          <v-img class="white--text align-end" :src="'./data/people/'+person.id+'/profile.jpg'">
            <v-card-title>{{person.name}}</v-card-title>
          </v-img>
          <v-card-subtitle>{{person.designation}}</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>{{person.interest}}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!--Graduate Students-->
    <h1 v-if="phd.length>0">Graduate Students</h1>
    <v-row>
      <v-col cols=12 xs=6 sm=4 md=3 lg=3 v-for="(person,index) in phd" :key="index" class=ma-5>
        <v-card flat :to="'/people/'+person.id" outlined>
          <v-img class="white--text align-end" :src="'./data/people/'+person.id+'/profile.jpg'">
            <v-card-title>{{person.name}}</v-card-title>
          </v-img>
          <v-card-subtitle>{{person.designation}}</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>{{person.interest}}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!--Underaduate Students-->
    <h1 v-if="undergrad.length>0">Undergraduate Students</h1>
    <v-row>
      <v-col cols=12 xs=6 sm=4 md=3 lg=3 v-for="(person,index) in undergrad" :key="index" class=ma-5>
        <v-card flat :to="'/people/'+person.id" outlined>
          <v-img class="white--text align-end" :src="'./data/people/'+person.id+'/profile.jpg'">
            <v-card-title>{{person.name}}</v-card-title>
          </v-img>
          <v-card-subtitle>{{person.designation}}</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>{{person.interest}}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>


    <!--Alumni-->
    <h1 v-if="alumni.length>0">Alumni</h1>
    <v-row>
      <v-col cols=12 xs=6 sm=4 md=3 v-for="(person,index) in alumni" :key="index" class=ma-5>
        <v-card flat :to="'/people/'+person.id" outlined>
          <v-img class="white--text align-end" :src="'./data/people/'+person.id+'/profile.jpg'">
            <v-card-title>{{person.name}}</v-card-title>
          </v-img>
          <v-card-subtitle>{{person.designation}}</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>{{person.interest}}</div>
          </v-card-text>
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
      director: people.filter(function(person){return person.type=='director';}),
      phd: people.filter(function(person){return person.type=='phd';}),
      undergrad: people.filter(function(person){return person.type=='undergrad';}),
      alumni: people.filter(function(person){return person.type=='alumni';}),
    }
  }
}
</script>
