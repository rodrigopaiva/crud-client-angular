import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User,UserResponse } from '../user.model';
import { MensagemService } from '../../share/mensagem.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.sass']
})
export class UpdateComponent implements OnInit {

	id: string;
	user: User;

  constructor(private userService: UserService, private route: ActivatedRoute, private _route: Router,private mensagem: MensagemService) { }

  ngOnInit() {
  	this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUsers().subscribe(res => this.user = res.find(x=>x.id == this.id));

  }

  update() {
  	this.userService.updateUser(this.id, this.user).subscribe(res => {
      //this.mensagem.changeMessage('Sucesso');
      this._route.navigate(['/'],{state: {mensagem: `Cliente ${this.user.name} atualizado com sucesso!`}});

  	});
  }

  cancel() {
    this._route.navigate(['/'], {state: {mensagem: ''}});
  }

}
