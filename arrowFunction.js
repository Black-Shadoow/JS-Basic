const user = {
    name: "bibek kunwar",
    age: 25,
    welcomeMessage: function () {
      console.log(`${this.name}, welcome to the website!`);
      
    }
  };
  
  user.welcomeMessage();
  user.name="Shadoow"
  user.welcomeMessage();
  
  console.log(this);
  