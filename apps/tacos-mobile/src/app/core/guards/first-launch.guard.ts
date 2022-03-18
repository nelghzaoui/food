import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { StorageService } from '../services/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class IsFirstLaunch implements CanActivate {
  constructor(private readonly storageService: StorageService, private readonly router: Router) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const isFirstLaunch = await this.storageService.isFirstLaunch();

    if (!isFirstLaunch) {
      this.router.navigate(['/home']);
    }

    return isFirstLaunch;
  }
}
