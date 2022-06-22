const durationInput=document.querySelector('#duration');
const startButton=document.querySelector('#start');
const pauseButton=document.querySelector('#pause');
const circle=document.querySelector('circle');
const perimeter=circle.getAttribute('r')*2*Math.PI;
circle.setAttribute('stroke-dasharray',perimeter);

let duration;
const timer= new Timer(durationInput,startButton,pauseButton,{
    onStart(totalDuration){
     duration=totalDuration;
    },
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset', 
        perimeter * timeRemaining / duration - perimeter
        );
    },
    onComplete() {
        console.log('Timer is completed')
    }
});
















// class pet{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     eat(){
//         return`${this.name} likes eating since it turned ${this.age}`;
//     }
// }















// class animal{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     eat(){
//         return `${this.name} is eating`
//     }
// }









// class color{
//     constructor(r,g,b,name){
//         this.r=r;
//         this.g=g;
//         this.b=b;
//         this.name=name;
//     }
//     rgb(){
//        return `rgb(${r},${g},${b})`;
//     }
// }
// const c1=new color(255,67,89,'tomato')