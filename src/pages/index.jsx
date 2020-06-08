import React from 'react';
import MainDashboard from "../containers/MainDashboard";

export default function MainPage(props = {}) {
    const {
        match: {
            params: {
                page,
                search
            }={}
        }={}
    } = props;
  return (
    <div>
      <MainDashboard page={page} searchString={search && search.split('+').join(' ')}/>
    </div>
  );
}
