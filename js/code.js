//Question 1:

String.prototype.filter = function(word){
    let str = this.split(word);
    return str.toString;
}


// String.prototype.filter = function(words){
//     let splitWords = this.split(words);
//     let result = '';
//     for(word of splitWords){
//         console.log(word);
//         result +=word;
//         console.log(result);

//     }
//     console.log(result);
//     return result;
// }
// let 
'Kedi is not eating'.filter('not');

Array.prototype.bubbleSort = function(){
    for(let i = 0; i<this.length-1; i++){
        for(let j = 0; j<this.length-1;j++){
            if(this[j+1]<this[i]){
                let temp = this[j+1];
                this[j+1] = this[i];
                this[i] = temp;
            }
        }
    }
    console.log(this);
    return this;
}
let numbers = [6,4,0,3,-2,1];
//numbers.bubbleSort();

function Person(){
    this.name='Default';
}

Person.prototype.teach = function(subject){
    console.log(this.name+" is now teaching :"+ subject)
}

// const teacher1 = function(){
    
// }
// const teacher2 = new teacher1();
// teacher2.name = 'Another Teacher';
// console.log(teacher2);

const teacher = new Person();
const admin = new Person();
teacher.name = 'Wagobera';
admin.name = 'Shiva';
console.log(teacher); 
console.log(admin); // teacher.teach('Dirty JS');


