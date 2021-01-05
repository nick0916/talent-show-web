import { NgModule } from '@angular/core';
import {
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbTabsetModule,
    NbUserModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbTreeGridModule,
    NbInputModule
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { KittenComponent } from './kitten/kitten.component';
import { Customer } from './customer365.component';
import { FormsModule } from '@angular/forms';
import { EchartsMultipleXaxisComponent } from './trace-routing/echarts-multiple-xaxis.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component'
import { EchartsPiePurchaseItemComponent } from './pie-purchace-item/echarts-pie.component';

@NgModule({
    imports: [
        FormsModule,
        ThemeModule,
        NbCardModule,
        NbUserModule,
        NbButtonModule,
        NbTabsetModule,
        NbActionsModule,
        NbRadioModule,
        NbSelectModule,
        NbListModule,
        NbIconModule,
        NbButtonModule,
        NgxEchartsModule,
        NbTreeGridModule,
        NbInputModule
    ],
    declarations: [
        Customer,
        KittenComponent,
        EchartsMultipleXaxisComponent,
        TreeGridComponent,
        EchartsPiePurchaseItemComponent
    ],
})
export class CustomerModule { }
