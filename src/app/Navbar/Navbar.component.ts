import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/core/services/Auth.service';

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _auth:AuthService) { }

  ngOnInit() {
  }

  get logged():boolean{
    return this._auth.token==null?false:true
  }

  logout(){
    this._auth.deleteAuthInfo()
  }

  get loggedUser():string|null|undefined{
    return this._auth.user?.name
  }

}
