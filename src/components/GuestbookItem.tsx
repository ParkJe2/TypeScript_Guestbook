import React from "react";
import { St } from "./GuestbookItemStyle";

interface ItemProps {
  item: {
    id: string;
    createdAt: string;
    content: string;
    nickname: string;
  };
}

const GuestbookItem: React.FC<ItemProps> = ({ item }) => {
  return (
    <St.ItemContainer>
      <St.ItemContent>{item.content}</St.ItemContent>
      <St.ItemNickname>⏤ {item.nickname}</St.ItemNickname>
      <St.ItemCreationTime>
        작성 시간 : {new Date(item.createdAt).toLocaleString()}
      </St.ItemCreationTime>
    </St.ItemContainer>
  );
};

export default GuestbookItem;
