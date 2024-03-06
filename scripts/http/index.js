import { showToast, wxLogin } from "../uni-app/index.js";
import { refreshToken } from "../../api/login.js";

const REQUEST_URLS = {
    login: "login",
};

/**
 * 请求code码
 */
const REQ_CODES = {
    "00": "",
    "01": "",
    11: "",
    12: "",
    13: "",
    14: "",
};

/**
 * 发送请求
 */
export const request = (params) => {
    console.log("params:", params);
    // 遮罩
    uni.showLoading({ mask: true });
    return new Promise((resolve, reject) => {
        uni.request({
            url: config.base_url + REQUEST_URLS[params.url],
            method: params.method || "POST",
            data: params.data || {},
            header: {
                "content-type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
                token: uni.getStorageSync("minitoken"),
                session: uni.getStorageSync("minisession"),
            },
            success(res) {
                console.log("res :>>", res);
                uni.hideLoading();
                if (res.data) {
                    let code = res.data.code;
                    let msg = res.data.msg;
                    if (code == "00") {
                        resolve(res.data);
                    } else if (code == "01" || code == "11") {
                        if (msg) {
                            showToast(msg, "none");
                        } else {
                            showToast("网络崩溃，请重试", "none");
                        }
                    } else if (code == "12") {
                        // token过期，刷新token
                        resolve(refreshToken(params));
                    } else if (code == "13" || code == "14") {
                        // session过期，返回登录页面
                        uni.reLaunch({
                            url: "/pagesA/login/login",
                        });
                    }
                } else {
                    showToast("网络崩溃，请重试", "none");
                    reject();
                }
            },
            fail(err) {
                uni.hideLoading();
                showToast("网络崩溃，请重试", "none");
                reject(err);
            },
            complete() {
                uni.stopPullDownRefresh();
            },
        });
    });
};
