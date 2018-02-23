import values from 'lodash/values';

export const selectAllProjects = state =>{
  return (
 values(state.entitiesReducer.projects)
 );
};

export const selectAllCategories = state => {
  return (
    values(state.entitiesReducer.categories)
  );
};

export const selectRewards = rewards => {
  return (
    values(rewards)
  );
};

export const selectSearches = action => {
  return (
    values(action.searches)
  );
};
