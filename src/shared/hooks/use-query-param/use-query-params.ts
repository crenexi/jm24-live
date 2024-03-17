import { useNavigate, useLocation } from 'react-router-dom';

type SetParamFn = (value: string | number | boolean) => void;
type RemoveParamFn = () => void;

type UseQueryParam = (
  key: string,
) => [string | null, SetParamFn, RemoveParamFn];

const useQueryParam: UseQueryParam = (key) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper function to update the URL
  const updateUrl = (searchParams: URLSearchParams) => {
    const newUrl = location.pathname + '?' + searchParams.toString();
    navigate(newUrl, { replace: true });
  };

  // Parse the current search string
  const queryParams = new URLSearchParams(location.search);

  // Get the current value of a query param
  const getValue = (): string | null => queryParams.get(key);

  // Set a new value for the query param
  const setValue: SetParamFn = (value) => {
    queryParams.set(key, value.toString());
    updateUrl(queryParams);
  };

  // Remove the query param
  const removeValue: RemoveParamFn = () => {
    queryParams.delete(key);
    updateUrl(queryParams);
  };

  return [getValue(), setValue, removeValue];
};

export default useQueryParam;
