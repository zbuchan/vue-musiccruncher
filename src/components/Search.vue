<template>
  <h1>Example</h1>
  <p>Click the button to fetch data with an HTTP request.</p>
  <button @click="fetchfoo(message)">Fetch data</button>
  <pre v-if="data">{{ data }}</pre>
  <p>Message is: {{ message2 }}</p>
	<input v-model="message" placeholder="edit me" />
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
        fetch('http://localhost:5000/search', requestOptions)
          
          .then(response => response.json())
          .then(data => this.message2 = data); 
              
      }
        
    }
  };
</script>