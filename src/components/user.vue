<template>
    <div id="User">
        <h2>Hola  <span> {{username}}, </span>  ¡Bienvenido!</h2>
        <br/>
        <h3><img src="../assets/piggyBienvenida.png"  width="400" align="center"></h3>
    </div>
</template>



<script>
    export default {
        name: "User",
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
        width: 100%;
        height: 100%;
        position: relative;
         
        display: flex;
        justify-content: center;    
        align-items: center;
    }

    #User h2{
        font-size: 50px;
        color: #283747;
        top: 298px; 
    }

    #User span{
        color:purple;
        font-weight: bold;
    }

    
    #User h3{
        
        position: relative; 
        left: 90px; 
        top: 298px; 
        width: 100px; 
        height: 300px;
    }

</style>