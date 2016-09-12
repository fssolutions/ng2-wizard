import { Component, AfterViewInit, ElementRef } from '@angular/core';

/**
 * # WizardStepComponent
 *
 * Childrens component of WizardComponent
 *
 *```
 * <wizard-step>
 *  <tab>Title of your tab</tab>
 *  Hello World - your content
 * </wizard-step>
 *```
 *
 * ## Atention!!
 * The tag &lt;tab&gt; is o obrigatory
 *```
 *  <tab>Title of your tab</tab>
 *```
 */
@Component({
    selector: 'wizard-step',
    styleUrls: [
			'wizard-step.component.css'
		],
		templateUrl: 'wizard-step.component.html'
})

export class WizardStepComponent implements AfterViewInit {
    private tabName: string;
    public isActive: boolean = false;

    constructor(private elementRef: ElementRef) { }

    ngAfterViewInit() {
        let tab = this.elementRef.nativeElement.getElementsByTagName("tab");
        if (tab != null && tab.length) {
            tab[0].style.display = 'none';
            this.tabName = tab[0].innerHTML;
        } else
            throw new Error('WizardStepComponent: TagName TAB was not found in step');
    }
}
