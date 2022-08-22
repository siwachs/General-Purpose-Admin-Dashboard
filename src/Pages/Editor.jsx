import React from "react";

import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";

import Header from "../Components/Header";

//Dummy Data from SyncFusion
import { EditorData } from "../Data/dummy";

const Editor = () => {
  return (
    <div className="m-2 md:m-10 p-2 mt-24 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Rich Text Editor"></Header>

      <RichTextEditorComponent>
        <EditorData></EditorData>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
