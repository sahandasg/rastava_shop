import {BaseConfig} from "../config";
import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("Token")
const instance = axios.create({
    baseURL: BaseConfig.domain,
    headers: {
        Authorization: `Token ${token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
});

/**
 *
 * @param method - "GET", "POST", "PUT", "DELETE", "PATCH",
 * @param url - request url like "/users"
 * @param queryParams - { [index: string]: string | number }
 * @param body - { [index: string]: string }
 * @returns instance - axios instance
 */
function httpService(
    method: string,
    url: string,
    queryParams?: { [index: string]: string | number },
    body?: { [index: string]: string }
) {
    return instance(url, {method, params: queryParams, data: body});
}

export {httpService};