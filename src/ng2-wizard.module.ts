import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardComponent } from './wizard.component';
import { WizardStepComponent } from './wizard-step.component';
import { WizardStepTabComponent } from './wizard-step-tab.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ WizardComponent, WizardStepComponent, WizardStepTabComponent ],
    exports: [ WizardComponent, WizardStepComponent, WizardStepTabComponent ],
})
export class Ng2WizardModule { }
