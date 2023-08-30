import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-trail',
  templateUrl: './trail.page.html',
  styleUrls: ['./trail.page.scss'],
})
export class TrailPage implements OnInit {

  qtdeItensCarrinho = 0;

  listaTrail = [
    {
      nome: "Dafra - NH 300",
      descricao: "Laranja - 2023/2023",
      valor: 24000.00,
      imagem: 'https://amaromotos.com.br/wp-content/uploads/2023/04/AmaroMotos-NH300-Laranja_0001_RDUR2659b.jpg'
    }

  ];

  filteredTrail = this.listaTrail
  constructor(public bdtemp:BdtempService ) { }

  ngOnInit() {
  }

  onSearchChange(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredTrail = this.listaTrail.filter((trail) => {
      return trail.nome.toLowerCase().includes(searchTerm) ||
             trail.descricao.toLowerCase().includes(searchTerm);
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
