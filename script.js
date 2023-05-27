const  { createApp } = Vue;

const vue_1 = createApp({
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
            numberOne: 0 ,
            numberTwo: 0 ,
            title : 'title' ,
            myColor : '',
            students : ['ahmed' , 'ali','mohanad','sami','sara'],
            studentsObject : [
              {
                name : 'Ahmed',
                id : 1 ,
                age : 25 ,
              } ,
              {
                name : 'Mohanad',
                id : 2 ,
                age : 29 ,
              } ,
              {
                name : 'Sami',
                id : 3 ,
                age : 24 ,
              } ,
            ],
            prouducts : [
              {
                id : 1 ,
                title : 'Lizard shose',
                description : 'This is a very cool shose with a cool color',
                price : 454 ,
                brand : 'Adidass',
                colors: ['red','green','blue','black'],
                img : 'images/lizardShoes.jpg'
              },
              {
                id : 2 ,
                title : 'Girl bag',
                description : 'This is a very cool girl bag with a cool color',
                price : 125 ,
                brand : 'Nike',
                colors: ['red','pink','blue','green'],
                img : 'images/girlBag.jpg'

              },
              {
                id : 3 ,
                title : 'Lenovo Laptop',
                description : 'This is a very cool Laptop with many techinqe',
                price : 899 ,
                brand : 'Lenovo',
                colors: ['yellow','green','blue','red'],
                img : 'images/lenovoLaptop.jpg'

              },
              {
                id : 4 ,
                title : 'Apple watch',
                description : 'This is a very cool watch with a cool color',
                price : 499 ,
                brand : 'Apple',
                colors: ['blue','black','yellow','green'],
                img : 'images/appleWatch.jpg'

              },
            ]
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
      },
      // numberOneChange(){
      //   console.log(1);
      //   return this.numberOne * 2 ;
      // },
      // numberTwoChange(){
      //   console.log(2);
      //   return this.numberTwo + 10 ;
      // },
    },

    computed : {
      numberOneChange(){
        console.log(1);
        return this.numberOne * 2 ;
      },
      numberTwoChange(){
        console.log(2);
        return this.numberTwo + 10 ;
      },
    },
}).mount(".app_root");


//events modifires


const vue_2 = createApp({
  data(){
    return{
      name : 'Mohanad Student' ,
      students : ['Ajmed','Sami' ,'Mohanad','Ali']
    }
  },
  methods : {
    increaseAge(){
      vue_1.age ++ ; 
    },
    checkRefs (){
      console.log(this.$refs);
    },
  }
}).mount("#app_root_2");


// Components Lec 18

const my_component = {
    template : `<h2>Hello From my first component</h2>
                <h3>My name is {{name}}</h3>
                <h3>My Age is {{age}}</h3>
              `,

    data(){
      return{
          name : "Ahmed",
          age : 23 ,
      };
    }
};

const vue_3 = createApp({
  data(){
    return{

    };
  },
  components : {
    my_component ,
  },
}).mount('#app_root_3');