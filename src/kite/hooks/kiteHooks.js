import { useQuery, useQueryClient, useMutation } from "react-query";
import { kiteService } from "@/kite/services";

export const useGetKiteSpots = () => {
  const { data, isLoading, isError } = useQuery(
    "spots",
    kiteService.findAllSpots
  );

  return { spots: data || [], isLoading, isError };
};
