<template>
  <div>
    <nav class="navbar">
      <ul class="navbar-list">
        <li class="navbar-item">
          <h1>mc |</h1>
        </li>
        <li class="navbar-item">

          
            <router-link  v-on:click="show = true"  to="/" class="navbar-link">Home</router-link>
          

        </li>

        

        <li class="navbar-item">
          <router-link v-on:click="show = false" to="/searchalbum" class="navbar-link" >Albums</router-link>
        </li>

      </ul>
    </nav>





    <router-view></router-view>
    
    

  </div>






</template>


<script>
export default{
    data() {
      return {
            show: false
            
            
          }
        },
    mounted(){
      this.show=false;
      console.log("***** app.vue")
    }
}
  
</script>


