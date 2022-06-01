import { useQuery } from "react-query";
import { kiteService } from "@/kite/services";

export const useGetKiteSpots = (searchValue, filters) => {
  const { data, isLoading, isError } = useQuery(
    ["spots", searchValue, filters],
    () => kiteService.findAllSpots(searchValue, filters)
  );

  return { spots: data || [], isLoading, isError };
};
