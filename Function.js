const add =(x,y)=>{
        return (x+y)
}
const sub =(x,y)=>{
    return (x-y)
}
const mul =(x,y)=>{
    return (x*y)
}
const div =(x,y)=>{
    return (x/y)
}
const area_triangle =(base,height)=>{
    return ((1/2)*base*height)
}

const area_circle =(radius)=>{
    return (3.14*(radius**2))
}
let x=12;
let y=13;
console.log("The value of addition is : ",add(x,y))
console.log("The value of subtraction is : ",sub(x,y))
console.log("The value of multiplication is : ",mul(x,y))
console.log("The value of division is : ",div(x,y))

let base=5;
let height=6;
console.log("The value of area of triangle is : ",area_triangle(base,height))

let radius_circle=5;
console.log("The value of area of circle is : ",area_circle(radius_circle))



