import { Component, Input, Output, EventEmitter, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import { WizardStepComponent } from './wizard-step.component'
/**
 * # WizardComponent
 * @version 2.0.0
 * @author: Flávio Silva
 * @link: [https://github.com/fssolutions/ng2-wizard](https://github.com/fssolutions/ng2-wizard)
 *
 * Component Wizard(step to step with tabs) for Angular 2.
 *```
 *<wizard orientation="string [landscape|portrait]" hiddenTabs="string [yes|no]" disableTabs="string [yes|no]" disableSteps="Array [number]" hiddenDisableSteps="string [yes|no]" currentStep="int [number]" (stepChange)="onYourFunction($event)">
 *```
 *
 * ## Example
 * ### Template (.html)
 *```
 * <wizard orientation="portrait">
 *  <wizard-step>
 *    <wizard-step-tab>Title of first tab</wizard-step-tab>
 *    Hello World
 *  </wizard-step>
 * </wizard>
 *```
 * ### TypeScript (.ts)
 * Import WizardComponent and WizardStepComponent
 *```
 * import { WizardComponent, WizardStepComponent } from 'ng2-wizard';
 *```
 *
 * Add in your directives
 *```
 * directives: [WizardStepComponent, WizardComponent]
 *```
 */
@Component({
    selector: 'wizard',
    styleUrls: [
		    './wizard.component.css'
    ],
    templateUrl: './wizard.component.html'
})

export class WizardComponent implements AfterContentInit {
    private version: string = "1.0.3.0";

    /**
     * @property {object}   defaults                       - The default values for wizard.
     * @property {string}   defaults.orientation           - The default orientation.
     * @property {boolean}  defaults.disableTabs           - The default disableTabs.
     * @property {array}    defaults.disableTabsAt         - The default tabs disabled.
     * @property {boolean}  defaults.hiddenTabs            - The default hiddenTabs.
     * @property {number}   defaults.currentStep           - The default current step.
     * @property {number}   defaults.hiddenDisableSteps    - The default hiddenDisableSteps.
     */
    private defaults = {
        orientation: "landscape",
        disableTabs: false,
        hiddenTabs: false,
        currentTab: 0,
        disableSteps: [-1],
        hiddenDisableSteps: false
    };
    @ContentChildren(WizardStepComponent) private wizardSteps: QueryList<WizardStepComponent>;

    /**
     * Set or get orientation of the navegation tab position
     * @params orientation {string} ["portrait","landscape"] - Orientation of the navegation;
     *
     * ### Example
     * #### Attribute (.html)
     * Implements in your html
     * ```
     *  <wizard orientation="portrait|landscape">
     * ```
     *
     * #### TypeScript (.ts)
     * Implements in your file controller
     * ```
     *  @ViewChild(WizardComponent) mWizard: WizardComponent;
     *  toggleTabOrientation(){
     *    console.info("hiddenTabs tabs:", this.mWizard.orientation);
     *    this.mWizard.orientation = mWizard.orientation == 'portrait' ? 'landscape' : 'portrait';
     *  }
     * ```
     * @return {string} ["portrait","landscape"]
     */
    @Input()
    set orientation(format: string) {
        this.defaults.orientation = format;
    };
    get orientation() {
        return this.defaults.orientation;
    }

    /**
     * Active manual steps(tabs) navegation;
     *
     * ### Example
     * #### Attribute (.html)
     * Implements in your html
     * ```
     *  <wizard disableTabs="yes|no">
     * ```
     *
     * #### TypeScript (.ts)
     * Implements in your file controller
     * ```
     *  @ViewChild(WizardComponent) mWizard: WizardComponent;
     *  toggleNavigationMode(){
     *    console.info("is disable tabs:", this.mWizard.disableTabs);
     *    this.mWizard.disableTabs = !this.mWizard.disableTabs;
     *    // or mWizard.disableTabs = mWizard.disableTabs ? false : true;
     *    console.info("is disable tabs:", this.mWizard.disableTabs);
     *  }
     * ```
     * @return {boolean} - Navegation tab is enabled
     */
    @Input()
    set disableTabs(status: any) {

        if (typeof status == "boolean") {
            this.defaults.disableTabs = status;
            return;
        }

        if (typeof status == "string") {
            this.defaults.disableTabs = status == "yes";
            return;
        }
    }
    get disableTabs() {
        return this.defaults.disableTabs;
    }

    /**
     * Hidden tabs navegation;
     *
     * ### Example
     * #### Attribute (.html)
     * Implements in your html
     * ```
     *  <wizard hiddenTabs="yes|no">
     * ```
     *
     * #### TypeScript (.ts)
     * Implements in your file controller
     * ```
     *  @ViewChild(WizardComponent) mWizard: WizardComponent;
     *  toggleVisibleTab(){
     *    console.info("hiddenTabs tabs:", this.mWizard.hiddenTabs);
     *    mWizard.hiddenTabs = !this.mWizard.hiddenTabs;
     *    // or mWizard.hiddenTabs = this.mWizard.hiddenTabs ? false : true;
     *    console.info("hiddenTabs tabs:", this.mWizard.hiddenTabs);
     *  }
     * ```
     * @return {boolean} - Navegation tab is show
     */
     @Input()
     set hiddenTabs(status: any) {
         if (typeof status == "boolean") {
             this.defaults.hiddenTabs = status;
             return;
         }

         if (typeof status == "string") {
             this.defaults.hiddenTabs = status == "yes";
             return;
         }
     }
     get hiddenTabs() {
         return this.defaults.hiddenTabs || false;
     }

    /**
     * Disable specific tabs navegation;
     *
     * ### Example
     * #### Attribute (.html)
     * Implements in your html
     * ```
     *  <wizard [disableSteps]="[2,4]">
     * ```
     *
     * #### TypeScript (.ts)
     * Implements in your file controller
     * ```
     *  @ViewChild(WizardComponent) mWizard: WizardComponent;
     *  toggleNavigationMode(){
     *    console.info("is disable steps:", this.mWizard.disableSteps);
     *    this.mWizard.disableSteps = [2,4,5];
     *    console.info("is disable steps:", this.mWizard.disableSteps);
     *  }
     * ```
     * @return {boolean} - Navegation tab is enabled
     */
    @Input()
    set disableSteps(indexs: Array<number>) {
        if (typeof indexs != 'object')
            return;

        this.defaults.disableSteps = indexs;
    };
    get disableSteps(): Array<number> {
        return this.defaults.disableSteps;
    }

    /**
     * Hide navigation when step disabled;
     *
     * ### Example
     * #### Attribute (.html)
     * Implements in your html
     * ```
     *  <wizard [hiddenDisableSteps]="[yes|no|true|false]">
     * ```
     *
     * #### TypeScript (.ts)
     * Implements in your file controller
     * ```
     *  @ViewChild(WizardComponent) mWizard: WizardComponent;
     *  toggleNavigationMode(){
     *    console.info("show steps:", this.mWizard.hiddenDisableSteps);
     *    this.mWizard.hiddenDisableSteps = true;
     *    console.info("show steps:", this.mWizard.hiddenDisableSteps);
     *  }
     * ```
     * @return {boolean} - Show tab when disabled
     */
    @Input()
    set hiddenDisableSteps(status: any) {
      if (typeof status == "boolean") {
          this.defaults.hiddenDisableSteps = status;
          return;
      }

      if (typeof status == "string") {
          this.defaults.hiddenDisableSteps = status == "yes";
          return;
      }
    };
    get hiddenDisableSteps() {
        return this.defaults.hiddenDisableSteps;
    }

    /**
     * Set or Get current step
     * @return {number} - Current number step
     *
     * ### Example
     * #### Attribute (.html)
     * Implements in your html
     * ```
     *  <wizard currentStep="1">
     * ```
     *
     * #### TypeScript (.ts)
     * Implements in your file controller [see setcurrentTab]{@link #setcurrentTab()}
     * ```
     *  @ViewChild(WizardComponent) mWizard: WizardComponent;
     *  nextStep(){
     *    console.info("Current Step:", this.mWizard.currentStep);
     *    this.mWizard.currentStep++;
     *    // or mWizard.currentStep = this.mWizard.currentStep + 1;
     *    console.info("Current Step:", this.mWizard.currentStep);
     *  }
     * ```
     */
    @Input()
    set currentStep(index: number) {
        this.defaults.currentTab = this.getRealIndex(parseInt("" + index));

        //if change date
        if (this.wizardSteps != null && this.wizardSteps.length > 0) {
            this.setPanel(this.defaults.currentTab);
        }
    }
    get currentStep(): number { return this.defaults.currentTab; }

    //Event Listeners
    /**
     * Return Object
     * @params {boolean} isTab - Action when clicked in tab;
     * @params {number} currentStep - Current index step;
     * @event WizardComponent#stepChange
     *
     * Fire event when change current step
     * ### Example
     * #### Template (.html)
     * Implements in your html
     * ```
     *  <wizard (stepChange)="onStepChange($event)">
     * ```
     *
     * #### TypeScript (.ts)
     * Implements in your file controller
     * ```
     *  onTabChange(opt){
     *    console.info("Change in tab ? ", opt.isTab);
     *    console.info("Current step: ", opt.currentStep);
     *  }
     * ```
     */
    @Output() stepChange: EventEmitter<any> = new EventEmitter();

    /**
     * Set current number step
     *
     * ### Example
     * #### TypeScript (.ts)
     * Implements in your file controller
     * ```
     *  @ViewChild(WizardComponent) mWizard: WizardComponent;
     *  setStep(){
     *    this.mWizard.setCurrentStep(1);
     *  }
     * ```
     */
    setCurrentStep(index: number): void {
        this.setPanel(this.getRealIndex(index));
    }

    /**
     * Disable specific step
     * @params {number} index - Add index to disable tab
     *
     * ### Example
     * #### TypeScript (.ts)
     * Implements in your file controller
     * ```
     *  @ViewChild(WizardComponent) mWizard: WizardComponent;
     *  denyStep(){
     *    this.mWizard.addDisabledSteps(1);
     *  }
     * ```
     */
    addDisabledSteps(index: number): void {
        if (this.inArray(this.defaults.disableSteps, index))
            return;

        this.defaults.disableSteps.push(index);
    }

    /**
     * Remove disable specific step
     * @params {number} index - Remove index to disable tab
     *
     * ### Example
     * #### TypeScript (.ts)
     * Implements in your file controller
     * ```
     *  @ViewChild(WizardComponent) mWizard: WizardComponent;
     *  allowStep(){
     *    this.mWizard.removeDisabledSteps(1);
     *  }
     * ```
     */
    removeDisabledSteps(index: number): void {
        if (this.inArray(this.defaults.disableSteps, index))
            return;

        let i = this.defaults.disableSteps.indexOf(index);
        if(i > -1)
          this.defaults.disableSteps.splice(i, 1);
    }

    /**
     * Disable specific steps
     * @params {Array<number>} index - Add index to disable tab
     *
     * ### Example
     * #### TypeScript (.ts)
     * Implements in your file controller
     * ```
     *  @ViewChild(WizardComponent) mWizard: WizardComponent;
     *  denySteps(){
     *    this.mWizard.setDisabledSteps([1,2]);
     *  }
     * ```
     */
    setDisabledSteps(indexs: Array<number>): void {
        if (typeof indexs != 'object')
            return;

        this.defaults.disableSteps = indexs;
    }

    ngAfterContentInit() {
        if (this.wizardSteps.length == 0) {
            this.errorMessage('WizardComponent not found view childrens');
        }

        this.setPanel(this.getRealIndex(this.defaults.currentTab));
    }

    private inArray(ar: Array<any>, key: any): boolean {
        return !!ar.find(x => x == key);
    }

    private getRealIndex(index: number) {
        if (this.wizardSteps == null)
            return index;

        let i = index > this.defaults.currentTab ? 1 : -1;
        let nindex = index;
        while (
            this.inArray(this.defaults.disableSteps, nindex)
            && nindex >= 0
            && nindex <= this.wizardSteps.length
        ) {
            nindex += i;
        };

        if (nindex == 0)
            return 0;

        if (nindex == this.wizardSteps.length)
            return this.defaults.currentTab;

        return nindex;
    }

    private hideAllContainer(): void {
        this.wizardSteps.forEach(step => {
            step.isActive = false;
        });
    }

    private setPanel(index: number, isTab: boolean = false): void {

        if ((this.defaults.disableTabs && isTab) || this.wizardSteps == null || this.inArray(this.defaults.disableSteps, index)) {
            return;
        }

        if (index >= this.wizardSteps.length)
            this.defaults.currentTab = this.wizardSteps.length - 1;
        else if (index < 0)
            this.defaults.currentTab = 0;
        else
            this.defaults.currentTab = index;

        this.stepChange.emit({ currentStep: index, isTab: isTab });
        this.hideAllContainer();
        this.wizardSteps.toArray()[this.currentStep].isActive = true;
    }

    private errorMessage(m: string, o: Object = null): void {
        switch (arguments.length) {
            case 1:
                console.error('WizardComponet Error:', { Message: m, Version: this.version });
                break;

            case 2:
                console.error('WizardComponet Error:', { Message: m, Object: o, Version: this.version });
                break;
        }
    }
}
