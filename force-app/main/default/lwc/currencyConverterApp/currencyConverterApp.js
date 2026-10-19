import { LightningElement } from 'lwc';
import { countryCodeList } from 'c/countryCodeList';

export default class CurrencyConverterApp extends LightningElement {
    countryList = countryCodeList;
    countryFrom = "USD";
    countryTo = "ZAR";

    handleChange(event){
        const {name, value} = event.target;
    }
}