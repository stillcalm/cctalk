import serviceAxios from "../index";

export const getChatsByChatUuid = (uuids) => {
  return serviceAxios({
    url: `/chats/getChatsByChatUuids`,
    method: "get",
    params: {
      uuids: uuids,
    },
  });
};
