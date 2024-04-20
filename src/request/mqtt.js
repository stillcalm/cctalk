import * as mqtt from "mqtt/dist/mqtt";

let isConnected = false;

export const createClient = (uuid, token) => {
  if (isConnected) {
    return Promise.reject("客户端已经连接");
  }

  const parsedToken = token.split(" ")[1];
  return new Promise((resolve, reject) => {
    const client = mqtt.connect("ws://127.0.0.1:8083/mqtt", {
      clientId: "mqtt_" + uuid,
      username: uuid,
      password: parsedToken,
      connectTimeout: 4000,
    });

    client.on("connect", () => {
      console.log("服务器连接成功");
      console.log(client.options.clientId);
      isConnected = true;
      resolve(client);
    });

    /*     client.on("message", (topic, message) => {
      const paredMes = JSON.parse(message.toString()) || {};
      console.log("收到消息：", topic, paredMes.content);

      store.commit("ADD_MESSAGE", {
        message: paredMes,
      });
    }); */

    client.on("error", (error) => {
      isConnected = false;
      reject(error);
    });

    client.on("reconnect", (error) => {
      console.log("正在重连:", error);
    });
  });
};

export const publish = (client, topic, message) => {
  return new Promise((resolve, reject) => {
    client.publish(topic, message, { qos: 1 }, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(topic, "发布成功", message);
      }
    });
  });
};

export const subscribe = (client, topic) => {
  return new Promise((resolve, reject) => {
    client.subscribe(topic, (error) => {
      if (error) {
        reject(error);
      } else {
        console.log("订阅成功", topic);
        resolve(topic, "订阅成功");
      }
    });
  });
};
