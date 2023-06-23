import axios from "axios";
interface params {
  pageSize?: number;
  current?: number;
  status?: 1 | 2 | undefined;
  tick?: string;
}
interface postParams {
  supply?: number;
  totalMint?: number;
  maxMint?: number;
  tick?: string;
  name?: string;
  contract?: string;
  price?: number;
}
export const add = (params: postParams) => {
  return axios({
    method: "POST",
    url: "http://121.196.238.114:3088/api/mint",
    data: params,
  });
};
export const getList = (params: params) => {
  return axios({
    method: "GET",
    url: "http://121.196.238.114:3088/api/mint",
    params,
  });
};
