import { AfterViewInit, Component, HostBinding, inject, OnInit, ViewChild } from '@angular/core';
import { MatFormField, MatLabel, MatPrefix } from '@angular/material/form-field';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
} from '@angular/material/table';
import { MatInput } from '@angular/material/input';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatIcon } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { Connector } from '@shared/domain/models';
import { firstValueFrom } from 'rxjs';
import { ConnectorService } from '@shared/services';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatFormField,
    MatTable,
    MatInput,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatSort,
    MatCellDef,
    MatHeaderCellDef,
    MatPaginator,
    MatLabel,
    MatHeaderRowDef,
    MatRowDef,
    MatSortHeader,
    MatIcon,
    MatPrefix,
    MatHeaderRow,
    MatRow,
    MatNoDataRow,
    NgIf,
  ],
  templateUrl: './dashboard.page.html',
})
export class DashboardPageComponent implements AfterViewInit, OnInit {
  private connectorService = inject(ConnectorService);

  protected displayedColumns: string[] = ['id', 'manufacturer', 'configuration'];
  protected dataSource = new MatTableDataSource<Connector>();

  @ViewChild(MatPaginator) protected readonly paginator!: MatPaginator;
  @ViewChild(MatSort) protected readonly sort!: MatSort;

  @HostBinding('class') get class() {
    return ['dashboard'];
  }

  ngOnInit() {
    this.initDataSourceSortingDataAccessor();
    this.fetchConnectors();
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  private initDataSourceSortingDataAccessor() {
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'manufacturer':
          return item.manufacturer.organization;
        default:
          // @ts-expect-error allow such access
          return item[property];
      }
    };
  }

  private fetchConnectors() {
    firstValueFrom(this.connectorService.getConnectors())
      .then((connectors) => {
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(connectors);
      })
      .catch(() => {
        console.error('Failed to fetch connectors');
      });
  }

  protected applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
