import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[]=["Adam Tayler",'1234','aba.net@gmail.com']
  info2: string[]=["Abai Tayler",'5678','abai.net@gmail.com']
  info3: string[]=["Adith Tayler",'9101','abith.net@gmail.com']
  
  getInfo1(): string[]{
    return this.info1
  }
  getInfo2(): string[]{
    return this.info2
  }
  getInfo3(): string[]{
    return this.info3
  }

  constructor() { }
}
