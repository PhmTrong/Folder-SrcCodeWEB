import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
    public stocks: Array<Stock>


constructor(){}

ngOnInit() {
  this.stocks = [
    new Stock ('Test Stock Company','TSC',85,80,'NYSE'),
    new Stock ('Second Stock Company','SSC',70,80,'NASDAQ'),
    new Stock ('Last Stock Company','LSC',50,40,'OTHER')
  ];
}
  toggleFavorite(event,index) {
    console.log('We are toggling the favorite state for this stock',event,index);
    this.stocks[index].favorite = !this.stocks[index].favorite;
  }
}
