import React from "react";

import {
  ScheduleComponent,
  Week,
  Day,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";

//DummyData Get from SyncFusion
import { scheduleData } from "../Data/dummy";

import { Header } from "../Components/Components";

const Calendar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Calender" category="App"></Header>

      <ScheduleComponent
        height="650px"
        eventSettings={{
          dataSource: { scheduleData },
        }}
        selectedDate={new Date(2022, 7, 19)}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        ></Inject>
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
