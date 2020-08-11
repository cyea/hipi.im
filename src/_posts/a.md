---
category: hello
tags:
  - world
date: 2019-01-21
title: Hello, world!
vssue-title: Hello, world!
---

这是第一篇博文。

more 上面的内容是摘要，将显示在目录中。

<!-- more -->

## as

fasdasdasd

## 工时费

asdasd

## 工时费

asdasd

more 下面的内容只有浏览这篇文章时才会完全展示，不会显示在目录中。

## 如何快速使用

### 1. 拉取代码安装依赖

**这里使用`yarn`作为包管理器**

```bash
git clone https://github.com/cyea/email-bot.git
cd email-bot
yarn
```

### 2. 配置

#### ① 修改发送者邮箱账号密码敏感配置

新建`.env`文件 格式是跟`.env.example` 一样的 **填入自己的邮箱账号密码及邮件提供商**

```bash
NODE_ENV = production #正式环境精简代码所用
EmianService = outlook #邮件提供商 支持列表：https://nodemailer.com/smtp/well-known/
EamilAuth_user = xxxx@outlook.com #发送者邮箱地址
EamilAuth_pass = xxxxxxxxx # smtp 授权码
```

#### ② 修改其他不敏感配置

修改`config/index.js`里的配置文件

```js
const { env } = process
module.exports = {
  ONE: 'http://wufazhuce.com/', // ONE的web版网站
  MOJI_HOST: 'https://tianqi.moji.com/weather/china/', // 中国墨迹天气url,
  EmianService: env.EmianService, // 发送者邮箱厂家
  EamilAuth: {
    // 发送者邮箱账户用户名及密码
    user: env.EamilAuth_user,
    pass: env.EamilAuth_pass,
  },
  EmailFrom: 'yuyehack@outlook.com', // 发送者昵称与邮箱地址
  EmailSubject: '一封暖暖的小邮件', // 邮件主题
  /**
   * @description: 收信人详细
   */
  EmailToArr: [
    {
      TO: 'yuyehack@gmail.com', // 接收者邮箱地址
      CITY: 'jiangsu', // 墨迹天气链接末尾城市代码
      LOCATION: 'pukou-district', // 墨迹天气链接末尾详细地区代码
    },
    {
      TO: 'yuyehack@qq.com',
      CITY: 'jiangsu',
      LOCATION: 'kunshan',
    },
  ],
  //每日发送时间
  SENDDATE: '58 15 8 * * *',
}
```
