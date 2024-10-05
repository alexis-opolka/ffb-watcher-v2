
import { ReactNode } from "react"

export default function BootStrapComponentWithTitle(
  {
    title,
    children,
    headerLevel
  }: {
    title: string,
    children?: ReactNode,
    headerLevel?: number
  }
){

  // See <https://stackoverflow.com/a/59685929> to know why we cast LocalHeadertype as JSX.IntrinsicElements
  // Author:
  //  - Question: https://stackoverflow.com/users/1350481/eranga-kapukotuwa
  //  - Typescript-related answer: https://stackoverflow.com/users/4842857/jack-steam
  const LocalHeaderType = `h${headerLevel ? headerLevel : 4}` as keyof JSX.IntrinsicElements;

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="mx-2 my-2 card">
          <div className="card-header">
            <LocalHeaderType>{title}</LocalHeaderType>
          </div>
          <div className="card-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
