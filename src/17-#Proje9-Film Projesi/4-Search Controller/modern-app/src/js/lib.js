export default class {   

    constructor(){
     this.PI = 3.145926;
    }   
   
    sum(...numbers){
        return numbers.reduce((number,total)=> total+number);
    }

    mult(...numbers){
        return numbers.reduce((number,total)=> total*number);
    }
}
