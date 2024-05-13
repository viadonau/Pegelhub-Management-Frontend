import { Route } from "@angular/router";
import { DashboardPage } from "./dashboard.page";

export default [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: DashboardPage,
            },
        ],
    }
] satisfies Route[];