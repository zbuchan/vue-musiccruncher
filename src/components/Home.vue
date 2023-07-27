<template>

<div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h1>MusicCruncher</h1>
      </div>
    </div>
    <div class="row align-items-center justify-content-center">
      <div class="col-4 text-center">
        <img src="src/components/mcLogo.png" width="400" height="200" alt="MusicCruncher Logo">
      </div>
    </div>
    <div class="row">
      <div class="col-12" >
        <div class="row">
          <div class="col-12 text-center">
            <h2>Top Playlist Right Now!</h2>
          </div>
        </div>
        <div class="row">
          <div v-for="x in message2" class="col-6 col-md-4 col-lg-3">
            <div class="card mb-4">
              <img v-bind:src="x.link" class="card-img-top" >
              <div class="card-body">
                <h4 class="card-title">{{ x.name }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



        
    </template>
    
    <script>
      export default {
        data() {
          return {
            data: null,
            show: true,
            message2: null,
            
          };
        },
        methods: {
          
          async fetchfoo() {     
            const requestOptions = {
              method: 'GET',
              headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'My-Custom-Header': 'foobar'
              }
              
            };
            fetch('http://localhost:5000/home', requestOptions)
              
              .then(response => response.json())
              .then(data => this.message2 = data);
              
                  
          }
            
        },
        mounted() {
          this.fetchfoo();
        }
      };
    </script>
  
  
  