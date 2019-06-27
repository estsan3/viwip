import React from 'react';

import './Pagination.css';

const RADIX = 10;

export default props => {
  const {
    pageSize,
    pageNumber,
    itemsCount,
    pageSizeOptions,
    onPageSizeChange,
    onPageNumberChange
  } = props;

  const { onNext, onPrev, onFirst, onLast } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);

  const inputProps = {
    min: 1,
    step: 1,
    size: 4,
    maxLength: 4,
    type: 'number',
    max: pagesCount,
    value: pageNumber,
    onChange: ({ target }) =>
      onPageNumberChange(parseInt(target.value, RADIX) || pageNumber)
  };

  const selectProps = {
    value: pageSize,
    onChange: ({ target }) =>
      onPageSizeChange(parseInt(target.value, RADIX) || pageSize)
  };

  const options = pageSizeOptions.map((opt, i) => (
    <option key={i} value={opt}>
      {opt}
    </option>
  ));

  return (
    <table className="table pagination-compact">
      <tbody>
        <tr className="pagination-controls bg-success">
          <td>
            <span className="icon first" onClick={onFirst} />
          </td>
          <td>
            <span className="icon prev" onClick={onPrev} />
          </td>
          <td>
            <span>Page&nbsp;</span>
          </td>
          <td>
            <input className="page-number" {...inputProps} />
          </td>
          <td>
            <span>
              of&nbsp;
              {pagesCount}
            </span>
          </td>
          <td>
            <select className="page-size" {...selectProps}>
              {options}
            </select>
          </td>
          <td>
            <span className="icon next" onClick={onNext} />
          </td>
          <td>
            <span className="icon last" onClick={onLast} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
