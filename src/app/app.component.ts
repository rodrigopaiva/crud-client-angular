import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
	title = 'crudclient';

	// inicializa na página 1 quando carregar o componente
	public paginaAtual = 1;
}
