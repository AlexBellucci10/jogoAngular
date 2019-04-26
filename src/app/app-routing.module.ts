import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VelhaComponent } from './velha/velha.component';

const routes: Routes = [{
    path: '',
    component: VelhaComponent,
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}