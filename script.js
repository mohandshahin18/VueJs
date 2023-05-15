const  { createApp } = Vue;

createApp({
    data(){
        return {
            name: 'Mohanad' ,
            age : 23 ,
            link : 'https://ftms.live',
            img : 'img-1.jpg',
            number : 0 ,
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
      }
    },
}).mount(".app_root");


//events modifires