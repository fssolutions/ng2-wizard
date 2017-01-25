 [![npm version](https://badge.fury.io/js/ng2-wizard.svg)](https://badge.fury.io/js/ng2-wizard)

# WizardComponent
@version 2.0.2 <br>
@author: Flávio Silva <br>
@link: [https://github.com/fssolutions/ng2-wizard](https://github.com/fssolutions/ng2-wizard)

## Installation

Wizard runs on angular 2 and is available as an NPM package. You can install ng2-wizard
in your project's directory as usual:

```bash
$ npm install --save ng2-wizard
```

Component Wizard(step to step with tabs) for Angular 2.
```
 <wizard orientation="string [landscape|portrait]" hiddenTabs="string [yes|no]" disableTabs="string [yes|no]" disableSteps="Array [number]" hiddenDisableSteps="string [yes|no]" currentStep="int [number]" (stepChange)="onYourFunction($event)">
```

## Example
### Template (.html)
```
 <wizard orientation="portrait">
  <wizard-step>
    <wizard-step-tab>Title of first tab</wizard-step-tab>
    Hello World
  </wizard-step>
 </wizard>
```
### TypeScript (.ts)
Import WizardComponent and WizardStepComponent
```
 import { Ng2WizardModule } from 'ng2-wizard';
```

Add in your module
```
 @NgModule({   
   imports: [
    Ng2WizardModule,
   ]
 })
```

## Contributing

Contributions are welcome and appreciated. You can find ng2-combosearch on GitHub, feel free to start
an issue or create a pull requests:<br>
[https://github.com/fssolutions/ng2-wizard](https://github.com/fssolutions/ng2-wizard)


## License

Copyright (c) 2016 Flávio Silva [fssolutions](http://www.flaviosilva.net).<br>
Licensed under the MIT License (MIT)
