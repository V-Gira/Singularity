import {
  IShop,
  IShopProductWithAuthor,
  License,
  ProductTypeEnum
} from "./types/IShopProduct";

export const shop: IShop = {
  authors: [
    {
      name: "V-Jira",
      slug: "singularity",
      links: {
        website: "https://github.com/V-Gira",
      },
      products: [
        {
          name: "Singularity : Introduction",
          slug: "intro",
          type: ProductTypeEnum.Resource,
          description: "Introduction à Singularity, une campagne pour Minutes to Midnight",
          license: License.CC_BY_4,
          footer:
            "Text by V-Gira under a Creative Commons Attribution 4.0 license (CC BY 4.0)",
          tags: ["singularity", "intro", "featured"],
          image: "https://cdn.pixabay.com/photo/2022/01/07/08/22/artificial-intelligence-6921404_960_720.jpg",
          links: {
            itchIo: "https://soliver.itch.io/minutes-to-midnight",
          },
        },
        {
          name: "Berlin",
          slug: "berlin",
          type: ProductTypeEnum.Flashpoint,
          description: "Flashpoint: Berlin",
          license: License.CC_BY_4,
          footer:
            "Text by V-Gira under a Creative Commons Attribution 4.0 license (CC BY 4.0)",
          tags: ["singularity", "flashpoint"],
          image: "https://cdn.pixabay.com/photo/2021/10/30/00/06/television-tower-6753284_960_720.jpg",
          links: {
          },
        },
      ],
    },
    {
      name: "Fari RPGs",
      slug: "fari-rpgs",
      links: {
        twitter: "https://farirpgs.com/twitter",
        website: "https://farirpgs.com",
      },
      products: [
        {
          name: "Charge RPG",
          slug: "charge-rpg",
          type: ProductTypeEnum.Game,
          description: "Ready to use generic RPG system.",
          license: License.CC_BY_4,
          footer:
            "Text by Fari RPGs under a Creative Commons Attribution 4.0 license (CC BY 4.0)",
          tags: ["charge-rpg", "game"],
          image: "https://gyazo.com/db461bac8eda79fa13f2b81dc03272e3.png",
          links: {
            itchIo: "https://fari-rpgs.itch.io/charge-rpg",
          },
        },
      ],
    },
  ],
};

export const shopProducts: Array<IShopProductWithAuthor> = shop.authors.flatMap(
  (a) => {
    return a.products.map((p): IShopProductWithAuthor => {
      return {
        ...p,
        author: a,
      };
    });
  }
);
