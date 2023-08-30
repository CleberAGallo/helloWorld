import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.page.html',
  styleUrls: ['./custom.page.scss'],
})
export class CustomPage implements OnInit {

  qtdeItensCarrinho = 0;

  listaCustom = [
    {
      nome: "Harley Davidson Deluxe",
      descricao: "Bordô - 2021/2021",
      valor: 70600.00,
      imagem: 'https://cdn.hum3d.com/wp-content/uploads/Harley-Davidson/071_Harley-Davidson_Deluxe_107_2021/Harley-Davidson_Deluxe_107_2021_1000_0001.jpg'
    }

  ];

  filteredCustom = this.listaCustom
  constructor(public bdtemp:BdtempService ) { }

  ngOnInit() {
  }

  onSearchChange(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCustom = this.listaCustom.filter((custom) => {
      return custom.nome.toLowerCase().includes(searchTerm) ||
             custom.descricao.toLowerCase().includes(searchTerm);
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
