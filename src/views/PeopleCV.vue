<template>
<div>
  <embed :src="'/data/people/'+id+'/cv.pdf#toolbar=0&navpanes=0&scrollbar=0&view=Fit'" type="application/pdf" width="100%" height=600px/>

</div>
</template>

<script>
  export default {
     computed: {
      id(){
        return this.$route.params.id;
      },
    },
  }
</script>