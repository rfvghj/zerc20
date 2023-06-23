import styled from "styled-components";

export const NavBarBox = styled.div`
  position: fixed;
  padding: 14px 0;
  width: 100%;
  border-radius: 0;
  z-index: 999;
  margin-bottom: 0;
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.06);
  color: #000 !important;
`;
export const NavBarBoxTitle = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    color: #0056b3;
    font-size: 25px;
  }
  .flex {
    display: flex;
    align-items: center;
  }
  ul {
    display: flex;
    li {
      list-style-type: none;
      font-size: 15px;
      font-weight: 400;
      a {
        color: #9b9bae;
        margin-right: 20px;
      }
    }
  }
`;
export const NavBarBtn = styled.div`
  border-radius: 10px;
  font-weight: 600;
  color: #fff;
  padding: 8px 10px;
  background: #0e76fd;
  border-color: #0e76fd;
`;
