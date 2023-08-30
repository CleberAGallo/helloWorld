import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-naked',
  templateUrl: './naked.page.html',
  styleUrls: ['./naked.page.scss'],
})
export class NakedPage implements OnInit {

  qtdeItensCarrinho = 0;

  listaNaked = [
    {
      nome: "KTM Duke 390",
      descricao: "Laranja - 2023/2023",
      valor: 35600.00,
      imagem: 'https://novasmotos.com.br/wp-content/uploads/2023/02/ktm-naked-com-cambio-automatico.jpg'
    }

  ];

  filteredNaked = this.listaNaked
  constructor(public bdtemp:BdtempService ) { }

  ngOnInit() {
  }

  onSearchChange(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredNaked = this.listaNaked.filter((naked) => {
      return naked.nome.toLowerCase().includes(searchTerm) ||
             naked.descricao.toLowerCase().includes(searchTerm);
    });
  }

  addProdutoCarrinho(produto: any) {
    this.bdtemp.addProdutoCarrinho(produto);
    this.buscarDadosCarrinho();
  }

  buscarDadosCarrinho() {
    this.qtdeItensCarrinho = this.bdtemp.buscar('qtdeItensCarrinho');

  }

  ionViewWillEnter() {
    this.buscarDadosCarrinho();
  }

}
