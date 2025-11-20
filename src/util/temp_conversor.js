export function convert(entry,entry_format,exit_format){
    if(entry_format=='c'){
        if(exit_format=='f'){
            return ((entry*1.8)+32).toFixed(2)
        } else {
            return (entry+273.15).toFixed(2)
        }
    } else if(entry_format=='f'){
        if(exit_format=='c'){
            return (((entry-32)*5)/9).toFixed(2)
        } else {
            return ((5/9*(entry-32))+273.15).toFixed(2)
        }
    } else {
        if(exit_format=='c'){
            return (entry-273.15).toFixed(2)
        } else {
            return ((entry-273.15)*1.8+32).toFixed(2)
        }
    }
}