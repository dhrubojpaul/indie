<template>
  <div>
    <v-card v-for="(item,index) in data" :key=index flat class=pa-2>
      <div v-html="'[' + item.id + '] ' +item.name"></div>
      <v-card-actions>
        <v-btn text small v-for="(button,buttonindex) in Object.keys(item.link)" :key=buttonindex>{{button}}</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'publications',
  props: {
    data: Array
  }
}
</script>
