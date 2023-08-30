import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.page.html',
  styleUrls: ['./sport.page.scss'],
})
export class SportPage implements OnInit {

  qtdeItensCarrinho = 0;

  listaSport = [
    {
      nome: "Kawasaki ZX-10R",
      descricao: "Verde - 2017/2017",
      valor: 73100.00,
      imagem: 'https://360view.hum3d.com/zoom/Kawasaki/Kawasaki_ZX-10R_2017_1000_0001.jpg'
    }

  ];

  filteredSport = this.listaSport
  constructor(public bdtemp:BdtempService ) { }

  ngOnInit() {
  }

  onSearchChange(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredSport = this.listaSport.filter((sport) => {
      return sport.nome.toLowerCase().includes(searchTerm) ||
             sport.descricao.toLowerCase().includes(searchTerm);
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
