import React from "react";

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
    <div>
      <p style={{ fontWeight: "bold" }}>작성 시간: {new Date(item.createdAt).toLocaleString()}</p>
      <p>내용: {item.content}</p>
      <p>작성자: {item.nickname}</p>
    </div>
  );
};

export default GuestbookItem;
