import { isAuthenticate } from "./auth";
import { httpOptions, instance } from "./instance"
// const { token } = isAuthenticate();

export const listCandidate = () => {
    const url = `/index/list`
    return instance.get(url)
}
export const detailCan = (id: any) => {
    const url = `employer/detail/${id}`
    return instance.get(url)
}
export const addNews = (data: any) => {
    const url = `/employer/store`
    return instance.post(url, data)
}
export const showNews = () => {
    const url = `/employer/show/`
    return instance.get(url)
}
export const removeShowNews = (id: any) => {
    const url = `/employer/delete/${id}`
    return instance.delete(url)
}
export const listNews = () => {
    const url = `/employer/create`
    return instance.get(url, httpOptions)
}
export const createNews = (data: any) => {
    const url = `/employer/store`
    return instance.post(url, data)
}
export const listNewsemp = () => {
    const url = `/employer/index`
    return instance.get(url, httpOptions)
}