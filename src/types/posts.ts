export type Post = {
  id: string;
  title: string;
  subTitle: string;
  body: HTMLElement;
  thumbnail: {
    url: string;
  };
  categories: [
    {
      id: string;
      name: string;
    }
  ];
  publishedAt: Date;
};
