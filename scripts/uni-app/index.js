/**
 * 提示框 - 全局
 * @param {string} title toast标题
 * @param {string} icon
 * @param {string} mask
 * @param {string} duration
 */
export const showToast = ({ title, icon, mask, duration }) => {
    mask = mask || true;
    duration = duration || 2000;
    uni.showToast({ title, icon, mask, duration });
};

/**
 * 微信登录凭证
 * @param {string} provider
 * @return Promise
 */
export const wxLogin = (provider = "weixin") => {
    // 遮罩
    uni.showLoading({ mask: true });
    return new Promise((resolve, reject) => {
        uni.login({
            provider,
            success(res) {
                resolve(res);
            },
            fail(err) {
                reject(err);
            },
            complete() {
                uni.hideLoading();
            },
        });
    });
};
