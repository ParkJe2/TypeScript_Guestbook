import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../src/redux/config/configStore";
import { fetchGuestbook, addGuestbookItem } from "./redux/modules/guestbookSlice";
import GuestbookForm from "./components/GuestbookForm";
import GuestbookList from "./components/GuestbookList";

const App: React.FC = () => {
  const data = useSelector((state: RootState) => state.guestbook.data);
  const status = useSelector((state: RootState) => state.guestbook.status);
  const error = useSelector((state: RootState) => state.guestbook.error);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGuestbook());
  }, [dispatch]);

  const handleFormSubmit = async ({ nickname, content }: { nickname: string; content: string }) => {
    try {
      const currentTime = new Date().toISOString();
      await dispatch(addGuestbookItem({ nickname, content, createdAt: currentTime }));
    } catch (error) {
      console.error("방명록 작성 실패", error);
      alert("방명록 작성에 실패하였습니다.");
    }
  };

  return (
    <>
      <GuestbookForm onSubmit={handleFormSubmit} />
      {status === "loading" && <div>Loading...</div>}
      {status === "failed" && <div>Error: {error}</div>}
      <GuestbookList data={data} />
    </>
  );
};

export default App;
