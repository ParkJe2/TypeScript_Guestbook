import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface GuestbookState {
  data: {
    id: string;
    createdAt: string;
    content: string;
    nickname: string;
  }[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// 방명록 가져오기
export const fetchGuestbook = createAsyncThunk("guestbook/fetch", async () => {
  try {
    const api = await fetch(`${process.env.REACT_APP_SERVER_URL}`);
    const result = await api.json();
    return result;
  } catch (error) {
    throw error;
  }
});

interface AddGuestbookPayload {
  nickname: string;
  content: string;
  createdAt: string;
}

// 방명록 추가
export const addGuestbookItem = createAsyncThunk(
  "guestbook/add",
  async ({ nickname, content, createdAt }: AddGuestbookPayload) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nickname, content, createdAt }),
      });

      if (!response.ok) {
        throw new Error("방명록 등록 실패");
      }

      const api = await fetch(`${process.env.REACT_APP_SERVER_URL}`);
      const result = await api.json();
      return result;
    } catch (error) {
      throw error;
    }
  }
);

const guestbookSlice = createSlice({
  name: "guestbook",
  initialState: {
    data: [],
    status: "idle",
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGuestbook.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGuestbook.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchGuestbook.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unknown error";
      })
      .addCase(addGuestbookItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addGuestbookItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(addGuestbookItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default guestbookSlice.reducer;
