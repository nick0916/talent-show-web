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
    NbInputModule,
    NbChatModule,
    NbAccordionModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { KittenComponent } from './kitten/kitten.component';
import { Customer } from './customer365.component';
import { FormsModule } from '@angular/forms';
import { EchartsMultipleXaxisComponent } from './trace-routing/echarts-multiple-xaxis.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component'
import { EchartsPiePurchaseItemComponent } from './pie-purchace-item/echarts-pie.component';
import { ChatComponent } from './chat/chat.component';
import { AccordionComponent } from './accordion/accordion.component';

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
        NbInputModule,
        NbChatModule,
        NbAccordionModule
    ],
    declarations: [
        Customer,
        KittenComponent,
        EchartsMultipleXaxisComponent,
        TreeGridComponent,
        EchartsPiePurchaseItemComponent,
        ChatComponent,
        AccordionComponent
    ],
})
export class CustomerModule { }
