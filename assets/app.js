const app = Vue.createApp({
    data(){
     return {
         firstName: 'John',
         lastName: 'Doe',
         email: 'johndoe@gmail.com',
         gender: 'male',
         picture: 'https://randomuser.me/api/portraits/men/10.jpg'
     };
    },
    methods:{
       async getUser(){
           try{
               const data = await fetch('https://randomuser.me/api');
               const { results } = await data.json();
               console.log(results);
               this.firstName = results[0].name.first;
               this.lastName = results[0].name.last;
               this.email = results[0].email,
               this.gender = results[0].gender,
                this.picture = results[0].picture.large
           }catch(err){
               console.error('error '+ err);
           }
        }
    }
});

app.mount('#app');