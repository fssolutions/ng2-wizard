import { Component, AfterContentInit, ElementRef, ContentChild } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

import { WizardStepTabComponent } from './wizard-step-tab.component';

/**
 * # WizardStepComponent
 *
 * Childrens component of WizardComponent
 *
 *```
 * <wizard-step>
 *  <wizard-step-tab>Title of your tab</wizard-step-tab>
 *  Hello World - your content
 * </wizard-step>
 *```
 *
 * ## Atention!!
 * The tag &lt;wizard-step-tab&gt; is o obrigatory
 *```
 *  <wizard-step-tab>Title of your tab</wizard-step-tab>
 *```
 */
@Component({
    moduleId: module.id,
    selector: 'wizard-step',
    styleUrls: [
			'./wizard-step.component.css'
		],
		templateUrl: './wizard-step.component.html'
})

export class WizardStepComponent implements AfterContentInit {
    private tabName: SafeHtml;

    @ContentChild(WizardStepTabComponent) private wizardStepTabComponent: WizardStepTabComponent;

    public isActive: boolean = false;

    constructor(private elementRef: ElementRef) { }

    ngAfterContentInit() {
      if(this.wizardStepTabComponent){
        this.wizardStepTabComponent.setDisplay('none');
        this.tabName = this.wizardStepTabComponent.getHTML();
      }else
          throw new Error('WizardStepComponent: TagName "wizard-step-tab" was not found in step');
    }
}
