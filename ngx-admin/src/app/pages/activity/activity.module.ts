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
    NbStepperModule,
    NbDatepickerModule
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { ReactiveFormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { ActivityComponent } from './activity.component';
import { EchartsMultipleXaxisComponent } from './revenuLine/echarts-multiple-xaxis.component';
import { EchartsPiePurchaseItemComponent } from './pie-item/echarts-pie.component';
import { EchartsBarComponent } from './bar-item/echarts-bar.component';
import { AnalPastActivityComponent } from './analPastActivity/analPastActivity.component';
import { CalCustomerComponent } from './calCustomer/calCustomer.component';
import { SendMessageComponent } from './sendMessage/sendMessage.component';
import { InviteContentComponent } from './inviteContent/inviteContent.component';

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
        NbStepperModule,
        ReactiveFormsModule,
        NbDatepickerModule
    ],
    declarations: [
        ActivityComponent,
        EchartsMultipleXaxisComponent,
        EchartsPiePurchaseItemComponent,
        EchartsBarComponent,
        AnalPastActivityComponent,
        CalCustomerComponent,
        SendMessageComponent,
        InviteContentComponent
    ],
})
export class ActivityModule { }
