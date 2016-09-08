# ng2-wizard

# WizardComponent
@version 1.0.3.0

Component Wizard(step to step with tabs) for Angular 2.
```
 <wizard orientation="string [landscape|portrait]" hiddentabs="string [yes|no]" disabletabs="string [yes|no]", disableTabsAt="Array [number]" currentstep="int [number]" (tabChange)="onYourFunction($event)">
```

 ## Example
 ### Template (.html)
```
 <wizard orientation="portrait">
  <wizard-step>
    <tab>Title of first tab</tab>
    Hello World
  </wizard-step>
 </wizard>
```
### TypeScript (.ts)
Import WizardComponent and WizardStepComponent
```
 import { WizardComponent, WizardStepComponent } from './your/path/wizard.component';
```

Add in your directives
```
 directives: [WizardStepComponent, WizardComponent]
```
