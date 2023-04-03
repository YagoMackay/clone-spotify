import useSWR from 'swr';
import fetcher from './fetcher';

interface FetcherResult {
  isLoading: boolean;
  isError: boolean;
}
interface UseMeResult extends FetcherResult {
  user: any;
}

export const useMe = (): UseMeResult => {
  const { data, error } = useSWR('/me', fetcher);

  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export const usePlaylist = () => {
  const { data, error } = useSWR('/playlist', fetcher);
  return {
    playlists: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};
