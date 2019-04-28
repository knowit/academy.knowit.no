import React from "react"
import styled from "styled-components"
import MainHelmet from "./MainHelmet"
import AcademyFrontHeader from "../components/AcademyFrontHeader"
import AcademyFooter from "../components/AcademyFooter"

const FrontPage = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin: auto;

  main {
    display: flex;
    margin: 0;
  }
`

const FrontLayout = ({ children, data }) => {
  return (
    <FrontPage>
      <MainHelmet metadata={data} />
      <AcademyFrontHeader />
      <main>{children}</main>
      <AcademyFooter />
    </FrontPage>
  )
}

export default FrontLayout