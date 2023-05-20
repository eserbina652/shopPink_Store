import styled from "styled-components";
import {SeeMore} from "../../components/buttons/seeMore";
import {CategoryListWrap} from "../../components/products/productPage";

export const BasketListWrap = styled(CategoryListWrap)``

export const CountOfElementsWrap = styled.div`
  display: flex;
  position: relative;
`
export const IncDecButton = styled(SeeMore)`
  height: 40%;
  min-width: 10%;
  align-items: center;
`