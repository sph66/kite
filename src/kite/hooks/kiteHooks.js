import { useQuery } from "react-query";
import { kiteService } from "@/kite/services";

export const useGetKiteSpots = (searchValue) => {
  const { data, isLoading, isError } = useQuery(["spots", searchValue], () =>
    kiteService.findAllSpots(searchValue)
  );

  return { spots: data || [], isLoading, isError };
};
