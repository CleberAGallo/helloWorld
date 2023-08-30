import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

interface Produto {
  imagem: string;
  nome: string;
  descricao: string;
  valor: number;
}

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  qtdeItensCarrinho = 0;
  totalCarrinho = 0;

  listaItens: Produto[] = []; // Definindo o tipo do array como Produto[]

  constructor(public bdtemp: BdtempService) { }

  ngOnInit() {
    this.buscarItensCarrinho();
    this.atualizarTotalCarrinho();
  }

  buscarItensCarrinho() {
    this.listaItens = this.bdtemp.buscar('carrinho');
    this.qtdeItensCarrinho = this.listaItens.length; 
    this.calcularTotalCarrinho();
  }

  ionViewWillEnter() {
    this.buscarItensCarrinho();
  }

  removerDoCarrinho(produto: any) {
    const posicao = this.listaItens.indexOf(produto);
    if (posicao !== -1) {
      this.bdtemp.removeProdutoCarrinho(posicao);
      this.buscarItensCarrinho();
      this.atualizarTotalCarrinho();
    }
  }

  limparCarrinho() {
    this.bdtemp.limparCarrinho();
    this.buscarItensCarrinho();
    this.atualizarTotalCarrinho();
  }

  calcularTotalCarrinho() {
    this.totalCarrinho = this.bdtemp.buscar('totalCarrinho') || 0;
  }

  atualizarTotalCarrinho() {
    this.totalCarrinho = this.bdtemp.buscar('totalCarrinho') || 0;
  }
}
