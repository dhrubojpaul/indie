<template>
  <v-app id="inspire">

    <v-system-bar height=100 color=white>
      
      <v-toolbar-title >
        <a href="http://www.ufl.edu" target="_blank" v-if="this.$router.currentRoute.path == '/'">
          <v-img height=50 contain src="./img/uf_logo.svg"></v-img>
        </a>
      </v-toolbar-title>
      
      <v-toolbar-title v-if="this.$router.currentRoute.path != '/'" class=indie><v-btn text to="/" x-large rounded>INDIE Lab</v-btn></v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn class="d-none d-lg-flex" text large rounded to="/research">Research</v-btn>
      <v-btn class="d-none d-lg-flex" text large rounded to="/publications">Publications</v-btn>
      <v-btn class="d-none d-lg-flex" text large rounded to="/people">People</v-btn>
      <v-btn class="d-none d-lg-flex" text large rounded to="/a">News</v-btn>
      <v-btn class="d-none d-lg-flex" text large rounded to="/b">Sponsors</v-btn>

      <v-menu transition="slide-y-transition" bottom >
        <template v-slot:activator="{ on }">
          <v-btn text x-large rounded v-on="on" class="hidden-lg-and-up"><v-icon>mdi-menu</v-icon></v-btn>
        </template>
        <v-list>
          <v-list-item to=/research><v-list-item-title>Research</v-list-item-title></v-list-item>
          <v-list-item to=/publications><v-list-item-title>Publications</v-list-item-title></v-list-item>
          <v-list-item to=/people><v-list-item-title>People</v-list-item-title></v-list-item>
          <v-list-item to=/a><v-list-item-title>News</v-list-item-title></v-list-item>
          <v-list-item to=/b><v-list-item-title>Sponsors</v-list-item-title></v-list-item>
        </v-list>
      </v-menu>
    </v-system-bar>

    <v-content style="margin:0 10vw 10vh 10vw;">
      <v-container fluid>
        <transition name=slide-left mode=out-in>
          <router-view/>
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
  }
</script>