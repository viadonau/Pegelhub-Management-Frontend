import { Route } from "@angular/router";
import { ManagementPageComponent } from "@routes/mgmt/mgmt.page";

export default [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: ManagementPageComponent,
            },
        ],
    }
] satisfies Route[];