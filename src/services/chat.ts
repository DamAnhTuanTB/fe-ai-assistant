import { getApi, postApi } from "./config/axios";

const chatService = {
  createNewChat: (body: { prompt: string }, isLogin: boolean) => {
    return postApi(
      isLogin
        ? "/chat-completion/create-new-chat"
        : "/chat-completion/public/create-new-chat",
      body
    );
  },
  continueChat: (body: { prompt: string; id: string }) => {
    return postApi("/chat-completion/continue-chat", body);
  },
  getDetailChat: (id: string) => {
    return getApi(`/chat-completion/get-detail-chat/${id}`);
  },
  getListTitleChat: () => {
    return getApi(`/chat-completion/get-list-title-chat`);
  },
};

export default chatService;
