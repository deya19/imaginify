import React from "react"

interface Prop {
  children: React.ReactNode;
}

export default function Layout({children}: Prop) {
  return (
    <main className="auth">{children}</main>
  )
}
