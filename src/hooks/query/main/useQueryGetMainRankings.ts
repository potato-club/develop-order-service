import { useCallback } from "react";
import { useQuery } from "react-query";
import { MainApi } from "../../../apis/controller/main.api";

interface ResponseType {
  id: number;
  likes: number;
  rating: number;
  siteName: string;
  thumbnail: { id: number; imageName: string; imageUrl: string };
}

export const useQueryGetMainRankings = () => {
  const load = useCallback(async () => {
    const response = await MainApi.loadMainRankings();
    const mainRankings: ResponseType[] = [];
    response.map((i: ResponseType) => {
      mainRankings.push({
        id: i.id,
        likes: i.likes,
        rating: i.rating,
        siteName: i.siteName,
        thumbnail: i.thumbnail,
      });
    });
    return mainRankings;
  }, []);

  return useQuery<ResponseType[]>(["getMeetings"], load, {
    onError: (e) => {
      console.log(e);
    },
  });
};
