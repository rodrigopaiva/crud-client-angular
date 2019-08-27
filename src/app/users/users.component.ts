import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MensagemService } from '../share/mensagem.service';
import { OrderPipe } from 'ngx-order-pipe';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

	users: User[];
	id: number;
	_urleditar: string = '/users/update';
	state$: Observable<object>;
	mensagemGenerica:string;
	paginaAtual:number;
	filter:string;

	order: string = 'id';
  	reverse: boolean = false;

  	sortedUserCollection: User[];

  	constructor(private userService: UserService, private _route: Router,private activatedRoute:ActivatedRoute,private mensagem: MensagemService, private orderPipe: OrderPipe) {
  		this.sortedUserCollection = orderPipe.transform(this.users, 'id');
  	}

	ngOnInit() {
	  	this.userService.getUsers().subscribe(res => this.users = res);

	  	this.state$ = this.activatedRoute.paramMap.pipe(map(() => window.history.state));
	  	this.state$.subscribe(res => {
      		//alert(`Mensagem ${res} `);
      		// this.mensagemGenerica = res.mensagem;
  		});


	}

	atualizarUsuario(id:number){
		if(id != null){
			this.id = id;
			this._route.navigate([`${this._urleditar}/${id}`]);
		}
	}


	  setOrder(value: string) {
	    if (this.order === value) {
	      this.reverse = !this.reverse;
	    }

	    this.order = value;
	  }

}
