import serviceAxios from "../index";

export const addFriendByUsername = (data) => {
  return serviceAxios({
    url: `/friend/addFriend`,
    method: "post",
    data,
  });
};

export const getFriendList = (data) => {
  return serviceAxios({
    url: `/friend/getFriends`,
    method: "get",
    params:{
      uuid: data.uuid,
    }
  });
}
