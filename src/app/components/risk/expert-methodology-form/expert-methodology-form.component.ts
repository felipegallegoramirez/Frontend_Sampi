import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-expert-methodology-form',
  templateUrl: './expert-methodology-form.component.html',
  styleUrl: './expert-methodology-form.component.css'
})
export class ExpertMethodologyFormComponent {
  items:Array<string> = ['R1','R2'];
  index:number = 4

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    console.log('Nuevo orden:', this.items);
  }
  agregar(item:string) {
    const index= this.items.findIndex(x => x == item)
    this.items.splice(index + 1, 0, `R${this.index}`);
    this.index++;
  }
  eliminar(item:string) {
    if(this.items.length>1){
      this.items = this.items.filter(x => x !== item);
    }

  }
}
