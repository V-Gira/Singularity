import Box from "@mui/material/Box";
import Typography, { TypographyProps } from "@mui/material/Typography";
import React from "react";
import { shopProducts } from "../../../../data/shop/shopProducts";
import { IShopProductWithAuthor } from "../../../../data/shop/types/IShopProduct";
import { ProductList } from "./ProductList";

export function MoreByAuthor(props: {
  authorSlug: string | undefined;
  count?: number;
  variant?: TypographyProps["variant"];
  excludeProduct?: IShopProductWithAuthor | undefined;
}) {
  const authorsGame = shopProducts.filter((g) => {
    return (
      props.authorSlug === g.author.slug &&
      g.slug !== props.excludeProduct?.slug
    );
  });

  const [firstGame] = authorsGame;

  const gamesToDisplay = authorsGame.slice(0, props.count);

  if (!firstGame) {
    return null;
  }

  return (
    <Box mb="2rem">
      <Box>
        <Typography variant={props.variant} gutterBottom>
          By {firstGame.author.name}
        </Typography>
      </Box>

      <ProductList products={gamesToDisplay} />
    </Box>
  );
}
