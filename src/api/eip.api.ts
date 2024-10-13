import { API_URL } from "@/api/constant/eipApi.url";
import axios from "@/vendor/axios";

/** 전체 랭킹 조회 */
export const getRanking = async (req: GetRankingRequest) => {
  const { data } = await axios.get<GetRankingResponse>(API_URL.GET_RANKING(), {
    params: { ...req.query },
  });
  return data;
};
