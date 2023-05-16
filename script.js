const  { createApp } = Vue;

createApp({
    data(){
        return {
            name: 'Mohanad' ,
            city: 'Gaza' ,
            age : 23 ,
            link : 'https://ftms.live',
            img : 'img-1.jpg',
            number : 0 ,
            email: '',
            password: '',
            name2: '',
        };
    },

    methods: {
      sayHi(time , name) {
            return "Good" + " " + time + " "+ name;
      },
      
      //events
      testFunction(){
        // console.log('is fired');
        this.number ++ ;
      },
      testonce(){
        console.log('test once');
      },
      printMyname(){
        console.log('Mohanad');
      },
      updateValue () {
        this.name = document.getElementById('textInp').value;
      },
      sendData(){
          const newUser = {
            name2 : this.name2 ,
            email : this.email ,
            password : this.password ,
          }

          console.log(newUser);
      }
    },
}).mount(".app_root");


//events modifires