import { Route } from "@angular/router";
import { HomePage } from "@routes/home/home.page";

export default [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: HomePage,
            },
        ],
    },
] satisfies Route[];