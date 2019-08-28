import React from "react"
import MainHelmet from "../MainHelmet"
import HeaderMenu from "../AcademyHeaderMenu"
import AcademyFooter from "../AcademyFooter"
import css from "./FrontLayout.module.scss"

const FrontLayout = ({ children, data }) => {
  return (
    <section className={css.frontpage}>
      <MainHelmet metadata={data} />
      <HeaderMenu data={data} />
      <main>{children}</main>
      <AcademyFooter />
    </section>
  )
}

export default FrontLayout