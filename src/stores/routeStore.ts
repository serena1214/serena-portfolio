import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum RouteNames {
  home = "",
  about = "about",
  projects = "projects",
  visual = "visual",
  video = "video",
  contact = "contact",
}

export interface RouteState {
  route: RouteNames;
}

const initialState: RouteState = {
  route: RouteNames.projects,
};

export const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    setRoute: (state, action: PayloadAction<RouteNames>) => {
      state.route = action.payload;
    },
  },
});

export const { setRoute } = routeSlice.actions;
