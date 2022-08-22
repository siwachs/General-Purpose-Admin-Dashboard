import React from "react";

import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";

import Header from "../Components/Header";

//Dummy Data From SyncFusion
import { kanbanData, kanbanGrid } from "../Data/dummy";

const Kanban = () => {
  return (
    <div className="m-2 md:m-10 p-2 mt-24 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Kanban (To Do List)"></Header>

      <KanbanComponent
        id="kanban"
        dataSource={kanbanData}
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
        keyField="Status"
      >
        <ColumnsDirective>
          {kanbanGrid.map((data, index) => (
            <ColumnDirective key={index} {...data}></ColumnDirective>
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
