<template>
  <div id="User" >
    <h2>
      Hola <span> {{ username }}, </span> ¡Bienvenido!
    </h2>
  </div>
</template>

<script>
export default {
    name: "user",
        data:function(){
            return {
                username: "none"
            }
        },

        created: function(){
            this.username = this.$route.params.username
        }
}
</script>

<style>
#User{
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color:black;
}

</style>
