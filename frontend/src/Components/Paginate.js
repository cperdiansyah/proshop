import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages)].map((data, index) => (
          <LinkContainer
            key={index + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${index + 1}`
                  : `/page/${index + 1}`
                : `/admin/productlist/${index + 1}`
            }
          >
            <Pagination.Item active={index + 1 === page}>
              {index + 1}
            </Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
