import React from "react"

import * as S from "./styled"

const PostItem = () => (
  <S.PostItemLink to="/slug/">
    <S.PostItemWrapper>
      <S.PostItemTag background="#47650b">Misc</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>#0 de Julho de 2019 - 4 min de leitura</S.PostItemDate>
        <S.PostItemTitle>Diga nao ao Medium</S.PostItemTitle>
        <S.PostItemDescription>
          Bla bla bla bla nao use o medium
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem
