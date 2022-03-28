import * as React from "react";
declare const SearchForm: ({ getSearch, search, updateSearch, btnText, }: {
    getSearch: (e: {
        preventDefault: () => void;
    }) => void;
    search: string;
    updateSearch: (e: {
        target: {
            value: React.SetStateAction<string>;
        };
    }) => void;
    btnText?: string | undefined;
}) => JSX.Element;
export default SearchForm;
