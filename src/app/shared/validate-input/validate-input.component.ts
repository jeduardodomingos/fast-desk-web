import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-validate-input',
  templateUrl: './validate-input.component.html',
  styleUrls: ['./validate-input.component.css']
})
export class ValidateInputComponent implements OnInit, AfterContentInit {

  @Input() label: string;
  @Input() errorMessage: string;
  @ContentChild(NgModel, {static: false}) model: NgModel;

  targetInput: any;

  constructor() { }

  ngOnInit() {}

  ngAfterContentInit(): void {
    this.targetInput = this.model;
     
    if (this.targetInput === undefined) {
      throw new Error('This component need used with a NgModel directive.');
    }
    
  }

  hasSuccess(): any {
    return this.targetInput.valid && (this.targetInput.touched || this.targetInput.dirty);
  }

  hasError(): any {
    return !this.targetInput.valid && (this.targetInput.touched || this.targetInput.dirty);
  }
}
