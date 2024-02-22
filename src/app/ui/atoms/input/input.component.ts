import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AtomsParent } from '../atoms.parent';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends AtomsParent implements OnInit  {

  @Input() typeInput: string = '';
  @Input() ngClassInput: string = '';
  @Input() idInput: string = '';
  @Input() labelInput: string = '';
  @Input() placeholderInput: string = '';
  @Input() validatorInput: string = '';
  @Input() formGroupInput!: FormGroup;
  @Input() isInputComponents: boolean = false;

  constructor() { super(); }

  ngOnInit(): void {
    if(this.isInputComponents) {
      this.component = {
        element : 'input',
        id: this.idInput,
        type: this.typeInput,
        label: this.labelInput,
        placeholder: this.placeholderInput,
        class: this.ngClassInput,
        validator : this.validatorInput
      };
      this.formGroup = this.formGroupInput;
    };
  }

}
