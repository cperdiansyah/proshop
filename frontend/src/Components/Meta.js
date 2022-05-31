import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keyword }) => {
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <title>{title}</title>
      <meta name={description} content={description} />
      <meta name={keyword} content={keyword} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To Proshop',
  description: 'we sell best products for cheap',
  keyword: 'electronic, buy electronic, cheap electronic',
};

export default Meta;
