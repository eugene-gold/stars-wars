import React, { FC } from "react"

type SearchProps = {
  search: string,
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput: FC<SearchProps> = ({search, onSearch}) => {
 
    return (      
        <>
          <label htmlFor="search">Name Search</label>
          <input
            id='search'
            type='text'
            value={search}
            onChange={onSearch}
          />
        </>      
    );
  
}
