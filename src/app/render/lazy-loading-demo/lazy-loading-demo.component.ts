import { Component } from '@angular/core';
import {NgComponentOutlet} from '@angular/common';
import {UserBioComponent} from '../user-bio/user-bio.component';
import {BioComponent} from '../bio/bio.component';

@Component({
  selector: 'app-lazy-loading-demo',
    imports: [
        NgComponentOutlet,
        BioComponent,
    ],
  templateUrl: './lazy-loading-demo.component.html',
  styleUrl: './lazy-loading-demo.component.css'
})
export class LazyLoadingDemoComponent {
    advancedSettings: {new() :BioComponent} | undefined;

    async loadAdvanced() {
        const {BioComponent} = await import('./../bio/bio.component.js');
        // this.advancedSettings = BioComponent;
        // this.advancedSettings = await import('./../bio/bio.component.js');
        // console.log('Component ',this.advancedSettings);
    }
}
