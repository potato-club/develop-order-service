import { useCallback } from "react";
import { useQuery } from "react-query";
import { SignUpApi } from "../../../apis/controller/signUp.api";
import { UserAPI } from "../../../apis/controller/user.api";

export interface MySignUpType {
  clientName: string;
  completedDate: string;
  createdDate: string;
  id: number;
  likes: number;
  purpose: string;
  rating: number;
  siteName: string;
  state: "" | "" | "" | "" | "";
  thumbnail: { id: number; imageName: string; imageUrl: string };
}

export const useQueryGetMySignUp = () => {
  const load = useCallback(async () => {
    const response = await UserAPI.getMyOrders();
    console.log(response);

    const signUps: MySignUpType[] = [];
    response.map((i: MySignUpType) => {
      signUps.push({
        clientName: i.clientName,
        completedDate: i.completedDate,
        createdDate: i.createdDate,
        id: i.id,
        likes: i.likes,
        purpose: i.purpose,
        rating: i.rating,
        siteName: i.siteName,
        state: i.state,
        thumbnail: i.thumbnail,
      });
    });
    return signUps;
  }, []);

  return useQuery<MySignUpType[]>(["getMeetings"], load, {
    onError: () => {},
  });
};
