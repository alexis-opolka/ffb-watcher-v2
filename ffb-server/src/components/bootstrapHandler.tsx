"use client"

import { useEffect } from "react"

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

export default function BootstrapHandler({
  children
}: {
  children: React.ReactNode
}){
  useEffect(() => {
    // Bootstrap Bundle JS
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
  }, [])

  return (
    <div id="bootstrapHandled">
      {children}
    </div>
  )

}
