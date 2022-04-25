import React from 'react'
import { Link } from 'react-router-dom'
//import Header from '../Header'
import styled from 'styled-components'
import error from '../../assets/error.png'

const LinkStyled = styled(Link)`
  margin-top: 120px;
  color: #ff6060;
  font-size: 18px;
  @media (max-width: 450px) {
    font-size: 14px;
  }
`

const ContainerErrorStyled = styled.div`
  display: flex;
  margin-top: 12%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
`
const H1Styled = styled.h1`
  margin-top: 60px;
  color: #ff6060;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 51px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 875px) {
    font-size: 24px;
    text-align: center;
  }
  @media (max-width: 380px) {
    font-size: 18px;
    margin-top :31px;
  }
`
const ImageStyled = styled.img`
  @media (max-width: 875px) {
    width: 380px;
    height: 230px;
  }
  @media (max-width: 440px) {
    width: 190px;
    height: 100px;
    padding-top: 100px;
  }
`
const LineStyled = styled.br`
  display: none;
  @media (max-width: 550px) {
    display: inline;
  }
`

function PageNotFound() {
  return (
    <ContainerErrorStyled>
      <ImageStyled src={error} alt="error 404" />
      <H1Styled>
        Oups! La page que<LineStyled/> vous demandez n'existe pas.
      </H1Styled>

      <LinkStyled to="/">Retourner sur la page d'accueil</LinkStyled>
    </ContainerErrorStyled>
  )
}

export default PageNotFound
