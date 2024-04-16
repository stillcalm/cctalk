import serviceAxios from "../index";

/**
 * @param {uuids} Array 用户 uuid 数组
 */
export const getChatsByChatUuid = (uuids) => {
  return serviceAxios({
    url: `/chats/getChatsByChatUuids`,
    method: "get",
    params: {
      uuids: uuids,
    },
  });
};

export const getMessagesByChatUuid = (chatUuid) => {
  return serviceAxios({
    url: `/chats/getHistoryMesByChatUuid`,
    method: "get",
    params: {
      chat_uuid: chatUuid,
    },
  });
};

export const sendMessage = (data) => {
  return serviceAxios({
    url: `/chats/sendMessage`,
    method: "post",
    data,
  });
};
