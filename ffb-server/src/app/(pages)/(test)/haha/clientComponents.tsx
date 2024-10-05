"use client"

import { useEffect, useState } from "react";

export function CardClickableComponent(
  {
    id,
    statefulVar
  }: {
    id: number,
    statefulVar: [number, React.Dispatch<React.SetStateAction<number>>]
  }
) {

  const cardID: string = `card-${id}-counter`;
  const [stateVar, setStatefulVar] = statefulVar;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.getElementById(cardID)?.addEventListener("click", () => {
        setStatefulVar(stateVar+1);

        document.getElementById(cardID)?.setAttribute("ffb-data", `${stateVar}`);
        console.debug(`Count for ID n°${id}: ${stateVar}`);
      });
    }
  }, [cardID, id, stateVar, setStatefulVar]);



  return (
    <button id={cardID}>
      <header> Click me ! + {stateVar} </header>
      {stateVar > 0 ? (<div id={`card-${id}-count`}>{stateVar}</div>) : ''}
    </button>
  )
}
