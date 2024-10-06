import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-risk-factors-form',
  templateUrl: './risk-factors-form.component.html',
  styleUrl: './risk-factors-form.component.css'
})
export class RiskFactorsFormComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  index:number = 5

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    console.log('Nuevo orden:', this.items);
  }
  agregar() {
    this.items.push(`Item ${this.index}`)
    this.index++;
  }
  eliminar(item:string) {
    this.items = this.items.filter(x => x !== item);
  }
}
