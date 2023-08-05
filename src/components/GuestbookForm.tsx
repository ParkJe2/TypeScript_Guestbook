import React, { useState } from "react";

interface FormProps {
  onSubmit: (data: { nickname: string; content: string }) => void;
}

const GuestbookForm: React.FC<FormProps> = ({ onSubmit }) => {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nickname || !content) {
      alert("모든 데이터를 입력해주세요");
      return;
    }

    if (typeof nickname !== "string" || typeof content !== "string") {
      alert("닉네임과 내용은 문자로만 작성 가능합니다.");
      return;
    }

    if (nickname.length < 2 || nickname.length > 10) {
      alert("닉네임은 2자 이상 10자 이하로 입력가능합니다.");
      return;
    }

    if (content.length < 10 || content.length > 1000) {
      alert("내용은 10자 이상 1000자 이하로 입력가능합니다.");
      return;
    }

    onSubmit({ nickname, content });
    setNickname("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder="닉네임을 입력해주세요"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용을 입력해주세요"
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default GuestbookForm;
