import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-controls-form',
  templateUrl: './controls-form.component.html',
  styleUrl: './controls-form.component.css'
})
export class ControlsFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [{value:''}, [Validators.required, Validators.maxLength(255)]],
      description: [{value:''}, [Validators.required, Validators.maxLength(255)]],
    });
  }

  @Output() esFormularioValido = new EventEmitter<boolean>();

  onSubmit() {
    if (this.form.valid) {
      this.esFormularioValido.emit(this.form.valid);
    } else {
      console.log('Formulario inválido');
    }
  }

  
}
