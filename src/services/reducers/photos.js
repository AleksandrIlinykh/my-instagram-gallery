import {
  PHOTOS_REQUEST,
  PHOTOS_SUCCESS,
  PHOTOS_ERROR,
} from "../actions/photos";

const photosInitialState = {
  data: [],
  isLoading: false,
  isLoaded: false,
  isError: false,
};

export const photosReducer = (state = photosInitialState, action) => {
  switch (action.type) {
    case PHOTOS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case PHOTOS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    }
    case PHOTOS_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default: {
      return state;
    }
  }
};
