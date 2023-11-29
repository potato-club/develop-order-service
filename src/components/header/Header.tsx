import { useEffect, useState } from "react";
import styled from "styled-components";
import { logout, tokenService } from "../../libs/tokenService";
import { customColor } from "../customColor";
import { HeaderMenu } from "./HeaderMenu";
import { HeaderTitle } from "./HeaderTitle";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    if (tokenService.getRole() !== "USER") {
      logout();
    }
  }, []);
  return (
    <Wrapper>
      {!isScrolled && <HeaderTitle />}
      <HeaderMenu />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  position: fixed;
  z-index: 5;
  flex-direction: column;
  width: 100%;
  box-shadow: 0px 4px 4px 0px ${customColor.black + "33"};
`;
