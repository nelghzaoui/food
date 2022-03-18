import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private static readonly FIRST_LAUNCH = 'firstLaunch';

  async isFirstLaunch(): Promise<boolean> {
    const { value } = await Storage.get({ key: StorageService.FIRST_LAUNCH });

    if (value === null) {
      await Storage.set({ key: StorageService.FIRST_LAUNCH, value: 'false' });
    }

    return !value;
  }
}
