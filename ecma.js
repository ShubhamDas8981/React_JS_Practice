class User{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    getAdd(){
        return this.x + this.y;
    }
    getSub(){
        return this.x - this.y;
    }
    getMul(){
        return this.x * this.y;
    }
    getDiv(){
        return this.x / this.y;
    }
}
let x=10;
let y=20;
var user=new User(x,y)
console.log(user.getAdd());
console.log(user.getSub());
console.log(user.getMul());
console.log(user.getDiv());