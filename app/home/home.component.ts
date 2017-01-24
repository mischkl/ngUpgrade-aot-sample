import * as angular from 'angular';
import {OAuthService} from 'angular-oauth2-oidc';

class HomeController {
    public info: string = 'Welcome!';
}

export let HomeComponent: angular.IComponentOptions = {
    controller: HomeController,
    template: `
        <h1>{{$ctrl.info}}</h1>
    `
}