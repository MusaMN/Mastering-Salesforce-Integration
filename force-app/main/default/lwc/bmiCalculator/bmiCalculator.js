import { LightningElement } from 'lwc';
import toast from 'lightning/toast';

export default class BmiCalculator extends LightningElement {
    height = '';
    weight = '';
    bmi = '';
    result = '';

    inputHandler(event){
        const {name, value} = event.target;

        if(name === "height"){
            this.height = value  
        }

        if(name === "weight"){
            this.weight = value  
        }
    }

    calculate(){
        let height = Number(this.height)/100;
        let bmi = Number(this.weight)/(height*height);
        this.bmi = Number(bmi.toFixed(2));

        if(!this.weight || !this.height){
            toast.show({label: 'Error',
                message: 'Ensure all details are entered',
                variant: 'error'
            }, this);
            return;
        }

        if(this.bmi < 18.5){
            this.result="Underweight";
        }
        else if(this.bmi >= 18.5 && this.bmi < 25){
            this.result="Healthy";
        }else if(this.bmi >= 25 && this.bmi < 30){
            this.result="Overweight";
        }else{
            this.result="Obese";
        }
    }

    recalculate(){
        this.weight='';
        this.height='';
        this.bmi = '';
        this.result = '';
    }
}