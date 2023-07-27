<template>

<div id="center">
    <input v-model="message" placeholder="Enter Artist" />
    <button @click="fetchfoo(message)">Search For All Album</button>
    <pre v-if="data">{{ data }}</pre>

    <p></p>

    <div class="container">
  <div class="row">
    <div v-for="x in message2" class="col-md-3 mb-5">
      <div>
        <h4>{{ x.name }} ({{ x.release }})</h4>
        
        <img v-bind:src="x.link" width="200" height="200">
      </div>
    </div>
  </div>
</div>
     



</div>

<body>

</body>
      
  </template>
  
  <script>
    export default {
      data() {
        return {
          data: null,
          message: null,
          message2: null,
        };
      },
      methods: {
        
        async fetchfoo(message) {     
          const requestOptions = {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'My-Custom-Header': 'foobar'
            },
            body: JSON.stringify({ title: message })
          };
          fetch('http://localhost:5000/searchalbum', requestOptions)
            
            .then(response => response.json())
            .then(data => this.message2 = data);
            
                
        }
          
      }
    };
  </script>

<style>

#center{
    text-align: center;
}

body{
  background-color: lightblue;
}

</style>



