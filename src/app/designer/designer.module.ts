import {NgModule} from "@angular/core";
import {DndModule} from 'ngx-drag-drop';
import {DesignerComponent} from "./designer.component";
import {DesignerNodeComponent} from "./node/designer.node.component";
import {DesignerNodeDirective} from "./node/designer.node.directive";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  imports: [
    DndModule,
    MatCardModule,
    MatMenuModule,
    MatTooltipModule
  ],
  declarations: [
    DesignerComponent,
    DesignerNodeComponent,
    DesignerNodeDirective
  ],
  exports: [
    DndModule,
    DesignerComponent
  ],
  entryComponents: [
    DesignerNodeComponent
  ]
})

export class DesignerModule {}