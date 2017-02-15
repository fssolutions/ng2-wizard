import { Component, ElementRef } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';


@Component({
    selector: 'wizard-step-tab',
		template: '<ng-content></ng-content>'
})
export class WizardStepTabComponent {

	constructor(
    private elementRef: ElementRef,
    private domSanitizer: DomSanitizer
  ) { }

	public setDisplay(type: string){
		this.elementRef.nativeElement.style.display = type;
	}

	public getHTML(): SafeHtml {
    let html = this.elementRef.nativeElement.innerHTML;
		return this.domSanitizer.bypassSecurityTrustHtml(html);
	}

}
