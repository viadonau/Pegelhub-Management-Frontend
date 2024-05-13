import { Provider } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";

function getPaginatorTranslations() {
    const paginatorIntl = new MatPaginatorIntl();

    paginatorIntl.itemsPerPageLabel = 'Einträge pro Seite:';
    paginatorIntl.nextPageLabel = 'Nächste Seite';
    paginatorIntl.previousPageLabel = 'Vorherige Seite';
    paginatorIntl.firstPageLabel = 'Erste Seite';
    paginatorIntl.lastPageLabel = 'Letzte Seite';

    return paginatorIntl;
}

export function providePaginatorTranslations(): Provider[] {
    return [
        {
            provide: MatPaginatorIntl,
            useValue: getPaginatorTranslations()
        }
    ];
}