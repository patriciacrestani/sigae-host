import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private static MenuMasterKey: string = 'MenuMasterKey';

  constructor() { }

  setItem(value: any): void {
    localStorage.setItem(LocalStorageService.MenuMasterKey, JSON.stringify(value));
  }

  getItem<T>(): T | null {
    const value = localStorage.getItem(LocalStorageService.MenuMasterKey);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  }

  removeItem(): void {
    localStorage.removeItem(LocalStorageService.MenuMasterKey);
  }

  clear(): void {
    localStorage.clear();
  }
}
