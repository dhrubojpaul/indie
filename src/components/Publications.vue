<template>
  <div>
    <v-card v-for="(publication,index) in publications" :key=index flat class=pa-2>
      <div>{{publication.apa}}</div>
      <v-card-actions>
        <v-btn text small></v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
//https://citation.js.org/
import CitationParser from "citation-js"


export default {
  name: 'publications',
  props: {
    data: Array
  },
  data(){
    return {
      publications: []
    }
  },
  mounted(){
    var component = this;
    this.data.forEach(function(item,index){
      var publication = {};
      publication.parsedData = new CitationParser(item.bib);
      publication.apa = publication.parsedData.format("bibliography");
      component.publications.push(publication);
    });
  }
}
</script>
