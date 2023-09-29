import { useCallback } from "react";
import { useQuery } from "react-query";
import { UserAPI } from "../../../apis/controller/user.api";

export interface MyLikeType {
  clientName: string;
  id: number;
  completedDated: string;
  createdDate: string;
  likes: number;
  purpose: string;
  rating: number;
  siteName: string;
  thumbnail: { id: number; imageName: string; imageUrl: string };
  state:
    | "CHECK"
    | "START"
    | "DESIGN"
    | "PUBLISH"
    | "IMPLEMENT"
    | "FINAL"
    | "COMPLETED";
}

export const useQueryGetMyLikes = (page: number = 1) => {
  const load = useCallback(async () => {
    const response = await UserAPI.getMyLikes(page);
    const likes: MyLikeType[] = [];
    response["content"].map((i: MyLikeType) => {
      likes.push({
        clientName: i.clientName,
        id: i.id,
        completedDated: i.completedDated,
        createdDate: i.createdDate,
        likes: i.likes,
        purpose: i.purpose,
        rating: i.rating,
        siteName: i.siteName,
        thumbnail: i.thumbnail,
        state: i.state,
      });
    });
    return likes;
  }, []);

  return useQuery<MyLikeType[]>(["getMeetings"], load, {
    onError: () => {},
  });
};
