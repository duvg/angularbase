import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/observable';
import { GLOBAL } from './global';

@Injectable()
export class UserService{

    //properties
    public url: string;
    public identity;
    public token;

    //constructor
    constructor(private _http: Http){
        this.url = GLOBAL.url;
    }

    //funcition to login
    signup(user_to_login)
    {
        //convert user object to json string
        let json    = JSON.stringify(user_to_login);
        let params  = "json="+json;
        let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
        
        //execute http method
        return this._http.post(this.url+'/users/login', params, {headers:headers})
                         .map(res => res.json());
    }

    //get data user
    getIdentity()
    {
        let identity  = JSON.parse(localStorage.getItem('identity'));

        if(identity != "undefined")
        {
            this.identity = identity;
        }
        else
        {
            this.identity = null;
        }
        return this.identity;
    }

    //get token
    getToken()
    {
        let token = JSON.parse(localStorage.getItem('token'));

        if(token != "undefined")
        {
            this.token = token;
        }
        else
        {
            this.token = null;
        }
        return this.token;
    }
    
}