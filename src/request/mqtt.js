import * as mqtt from "mqtt/dist/mqtt";

export const createClient = async (uuid, passwordHash) => {
  return new Promise((resolve, reject) => {
    const client = mqtt.connect("ws://127.0.0.1:8083/mqtt", {
      clientId: "mqtt_" + uuid,
      username: uuid,
      password: passwordHash,
    });

    client.on("connect", () => {
      console.log("服务器连接成功");
      console.log(client.options.clientId);
      resolve(client);
    });
    client.on("error", (error) => {
      reject(error);
    });
  });
};

