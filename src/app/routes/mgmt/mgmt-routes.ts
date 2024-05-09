import { Route } from "@angular/router";
import { ManagementPage } from "@routes/mgmt/mgmt.page";

export default [
    {
        path: 'mgmt',
        component: ManagementPage,
    },
] satisfies Route[];