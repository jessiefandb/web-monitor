import React from 'react';

const LogDetail = ({log}) => {
  console.log(log)
  return (
    <div>
      <h1>Content detail</h1>
      {log.content}
    </div>
  );
};

export default LogDetail;