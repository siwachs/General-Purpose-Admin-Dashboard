import React from "react";

import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Search,
  Inject,
  Sort,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

//Dummy data
import { employeesGrid, employeesData } from "../Data/dummy";

import { Header } from "../Components/Components";

const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Employees" category="Page"></Header>
      <GridComponent
        width="auto"
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
      >
        <ColumnsDirective>
          {employeesGrid.map((data, index) => (
            <ColumnDirective key={index} {...data}></ColumnDirective>
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Sort, Toolbar]}></Inject>
      </GridComponent>
    </div>
  );
};

export default Employees;
