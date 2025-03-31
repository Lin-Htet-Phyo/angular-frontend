import {ResolveFn, Routes} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {TodosPageComponent} from './pages/todos-page/todos-page.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {ChildAComponent} from './pages/child-a/child-a.component';
import {ChildBComponent} from './pages/child-b/child-b.component';
import {NestedRouteDemoComponent} from './pages/nested-route-demo/nested-route-demo.component';
import {TodoDetailsComponent} from './pages/todo-details/todo-details.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {authGuard} from './guard/auth-guard.guard';

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('Child a');

export const routes: Routes = [
    {path: 'home', component: HomePageComponent, title: 'Home'},
    {path: 'todos', component: TodosPageComponent, title: 'Todos', canActivate: [authGuard]},
    {path: 'todos/:id', component: TodoDetailsComponent, title: 'Todos Details'},
    {
        path: 'lazy',
        loadComponent: () => import('./pages/lazy-page/lazy-page.component').then(c => c.LazyPageComponent),
        title: 'Lazy Page',
    },
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'login', component: LoginPageComponent, title: 'Login'},
    {
        path: 'nested-route',
        component: NestedRouteDemoComponent, // this is the component with the <router-outlet> in the template
        // canActivate: [authGuard],
        children: [
            {
                path: 'child-a', // child route path
                component: ChildAComponent, // child route component that the router renders
                title: resolvedChildATitle,
            },
            {
                path: 'child-b',
                component: ChildBComponent, // another child route component that the router renders
                title: 'Child B',
            },
        ],
        title: 'Nested Route',
        canActivate: [authGuard]
    },
    {path: '**', component: NotFoundComponent}, // wildcard route
];
