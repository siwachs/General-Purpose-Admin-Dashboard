import React from "react";

import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Sort,
  Filter,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

//Dummy data
import { customersGrid, customersData } from "../Data/dummy";

import { Header } from "../Components/Components";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Customers" category="Page"></Header>
      <GridComponent
        width="auto"
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        editSettings={{
          allowDeleting: true,
          allowEditing: true,
        }}
      >
        <ColumnsDirective>
          {customersGrid.map((data, index) => (
            <ColumnDirective key={index} {...data}></ColumnDirective>
          ))}
        </ColumnsDirective>
        <Inject
          services={[Page, Sort, Toolbar, Selection, Edit, Filter]}
        ></Inject>
      </GridComponent>
    </div>
  );
};

export default Customers;
