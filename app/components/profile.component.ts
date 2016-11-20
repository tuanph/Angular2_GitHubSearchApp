import { Component, OnInit } from "@angular/core";
import { GithubService } from "../services/github.service";
import "rxjs/add/operator/map";

@Component({
    selector: "github-profile",
    templateUrl: "app/components/profile.component.html"
})
export class ProfileComponent implements OnInit {
    user;
    repos;
    username = "";
    constructor(private _gitHubService: GithubService) {
    }

    ngOnInit() {
        this._gitHubService.getUser(this.username).subscribe(user => {
            this.user = user;
            // console.log(user);
        }, (error => {
            this.user = false;
        }), () => {
        });

        this._gitHubService.getRepos(this.username).subscribe(repos => {
            this.repos = repos;
        }, (error => {
            this.user = false;
        }), () => {
        });
    }

    public searchUser() {
        this._gitHubService.getUser(this.username).subscribe(user => {
            this.user = user;
        }, (error => {
            this.user = false;
        }));

        this._gitHubService.getRepos(this.username).subscribe(repos => {
            this.repos = repos;
        }, (error => {
            this.user = false;
        }), () => {
        });

    }
}