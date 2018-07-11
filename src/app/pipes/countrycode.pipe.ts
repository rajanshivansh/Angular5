import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'countrycode'
})
export class CountryCodePipe implements PipeTransform{
    transform(value : any, arg : any = 'IND'){
        if(arg=='BLR'){
            return "+80 " + value;
        }else if (arg=='IND'){
            return "+91 " + value;
        }
        
    }
}