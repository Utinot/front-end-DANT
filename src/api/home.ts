import { isAuthenticate } from "./auth";
import { instance } from "./instance";

const dataAuth = isAuthenticate();

export const listCandidate = () => {
  const url = `/index/list`;
  return instance.get(url);
};

export const detailCan = (id: any) => {
  const url = `employer/detail/${id}`;
  return instance.get(url);
};

export const addNews = (data: any) => {
  const url = `/employer/store`;
  return instance.post(url, data);
};

export const showNews = () => {
  const url = `/employer/show/${dataAuth.token}`;
  return instance.get(url);
};

export const removeShowNews = (id: any) => {
  const url = `/employer/delete/${id}`;
  return instance.delete(url);
};

export const listNews = () => {
  const url = `/employer/create/${dataAuth.token}`;
  return instance.get(url);
};

// export const createNews = (data: any) => {
//   const url = `/employer/store`;
//   return instance.post(url, data);
// };

export const createNews = (data: any) => {
  return instance.post(`/employer/store`, data, {
    headers: {
      Authorization: `Bearer ${dataAuth.token}`
    }
  });
}


export const listNewsemp = () => {
  const url = `/employer/index/${dataAuth.token}`;
  return instance.get(url);
};
export const searchJob = () => {
  const url = `/index/keyword`;
  return instance.get(url);
};


// export const updateNews = (id: any) => {
//   const url = `/employer/update/${id}`; 
//   return instance.put(url,data);
// };

export const editNews = (id: any) => {
  const url = `/employer/edit/${id}`;
  return instance.get(url);
};
export const ListCv = () => {
  const url = `/employer/cv/index`
  return instance.get(url, {
    headers: {
      Authorization: `Bearer ${dataAuth.token}`
    }
  });
}
