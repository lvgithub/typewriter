/**
 * 本函数的作用是模拟GPT 聊天对话流的效果
 * @param {*} param
 * @returns
 */
export const typewriter = ({ msg, index = 0, maxTimeout = 50, minTimeout = 50, callback }) => {
    if (index == msg.length) {
        return;
    }
    const body = {
        msg,
        index,
        maxTimeout,
        minTimeout,
        callback,
    };
    // 开始读取多媒体
    const mediaReg = /src=/;
    // 多媒体读取结束
    const mediaEndReg = /\/>/;
    const startIndex = index - 6;
    const lastText = msg.substring(startIndex, index);
    callback(msg.substring(1, index));
    index++;
    if (mediaReg.test(lastText)) {
        typewriter({ ...body, index, minTimeout: 0 });
    } else if (mediaEndReg.test(lastText) && minTimeout == 0) {
        typewriter({ ...body, index, minTimeout: body.maxTimeout });
    } else {
        setTimeout(() => {
            typewriter({ ...body, index });
        }, minTimeout);
    }
};


