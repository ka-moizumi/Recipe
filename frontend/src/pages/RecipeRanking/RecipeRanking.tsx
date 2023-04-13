import { useEffect, useState } from "react";
import styled from "styled-components";

interface Recipes {
  rank: number;
  recipeTitle: string;
  foodImageUrl: string;
  recipeUrl: string;
}

type RecipeResponse = {
  result: Array<Recipes>;
};

type RecipeRankingProps = {
  category: number;
};

export const RecipeRanking = ({ category }: RecipeRankingProps) => {
  const [recipes, setRecipes] = useState<Recipes[]>([]);

  //レシピを取得
  const fetchRecipes = async () => {
    const response = await fetch(
      `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=${process.env.REACT_APP_RAKUTEN_APP_ID}&categoryId=${category}`
    );
    const data: RecipeResponse = await response.json();
    console.log(data.result);

    setRecipes(data.result);
  };

  useEffect(() => {
    fetchRecipes();
  }, [category]);

  return (
    <RecipeList>
      {recipes ? (
        recipes.map((recipe) => (
          <RecipeItem key={recipe.rank}>
            <Image src={recipe.foodImageUrl} alt={recipe.foodImageUrl} />
            <RecipeTitle>{recipe.recipeTitle}</RecipeTitle>
            <RecipeUrl
              href={recipe.recipeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              レシピを見る
            </RecipeUrl>
          </RecipeItem>
        ))
      ) : (
        <p>時間を空けてタブを選び直して下さい。</p>
      )}
    </RecipeList>
  );
};

const RecipeList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const RecipeItem = styled.li`
  list-style: none;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const RecipeTitle = styled.h2`
  font-size: 1.5rem;
  margin: 1rem;
`;

const RecipeUrl = styled.a`
  display: block;
  text-align: center;
  margin: 1rem;
  color: #333;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
`;
