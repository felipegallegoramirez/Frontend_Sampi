import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-risk-form',
  templateUrl: './risk-form.component.html',
  styleUrl: './risk-form.component.css'
})
export class RiskFormComponent {
  form: FormGroup;
  suggestions: string[] = [
    'Actualizar','Administrar','Asegurar','Asesorar','Auditar','Comunicar','Conducir','Conocer','Coordinar','Definir','Desarrollar','Dirigir','Diseñar','Dominar','Establecer','Evaluar','Fiscalizar','Formular','Generar','Gestionar','Hacer','Implementar','Liderar','Modelar','Participar','Planear','Presidir','Producir','Resolver','Sistematizar','Supervisar','Transformar','Validar','Verificar'];
  filteredSuggestions: string[] = [];
  showSuggestions = false;

  suggestions2: string[] = [
    'Actualizar','Administrar','Asegurar','Asesorar','Auditar','Comunicar','Conducir','Conocer','Coordinar','Definir','Desarrollar','Dirigir','Diseñar','Dominar','Establecer','Evaluar','Fiscalizar','Formular','Generar','Gestionar','Hacer','Implementar','Liderar','Modelar','Participar','Planear','Presidir','Producir','Resolver','Sistematizar','Supervisar','Transformar','Validar','Verificar'];
  filteredSuggestions2: string[] = [];
  showSuggestions2 = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      //id_programa: ['', Validators.required],
      //id: ['', [Validators.required, Validators.maxLength(50)]],
      categoria: ['', [Validators.required, Validators.maxLength(50)]],
      subcategoria: ['', [Validators.required, Validators.maxLength(50)]],
      name: [{value:''}, [Validators.required, Validators.maxLength(255)]],
      description: [{value:''}, [Validators.required, Validators.maxLength(255)]],
      ethic: [],
      other: []
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

  filterSuggestions() {
    const filterValue = this.form.value.categoria.toLowerCase();
    this.filteredSuggestions = this.suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(filterValue)
    );
  }

  selectSuggestion(suggestion: string) {
    this.form.get('categoria')?.setValue(suggestion);
    this.showSuggestions = false;
  }

  onFocus() {
    this.showSuggestions = true;
  }

  onBlur() {
    setTimeout(() => {
      this.showSuggestions = false;
    }, 200);
  }



  filterSuggestions2() {
    const filterValue2 = this.form.value.subcategoria.toLowerCase();
    this.filteredSuggestions2 = this.suggestions2.filter(suggestion =>
      suggestion.toLowerCase().includes(filterValue2)
    );
  }

  selectSuggestion2(suggestion2: string) {
    this.form.get('subcategoria')?.setValue(suggestion2);
    this.showSuggestions2 = false;
  }

  onFocus2() {
    this.showSuggestions2 = true;
  }

  onBlur2() {
    setTimeout(() => {
      this.showSuggestions2 = false;
    }, 200);
  }
}
