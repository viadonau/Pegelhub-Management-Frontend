import { Route } from "@angular/router";
import { HomePageComponent } from "@routes/home/home.page";

export default [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: HomePageComponent,
            },
        ],
    },
] satisfies Route[];