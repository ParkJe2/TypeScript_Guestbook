import styled from "styled-components";

export const St = {
  FormContainer: styled.div`
    width: 100%;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #d8d9da;
    border-radius: 5px;
  `,
  NicknameForm: styled.input`
    height: 35px;
    border: none;
    outline: none;
    margin-left: 3.125rem;
    border-radius: 5px;
    padding-left: 10px;
    margin-bottom: 10px;
  `,
  ContentForm: styled.textarea`
    width: 80%;
    height: 100px;
    border: none;
    outline: none;
    margin-left: 3.125rem;
    padding-top: 10px;
    padding-left: 10px;
    border-radius: 5px;
  `,
  AddBtn: styled.button`
    width: 45px;
    height: 30px;
    border: none;
    outline: none;
    margin-left: 10px;
    vertical-align: 7px;
    border-radius: 5px;
  `,
};
