"use client"

import BootStrapComponentWithTitle from "@/components/bootstrapComponents";
import React, {useState} from "react";
import { CardClickableComponent } from "./clientComponents";

export default function TestPage(){

  const stands: number = 5;

  const cardsArray: Array<React.ReactNode> = [];

  // We're creating the array
  for (let i = 0; i < stands; i++) {
    let localArray: Array<React.ReactNode> = [];
    localArray.push(<CardComponent id={i} key={i} />);
  }

  return(
    <div style={{display: "flex", flexDirection: "row"}}>
      {cardsArray.map((elem: any, id: number) => {

        return (
          <>{elem}</>
        )

      })}
    </div>
  )
}


function CardComponent({id}: {
  id: number
}) {

  const [counter, setCounter] = useState<number>(0);

  return (
    <BootStrapComponentWithTitle title={`${id}`}>
      <CardClickableComponent  id={id} statefulVar={[counter, setCounter]}/>
    </BootStrapComponentWithTitle>
  )
}
