import { useState } from "react";
import styled from "styled-components";
import { MyTabs } from "./Tabs/MyTabs";
import { TabContents } from "./Tabs/TabContents";

export const Recipe = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <Container>
      <Title>Recipes</Title>
      <SearchBox>
        <input
          type="text"
          placeholder="Search recipes"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <button>Search</button>
      </SearchBox>
      <MyTabs
        tabs={TabContents.map((tab) => ({
          title: tab.title,
          children: tab.children,
        }))}
      />
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  input {
    width: 50%;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-right: 0.5rem;
  }

  button {
    background-color: #008cff;
    color: #fff;
    border-radius: 4px;
    padding: 0.5rem;
    cursor: pointer;
  }
`;
