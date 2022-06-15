import { useQuery, useQueryClient, useMutation } from "react-query";
import { favouriteService, spotService } from "@/kite/services";

const processKites = (spots, favourites) => {
  return spots.map((spot) => {
    spot.favourite = favourites.find((favourite) => {
      return spot.id == favourite.spot;
    });

    return spot;
  });
};

export const useGetKiteSpots = (searchValue, filters) => {
  const spotsQuery = useQuery(["spots", searchValue, filters], () =>
    spotService.findAllSpots(searchValue, filters)
  );

  const favouritesQuery = useQuery(["favourites"], () =>
    favouriteService.findAllFavourites()
  );

  const isLoading = spotsQuery.isLoading || favouritesQuery.isLoading;
  const isError = spotsQuery.isError || favouritesQuery.isError;

  const spots =
    isLoading || isError
      ? []
      : processKites(spotsQuery?.data || [], favouritesQuery?.data || []);

  return {
    spots,
    isLoading,
    isError,
  };
};

export const useAddToFavourites = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(favouriteService.addToFavourites, {
    onSuccess: () => {
      queryClient.invalidateQueries("favourites");
    },
  });
  return mutation.mutate;
};

export const useRemoveFromFavourites = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(favouriteService.removeFromFavourites, {
    onSuccess: () => {
      queryClient.invalidateQueries("favourites");
    },
  });
  return mutation.mutate;
};
