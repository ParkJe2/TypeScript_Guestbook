import styled from "styled-components";

export const St = {
  ItemContainer: styled.div`
    border: 1px solid gray;
    border-radius: 10px;
    padding: 15px;
    margin-top: 20px;
    height: 75px;
    word-break: break-all;
    overflow: auto;
  `,
  ItemContent: styled.p`
    font-size: 18px;
  `,
  ItemNickname: styled.p`
    font-size: 15px;
    margin-top: 8px;
  `,
  ItemCreationTime: styled.p`
    font-size: 13px;
    margin-top: 15px;
  `,
};
