import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  isAuthenticated: boolean = false;
  userId: String = '';
  constructor() { }
}
