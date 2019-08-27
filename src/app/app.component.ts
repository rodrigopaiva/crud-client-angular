import { Component } from '@angular/core';
// import { OrderPipe } from 'ngx-order-pipe';
// import { UserService } from '../user.service';
// import { User } from '../user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
	title = 'crudclient';

	// inicializa na página 1 quando carregar o componente
	public paginaAtual = 1;

	// ordenacao da table
	// order: string = 'name';
 //  	reverse: boolean = false;
 //  	collection: User[];

 //  	sortedCollection: User[];

	// constructor(private orderPipe: OrderPipe) {
	//     this.sortedCollection = orderPipe.transform(this.collection, 'name');
	//     console.log(this.sortedCollection);
	// }

	// setOrder(value: string) {
	//     if (this.order === value) {
	//       this.reverse = !this.reverse;
	//     }

	//     this.order = value;
	// }

}
