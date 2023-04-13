import React from "react";
import styled from "styled-components";

type TabPanelProps = {
  title: string;
  isActive: boolean;
  onClick: () => void;
};

const TabPanelButton = styled.button<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? "#ccc" : "#fff")};
  color: ${(props) => (props.isActive ? "#fff" : "#333")};
  border: none;
  padding: 8px;
  cursor: pointer;
`;

export const TabPanel: React.FC<TabPanelProps> = ({
  title,
  isActive,
  onClick,
}) => {
  return (
    <TabPanelButton isActive={isActive} onClick={onClick}>
      {title}
    </TabPanelButton>
  );
};
