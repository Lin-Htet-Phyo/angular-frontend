import {Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {ListItemComponent} from './list-item/list-item.component';
import {UserAccountComponent} from './user-account/user-account.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {GreetingComponent} from './greeting/greeting.component';
import {CustomSliderComponent} from './custom-slider/custom-slider.component';
import {GreetComponent} from './greet/greet.component';
import {InputWithGetterSetterComponent} from './input-with-getter-setter/input-with-getter-setter.component';
import {CounterComponent} from './counter/counter.component';
import {SignalImmutableDemoComponent} from './signal-immutable-demo/signal-immutable-demo.component';
import {SignalObjectComponent} from './signal-object/signal-object.component';
import {SignalUnTrackComponent} from './signal-un-track/signal-un-track.component';
import {ContentDemoComponent} from './content-demo/content-demo.component';
import {ContentHeaderComponent} from './content-header/content-header.component';
import {LayoutDemoComponent} from './layout-demo/layout-demo.component';
import {LayoutHeaderComponent} from './layout-header/layout-header.component';
import {LayoutFooterComponent} from './layout-footer/layout-footer.component';
import {HostElementDemoComponent} from './host-element-demo/host-element-demo.component';
import {LifeCycleDemoComponent} from './life-cycle-demo/life-cycle-demo.component';
import {LifeCycleParentComponent} from './life-cycle-parent/life-cycle-parent.component';
import {ViewChildDemoComponent} from './view-child-demo/view-child-demo.component';
import {TabComponent} from './tab/tab/tab.component';
import {TabPageComponent} from './tab/tab-page/tab-page.component';
import {QueryLocatorDemoComponent} from './query-locator-demo/query-locator-demo.component';
import {DomDemoComponent} from './dom-demo/dom-demo.component';
import {AdminBioComponent} from './render/admin-bio/admin-bio.component';
import {BioComponent} from './render/bio/bio.component';
import {UserBioComponent} from './render/user-bio/user-bio.component';
import {User} from './user.model';
import {ViewContainerRefDemoComponent} from './view-container-ref-demo/view-container-ref-demo.component';
import {OuterContainerComponent} from './outer-container/outer-container.component';
import {LazyLoadingDemoComponent} from './render/lazy-loading-demo/lazy-loading-demo.component';
import {BindingComponent} from './template-demo/binding/binding.component';
import {TwoWayBindingComponent} from './template-demo/two-way-binding/two-way-binding.component';
import {ControlFlowComponent} from './render/control-flow/control-flow.component';
import {RenderLoopComponent} from './render/render-loop/render-loop.component';
import {SwitchDemoComponent} from './render/switch-demo/switch-demo.component';
import {PipeDemoComponent} from './render/pipe-demo/pipe-demo.component';
import {BaseButtonComponent} from './render/base-button/base-button.component';
import {NgTemplateDemoComponent} from './render/ng-template-demo/ng-template-demo.component';
import {CustomTabComponent} from './render/custom-tab/custom-tab.component';
import {CustomTabPageComponent} from './render/custom-tab-page/custom-tab-page.component';
import {TemplateVariableDemoComponent} from './render/template-variable-demo/template-variable-demo.component';
import {DeferContainerComponent} from './render/defer-container/defer-container.component';
import {DeferDemoComponent} from './render/defer-demo/defer-demo.component';
import {IfDemoComponent} from './directive/if-demo/if-demo.component';
import {HighlightDirective} from './directive/highlight.directive';
import {UnlessDemoComponent} from './directive/unless-demo/unless-demo.component';
import {TimesDemoComponent} from './directive/times-demo/times-demo.component';
import {DiDemoComponent} from './di-demo/di-demo.component';
import {DiDemo2Component} from './di-demo2/di-demo2.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {TodosPageComponent} from './pages/todos-page/todos-page.component';
import {CommonModule} from '@angular/common';
import {NestedRouteDemoComponent} from './pages/nested-route-demo/nested-route-demo.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {ChildAComponent} from './pages/child-a/child-a.component';
import {ChildBComponent} from './pages/child-b/child-b.component';
import {TodoDetailsComponent} from './pages/todo-details/todo-details.component';
import {AuthService} from './services/auth.service';
import {ReactiveFormDemoComponent} from './reactive-form-demo/reactive-form-demo.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DynamicFormDemoComponent} from './dynamic-form-demo/dynamic-form-demo.component';
import {TemplateFromDemoComponent} from './template-from-demo/template-from-demo.component';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        CommonModule,
        ReactiveFormsModule,

        HelloWorldComponent,
        ListItemComponent,
        UserAccountComponent,
        TodoListComponent,
        GreetingComponent,
        CustomSliderComponent,
        GreetComponent,
        InputWithGetterSetterComponent,
        CounterComponent,
        SignalImmutableDemoComponent,
        SignalObjectComponent,
        SignalUnTrackComponent,
        ContentDemoComponent,
        ContentHeaderComponent,
        LayoutDemoComponent,
        LayoutHeaderComponent,
        LayoutFooterComponent,
        HostElementDemoComponent,
        LifeCycleDemoComponent,
        LifeCycleParentComponent,
        ViewChildDemoComponent,
        TabComponent,
        TabPageComponent,
        QueryLocatorDemoComponent,
        DomDemoComponent,
        BioComponent,
        ViewContainerRefDemoComponent,
        OuterContainerComponent,
        LazyLoadingDemoComponent,
        BindingComponent,
        TwoWayBindingComponent,
        ControlFlowComponent,
        RenderLoopComponent,
        SwitchDemoComponent,
        PipeDemoComponent,
        BaseButtonComponent,
        NgTemplateDemoComponent,
        CustomTabComponent,
        CustomTabPageComponent,
        TemplateVariableDemoComponent,
        DeferContainerComponent,
        DeferDemoComponent,
        IfDemoComponent,
        HighlightDirective,
        UnlessDemoComponent,
        TimesDemoComponent,
        DiDemoComponent,
        DiDemo2Component,
        HomePageComponent,
        TodosPageComponent,
        NestedRouteDemoComponent,
        NotFoundComponent,
        ChildAComponent,
        ChildBComponent,
        TodoDetailsComponent,
        ReactiveFormDemoComponent,
        DynamicFormDemoComponent,
        TemplateFromDemoComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'frontend';
    message: string = 'Hello World!';
    slideValue = 10;
    tabHeaders = ['Tab1', 'Tab2', 'Tab3'];

    user:User;
    constructor(public authService: AuthService) {
        this.user = {
            isAdmin: true,
            userName: 'Admin'
        }
    }
    valueOnChange() {
        console.log('Child slide value change ', this.slideValue);
    }
}
