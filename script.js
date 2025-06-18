  
let DATA ="secret information";

class user{
    constructor(name,email){
        this.name= name;
        this.email = email;

    }
    viewdata() {
        console.log( "DATA=" ,DATA );
    }

}
class admin extends user {
    constructor(name,email){
        super(name ,email);
    }
    editdata(){
        DATA="some name vakue";
    }
}
let student1 = new user("yasir","abd@email.com ");
let student2 =new user("maaz","maaz@email.com");

let teaher1=new user("dean","dean@email.com");

let admin1 = new admin("admin","admin@collage.com");

 let a=5;
 let b=10;
 console.log("a=",a);
 console.log("b=",b);
 console.log("a+b=",a+b);
 try{
    console.log("a+b=",a+c);
 } catch(err){
    console.log(err);

 }
 
 console.log("a+b=",a+b);
 



























