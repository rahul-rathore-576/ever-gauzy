import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbInputModule, NbSelectModule, NbTabsetModule, NbToggleModule } from '@nebular/theme';
import { NgSelectModule } from '@ng-select/ng-select';
import { CKEditorModule } from 'ckeditor4-angular';
import { ColorPickerModule } from 'ngx-color-picker';
import { CurrencyModule } from '../../currency/currency.module';
import { EmployeeMultiSelectModule } from '../../employee/employee-multi-select/employee-multi-select.module';
import { ImageUploaderModule } from '../../image-uploader/image-uploader.module';
import { ProjectMutationComponent } from './project-mutation.component';
import { TagsColorInputModule } from '../../tags/tags-color-input/tags-color-input.module';
import { TeamSelectModule } from '../../team-select/team-select.module';
import { TranslateModule } from '../../translate/translate.module';

@NgModule({
    declarations: [
        ProjectMutationComponent
    ],
    exports: [
        ProjectMutationComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NbButtonModule,
        NbCardModule,
        NbDatepickerModule,
        NbInputModule,
        NbSelectModule,
        NbTabsetModule,
        NbToggleModule,
        NgSelectModule,
        CKEditorModule,
        ColorPickerModule,
        CurrencyModule,
        EmployeeMultiSelectModule,
        ImageUploaderModule,
        TagsColorInputModule,
        TeamSelectModule,
        TranslateModule,
    ]
})
export class ProjectMutationModule { }
