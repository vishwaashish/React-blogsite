import { jsondata } from "./data";

export const wait = (duration = 0) =>
  new Promise((resolve) => setTimeout(resolve, duration));

export const Callgetapi = async () => {
  await wait(1000);

  return jsondata;
};

export const Callgetapibyid = async (id) => {
  await wait(1000);
  const resp = jsondata.find((val) => val.id === +id);
  return resp;
};
