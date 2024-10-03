
interface Datatype {
    labelroot: string;
    date: string;
    content: string;
    image: string;
    avatarUrl: string;
    color: string;
    title: string;
    data: {
      comments: string;
      views: string;
      shares: string;
    };
  }
  
  export const datas: Datatype[] = [
    {
      labelroot: "Draft",
      date: "20 Aug 2024",
      title: "The Future of Renewable Energy: Innovations and Challenges Ahead",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      image:
        "https://api-prod-minimal-v610.pages.dev/assets/images/cover/cover-1.webp",
      avatarUrl:
        "https://api-prod-minimal-v610.pages.dev/assets/images/avatar/avatar-1.webp",
      data: { comments: "1.95k", views: "9.91k", shares: "9.12k" },
      color: "primary",
    },
    {
      labelroot: "Published",
      date: "18 Aug 2024",
      title:
        "Exploring the Impact of Artificial Intelligence on Modern Healthcare",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      image:
        "https://api-prod-minimal-v610.pages.dev/assets/images/cover/cover-2.webp",
      avatarUrl:
        "https://api-prod-minimal-v610.pages.dev/assets/images/avatar/avatar-2.webp",
      data: { comments: "1.95k", views: "9.12k", shares: "6.98k" },
      color: "default",
    },
  ];
  