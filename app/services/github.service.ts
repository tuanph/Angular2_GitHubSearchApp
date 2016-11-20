import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";
@Injectable()
export class GithubService {
    private _clientId = "88926dee458ec3b4969b";
    private _clientSecret = "0e24ba96caacdfca5dc714f134445dbf7f7cebad";
    constructor(private _http: Http) {
        console.log("Service already!");
    }
    public getUser(username) {
        return this._http.get("http://api.github.com/users/" + username + "?client_id=" + this._clientId + "&client_secret=" + this._clientSecret)
            .map(res => res.json());
    }
    public getRepos(username) {
        return this._http.get("http://api.github.com/users/" + username + "/repos" + "?client_id=" + this._clientId + "&client_secret=" + this._clientSecret)
            .map(res => res.json());
    }
}