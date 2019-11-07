import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-validate-input',
  templateUrl: './validate-input.component.html',
  styleUrls: ['./validate-input.component.css']
})
export class ValidateInputComponent implements OnInit, AfterContentInit {

  @Input() errorMessage: string;
  @ContentChild(NgModel, {static: false}) model: NgModel;
  @ContentChild(FormControlName, {static: false}) control: FormControlName;

  targetInput: any;

  constructor() { }

  ngOnInit() {}

  ngAfterContentInit(): void {
    this.targetInput = this.model || this.control;
     
    if (this.targetInput === undefined) {
      throw new Error('This component need used with a NgModel or FormControlName directive.');
    }
    
  }

  hasSuccess(): any {
    return this.targetInput.valid && (this.targetInput.touched || this.targetInput.dirty);
  }

  hasError(): any {
    return !this.targetInput.valid && (this.targetInput.touched || this.targetInput.dirty);
  }
}
