import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[],filterstring:String,propname:any): any {
    // initalize an empty aray to store filterd products
    const result:any=[]

    if(!value || filterstring=="" || propname==""){
      return value
    }
    else{
      value.forEach((item:any)=>{
        if(item[propname].trim().toLowerCase().includes(filterstring.trim().toLocaleLowerCase())){
          result.push(item)
        }
      })
      return result
    }
  }

}
