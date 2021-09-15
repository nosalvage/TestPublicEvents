// import { createSelector } from 'reselect';

export const selectData = state => state.entities.articles.data;

export const selectDetails = state => state.entities.articles.selected;

export const selectIsFetching = state => state.entities.articles.isFetching;

export const selectIsFetchingDetails = state =>
  state.entities.articles.isFetchingDetails;
