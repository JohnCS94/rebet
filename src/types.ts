export type Player = {
  name: string;
  avatar: string;
  waiting: boolean;
};

export type Team = {
  name: string;
  avatar: string;
};

export enum League {
  NBA = "NBA",
  NFL = "NFL",
  MLS = "MLS",
}

export const Teams = {
  [League.NBA]: [
    {
      key: "LAL",
      name: "Los Angeles Lakers",
      avatar: "",
    },
    {
      key: "BOS",
      name: "Boston Celtics",
      avatar: "",
    },
  ],
  [League.NFL]: [
    {
      key: "DAL",
      name: "Dallas Cowboys",
      avatar: "",
    },
    {
      key: "CIN",
      name: "Cincinnati Bengals",
      avatar: "",
    },
  ],
};
