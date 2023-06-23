import { NavBarBox, NavBarBoxTitle, NavBarBtn } from "./style";

function navbar(porps: { btnClick: () => void }) {
  return (
    <NavBarBox>
      <NavBarBoxTitle>
        <div className="flex">
          <div className="title">FairBERC20</div>
          <ul>
            <li>
              <a href="">Deploy</a>
            </li>
            <li>
              <a href="">Mint</a>
            </li>
          </ul>
        </div>
        <NavBarBtn onClick={() => porps.btnClick()}>Connect Wallet</NavBarBtn>
      </NavBarBoxTitle>
    </NavBarBox>
  );
}

export default navbar;
