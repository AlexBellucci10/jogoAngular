import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-velha',
  templateUrl: './velha.component.html',
  styleUrls: ['./velha.component.css']
})

export class VelhaComponent implements OnInit {

  simb: any;
  velha: any[];
  vez: any;

  constructor() {
    this.simb = '#' || '*';
  }

  ngOnInit() {
    this.begin();
  }

  joguinho(casa) {
    if (casa.value === '#' || casa.value === '*') {
      alert('Quadrado já escolhido, escolha outro');
    } else {
      casa.value = this.simb;
      console.log(casa.value);
      this.verifica(this.simb);
      if (this.simb === '#') {
        this.simb = '*';
        
      } else {
        this.simb = '#';
        
      }
    }
  }
  get lines(): any[] {
    return [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  }

  verifica(vez) {
    for (const pattern of this.lines) {
      const foundWinner = this.velha[pattern[0]].value === vez
        && this.velha[pattern[1]].value === vez
        && this.velha[pattern[2]].value === vez;
      if (foundWinner) {
        for (const index of pattern) {
          this.velha[index].winner = true;
        }
        alert('Você ganhou');
        this.begin();
      }
    }}

  begin() {
    this.velha = [
      { value: '' }, { value: '' }, { value: '' },
      { value: '' }, { value: '' }, { value: '' },
      { value: '' }, { value: '' }, { value: '' }
    ]
  }
}




