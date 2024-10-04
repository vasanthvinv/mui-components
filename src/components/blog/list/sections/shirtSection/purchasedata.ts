interface Row {
  id: number;
  Items: string;
  Status: string;
  Assign: string;
  name: string;
  color: string;
}

export const rows: Row[] = [
  {
    id: 1,
    Items: "shirt",
    Status: "Initial",
    Assign:
      "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-1.webp",
    name: "Tamil Selvi",
    color: "yellow",
  },
  {
    id: 2,
    Items: "Tshirt",
    Status: "Pending",
    Assign:
      "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-5.webp",
    name: "Gokila vani",
    color: "grey",
  },
  {
    id: 3,
    Items: "Trouser",
    Status: "Completed",
    Assign:
      "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-3.webp",
    name: "Rani",
    color: "green",
  },
  {
    id: 4,
    Items: "Collar Shirt",
    Status: "Pending",
    Assign:
      "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-1.webp",
    name: "Tamil Selvi",
    color: "grey",
  },
  {
    id: 5,
    Items: "Collar Tshirt",
    Status: "Completed",
    Assign:
      "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-5.webp",
    name: "Gokila vani",
    color: "green",
  },
  {
    id: 6,
    Items: "Track Pant",
    Status: "Initial",
    Assign:
      "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-3.webp",
    name: "Rani",
    color: "yellow",
  },
];
