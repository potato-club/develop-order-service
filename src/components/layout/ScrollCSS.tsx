import { useRecoilValue } from "recoil";
import { ScrollLogin } from "../../../styles/scroll_login.style";
import { ScrollLogout } from "../../../styles/scroll_logout.style";
import { isLogin } from "../../recoil/userInfo";

export const ScrollCSS = () => {
  const isLoginState = useRecoilValue(isLogin);
  return <>{isLoginState ? <ScrollLogin /> : <ScrollLogout />}</>;
};
