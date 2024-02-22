import { Component, EventEmitter, Input, OnInit, Output, Sanitizer, SecurityContext } from '@angular/core';
import { AtomsParent } from '../atoms.parent';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent extends AtomsParent implements OnInit {

  @Output() onClickButton: EventEmitter<any> = new EventEmitter();
  @Input() classInput: string = '';
  @Input() typeInput: string = '';
  @Input() labelInput: string = '';
  @Input() isInputComponents: boolean = false;

  constructor(private sanitizer: Sanitizer) { super(); }

  ngOnInit(): void {
    if(this.isInputComponents){
      this.component = {
        element : 'input',
        id: 'btnAction',
        type: this.typeInput,
        label: this.labelInput,
        class: this.classInput
      }
    }
  }

  public clickButton(): void {
    this.onClickButton.emit();
  }

  public san( text: string | any ): any {
    if (!text) return '';
    return this.sanitizer.sanitize(SecurityContext.HTML, text);
  }
}
