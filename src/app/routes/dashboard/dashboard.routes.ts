import { Route } from "@angular/router";
import { DashboardPageComponent } from "./dashboard.page";

export default [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: DashboardPageComponent,
            },
        ],
    }
] satisfies Route[];