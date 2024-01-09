import * as React from "react";
import { Button } from "@fluentui/react-components";

export function App() {
    return (<>
    <h1>Hello world!</h1>
    <Default></Default>
    </>)
  }


  export const Default = (props) => (
    <Button {...props}>Example</Button>
  );