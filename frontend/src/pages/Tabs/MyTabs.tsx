import React, { useState } from "react";
import { RecipeRanking } from "../RecipeRanking/RecipeRanking";
import { TabPanel } from "./TabPanel";

type TabsProps = {
  tabs: {
    title: string;
    children: number;
  }[];
};

export const MyTabs: React.FC<TabsProps> = (props) => {
  const { tabs } = props;
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const activeCategoryId = tabs[activeTab].children;

  return (
    <>
      {tabs.map((tab, index) => (
        <TabPanel
          key={tab.title}
          title={tab.title}
          isActive={index === activeTab}
          onClick={() => handleTabClick(index)}
        />
      ))}
      <RecipeRanking category={activeCategoryId} />
    </>
  );
};
