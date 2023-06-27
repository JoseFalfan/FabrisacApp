import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  // variable para manipular la conexion a la BD
  public database!: SQLiteObject;
  // variables para las intrucciones SQL - variable para la creacion de tablas
  userTable: string =
    'CREATE TABLE IF NOT EXISTS user(id_user INTEGER PRIMARY KEY autoincrement, name_user VARCHAR(50) NOT NULL, charge_user VARCHAR(50) NOT NULL, user_mail VARCHAR(50) NOT NULL, user_password VARCHAR(30), user_sex VARCHAR(10)); ';
  // aqui puedo crear mas variables por si necesito mas tablas, como para guias, inventario etc.


  // variables para registros iniciales



  //observable para manipular los datos de la tabla
  userList = new BehaviorSubject([]);


  // observable para manipular si la BD esta lista o no
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);


  constructor(private router: Router) {}

  canActivate() {
    this.router.navigate(['home']);
    return false;
  }
}
