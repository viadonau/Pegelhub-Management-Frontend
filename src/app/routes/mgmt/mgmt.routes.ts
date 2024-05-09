import { Route } from "@angular/router";
import { ManagementPage } from "@routes/mgmt/mgmt.page";

export default [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: ManagementPage,
            },
        ],
    }
] satisfies Route[];