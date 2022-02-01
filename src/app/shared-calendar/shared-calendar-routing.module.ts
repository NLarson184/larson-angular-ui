import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../error/page-not-found/page-not-found.component';
import { AuthGuardGuard } from '../services/auth-guard.guard';
import { AddEditEventComponent } from './add-edit-event/add-edit-event.component';
import { CalendarHomeComponent } from './calendar-home/calendar-home.component';

const calendarRoutes: Routes = [
    { path: '', component: CalendarHomeComponent, pathMatch: 'full', canActivate: [AuthGuardGuard] },
    { path: 'addEvent/:id', component: AddEditEventComponent, canActivate: [AuthGuardGuard] },
    { path: 'editEvent/:id', component: AddEditEventComponent, canActivate: [AuthGuardGuard] },
    { path: '**', component: PageNotFoundComponent, data: { animation: 'ErrorPage' } }
];

@NgModule({
    imports: [RouterModule.forChild(calendarRoutes)],
    exports: [RouterModule]
})
export class SharedCalendarRoutingModule { }
