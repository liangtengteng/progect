// 使用user.js对项目中与用户操作有关的
var user = {
    // 设置login方法，用来进行登录请求
    login: function(options) {
        $.ajax({
            type: 'post',
            url: LOGIN,
            data: {
                user_name: options.data.username,
                password: options.data.password,
            },
            success: function(res) {
                // 
                if (res.code === 200) {
                    options.success();
                } else {
                    options.failed();
                }
            }
        });
    },
    logout: function(options) {
        $.ajax({
            type: 'post',
            url: LOGOUT,
            success: function(res) {
                if (res.code === 200) {
                    options.success();
                } else {
                    options.failed();
                }
            }
        });
    }
};