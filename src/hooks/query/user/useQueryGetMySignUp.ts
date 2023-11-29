import { useCallback } from "react";
import { useQuery } from "react-query";
import { SignUpApi } from "../../../apis/controller/signUp.api";
import { UserAPI } from "../../../apis/controller/user.api";

export interface MySignUpType {
  orderDto: any;
  orderId: number;
  state:
    | "CHECK"
    | "START"
    | "DESIGN"
    | "PUBLISH"
    | "IMPLEMENT"
    | "FINAL"
    | "COMPLETED";
}

export const useQueryGetMySignUp = () => {
  const load = useCallback(async () => {
    const response = await UserAPI.getMyOrders();
    const signUps: MySignUpType[] = [];
    response.map((i: MySignUpType) => {
      signUps.push({
        orderDto: i.orderDto,
        orderId: i.orderId,
        state: i.state,
      });
    });
    return signUps;
  }, []);

  return useQuery<MySignUpType[]>(["getMeetings"], load, {
    onError: () => {},
  });
};
