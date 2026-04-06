import { useQuery } from '@tanstack/react-query';
import { memo, useCallback, useEffect, useState } from 'react';
import AutocompleteV2 from '@components/autocomplete/Autocomplete.v2';

type SearchAutoCompleteProps = {
  storeId: string;
  setQuery: (q: string) => void;
  query: string;
  placeholder: string;
  getQueryOptions: (autocompleteQuery: string, storeId: string) => any;
};

function AutocompleteContainer({
  storeId,
  setQuery,
  query,
  placeholder,
  getQueryOptions,
}: SearchAutoCompleteProps) {
  const [autocompleteQuery, setAutocompleteQuery] = useState('');

  const { data, isPending } = useQuery(getQueryOptions(autocompleteQuery, storeId));

  const selectOneItemForSearch = useCallback((value: string) => {
    setQuery(value);
    setAutocompleteQuery(value);
  }, []);

  const onChangeQuery = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAutocompleteQuery(e.target.value);
    setQuery(e.target.value);
  }, []);

  useEffect(() => {
    if (query !== autocompleteQuery) {
      setAutocompleteQuery(query);
    }
  }, [query, autocompleteQuery]);

  return (
    <AutocompleteV2
      placeholder={placeholder}
      selectOneItemForSearch={selectOneItemForSearch}
      size="medium"
      value={autocompleteQuery}
      onChange={onChangeQuery}
      data={data as any[]}
    />
  );
}

export default memo(AutocompleteContainer);
