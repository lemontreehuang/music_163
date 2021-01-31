import styled from 'styled-components';

export const UserLoginWrapper = styled.div`
  height: 126px;
  background-position: 0 0;
  padding: 16px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    line-height: 25px;
  }

  div {
    display: inline-block;
    margin-top: 10px;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-decoration: none;
    text-shadow: 0 1px 0 #8a060b;

    :hover {
      text-decoration: underline;
      cursor: pointer;
    }

  }
`;
