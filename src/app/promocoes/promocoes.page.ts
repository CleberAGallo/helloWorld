import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service'

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.page.html',
  styleUrls: ['./promocoes.page.scss'],
})
export class PromocoesPage implements OnInit {

  qtdeItensCarrinho = 0;

  listaProdutos = [
    {
      nome: "Kawasaki ZX-10R",
      descricao: "Verde - 2017/2017",
      valor: 73100.00,
      imagem: 'https://360view.hum3d.com/zoom/Kawasaki/Kawasaki_ZX-10R_2017_1000_0001.jpg'
    },
    {
      nome: "Harley Davidson Deluxe",
      descricao: "Bordô - 2021/2021",
      valor: 70600.00,
      imagem: 'https://cdn.hum3d.com/wp-content/uploads/Harley-Davidson/071_Harley-Davidson_Deluxe_107_2021/Harley-Davidson_Deluxe_107_2021_1000_0001.jpg'
    },
    {
      nome: "Dafra - NH 300",
      descricao: "Laranja - 2023/2023",
      valor: 24000.00,
      imagem: 'https://amaromotos.com.br/wp-content/uploads/2023/04/AmaroMotos-NH300-Laranja_0001_RDUR2659b.jpg'
    },
    {
      nome: "KTM Duke 390",
      descricao: "Laranja - 2023/2023",
      valor: 35600.00,
      imagem: 'https://novasmotos.com.br/wp-content/uploads/2023/02/ktm-naked-com-cambio-automatico.jpg'
    }

  ];
  constructor(public bdtemp: BdtempService) { }

  ngOnInit() {
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
