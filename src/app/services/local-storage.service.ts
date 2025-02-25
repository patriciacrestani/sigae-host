import { Injectable } from '@angular/core';
import { MenuMaster } from '../models/menu-master';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private static MenuMasterKey: string = 'MenuMasterKey';

  constructor() { }

  setItem(value: any): void {
    localStorage.setItem(LocalStorageService.MenuMasterKey, JSON.stringify(value));
    const event = new Event('storageChanged');
    window.dispatchEvent(event);
  }

  possuiItem(): boolean {
    return !!localStorage.getItem(LocalStorageService.MenuMasterKey);
  }

  getItem(): MenuMaster | null {
    const aux = localStorage.getItem(LocalStorageService.MenuMasterKey);
    if(aux) return new MenuMaster(JSON.parse(aux));
    return null;
  }

  removeItem(): void {
    localStorage.removeItem(LocalStorageService.MenuMasterKey);
  }

  clear(): void {
    localStorage.clear();
  }
}
