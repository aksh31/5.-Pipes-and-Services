import { Injectable } from "@angular/core";




@Injectable({
    providedIn : 'root'
})
export class SnakBarService {

    getMsg(){
        return `Your Product is Ordered Successfully...`
    }
}