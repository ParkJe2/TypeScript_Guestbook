import React from "react";
import GuestbookItem from "./GuestbookItem";

interface ListProps {
  data: {
    id: string;
    createdAt: string;
    content: string;
    nickname: string;
  }[];
}

const GuestbookList: React.FC<ListProps> = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <GuestbookItem key={item.id} item={item} />
      ))}
    </>
  );
};
export default GuestbookList;
