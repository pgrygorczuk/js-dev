import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PlayerService } from './player.service';

// ng generate service playerDataGuard

@Injectable({
  providedIn: 'root'
})
export class PlayerDataGuard implements CanActivate {
  constructor(private __playerService: PlayerService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    
    return this.__playerService.isPlayerSet();
  }
  
}
