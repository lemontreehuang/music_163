import React, { memo } from 'react';
// import PropTypes from 'prop-types';

import { HeaderWrapper } from './style';

const ThemeHeaderRCM = memo(function (props) {
  const { title, keywords = [] } = props;
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <ul className="keyword">
          {
            keywords.map((item, index) => {
              return (
                <li className="item" key={item}>
                  <a href="todo">{item}</a>
                  <span className="divider">|</span>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
})

// ThemeHeaderRCM.PropTypes = {
//   title: PropTypes.string.isRequired,
//   keywords: PropTypes.array
// }

// ThemeHeaderRCM.defaultProps = {
//   keywords: []
// }
export default ThemeHeaderRCM;