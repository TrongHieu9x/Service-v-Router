import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimelineComponent} from "./timeline/timeline.component";
import {ZingComponent} from "./zing/zing.component";
import {ZingMp3Component} from "./zing-mp3/zing-mp3.component";
import {ProductlistComponent} from "./product/productlist/productlist.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {ProductEditComponent} from "./product/product-edit/product-edit.component";
import {ProductDeleteComponent} from "./product/product-delete/product-delete.component";

const routes: Routes = [
  {
    path: 'timeline',
    component: TimelineComponent
  },
  {
    path: 'youtube',
    component: ZingComponent,
    children: [{
      path: ':id',
      component: ZingMp3Component
    }]
  },
  {
    path: 'product/list',
    component: ProductlistComponent
  },
  {
    path: 'product/create',
    component: ProductCreateComponent
  },
  {
    path: 'product/edit',
    component: ProductEditComponent
  },
  {
    path: 'product/delete',
    component: ProductDeleteComponent
  }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
