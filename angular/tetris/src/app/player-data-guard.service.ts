import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TetrisService } from './tetris.service';

// ng generate service playerDataGuard

@Injectable({
  providedIn: 'root'
})
export class PlayerDataGuard implements CanActivate {
  constructor(private __tetrisService: TetrisService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    //return this.__tetrisService.isPlayerSet();
    return true;
  }
  
}
