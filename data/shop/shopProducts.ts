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
            itchIo: "https://soliver.itch.io/minutes-to-midnight",
          },
        },
      ],
    },
    {
      name: "Oliver Smock",
      slug: "mtm",
      links: {
        twitter: "https://twitter.com/oli_writes",
      },
      products: [
        {
          name: "Minutes to Midnight Playbooks",
          slug: "playbooks",
          type: ProductTypeEnum.Resource,
          description: "Création de personnages pour Minutes to Midnight",
          license: License.Copyright_Oliver_Smock,
          footer:
            "The content of the Playbooks is Copyright © 2021 Oliver Smock, and the translation by V-Jira is published with permission.",
          tags: ["mtm", "resources", "intro"],
          image: "https://cdn.pixabay.com/photo/2017/07/23/14/01/pocket-watch-2531472_960_720.png",
          links: {
            itchIo: "https://soliver.itch.io/minutes-to-midnight",
          },
        },
      ],
    },
    {
      name: "John Harper",
      slug: "bitd",
      links: {
        website: "https://bladesinthedark.com/"
      },
      products: [
        {
          name: "Blades in the Dark SRD",
          slug: "bitd-srd",
          type: ProductTypeEnum.SRD,
          description: "System reference document for Blades in the Dark",
          license: License.CC_BY_3,
          footer:
            "The contents of the SRD are available for use under the Creative Commons Attribution 3.0 license (CC BY 3.0). Blades in the Dark™ is a trademark of One Seven Design. The Forged in the Dark Logo is © One Seven Design, and is used with permission.",
          tags: ["blades", "srd"],
          image: "https://bladesinthedark.com/sites/default/files/inline-images/forged_in_the_dark_logo2_0.png",
          links: {
            itchIo: "https://johnharper.itch.io/blades-in-the-dark",
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
          name: "Charge SRD",
          slug: "charge-srd",
          type: ProductTypeEnum.SRD,
          description:
            "Power your next game with this condensed version of Charge RPG",
          license: License.CC_BY_4,
          footer:
            "Text by Fari RPGs under a Creative Commons Attribution 4.0 license (CC BY 4.0)",
          tags: ["charge-rpg", "srd"],
          image: "https://gyazo.com/a6eabc2383f01fa9e30be8c1d64596f2.png",
          links: {
            itchIo: "https://fari-rpgs.itch.io/charge-srd",
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
