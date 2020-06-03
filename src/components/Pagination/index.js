import React from "react"
import * as S from "./styled"
import { Link } from "gatsby"
import propTypes from "prop-types"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && <Link to={prevPage}> pagina anterior</Link>}

    <p>
      {currentPage} de {numPages}
    </p>

    {!isLast && <Link to={nextPage}>proxima pagina</Link>}
  </S.PaginationWrapper>
)
Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPages: propTypes.string,
  nextPage: propTypes.string,
}
export default Pagination
