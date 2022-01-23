import { jsondata } from "./data"
export const Callgetapi = async () => {
    return jsondata
}

export const Callgetapibyid = async (id) => {
    const resp = jsondata.find(val => val.id === +id.id)
    return resp
}