const nodemailer = require('nodemailer');

module.exports = class Mail {

  constructor(options) {
    this.options = Object.assign({
      verificationSubject: '请激活您的邮箱',
      verificationBody: '<p>你好 %username%，</p><p>感谢您注册%appname%</p><p>请点击以下链接激活你的账户</p><p><a href="%link%" target="_blank">%link%</a></p><p>如果上面的链接点击无效，请尝试将链接复制到浏览器地址栏访问。</p>',
      passwordResetSubject: '重置密码',
      passwordResetBody: '<p>你好 %username%，</p><p>您已经请求了重置密码，可以点击以下链接进行操作</p><p><a href="%link%" target="_blank">%link%</a></p><p>如果您没有请求重置密码，请忽略此邮件。</p><p>在您点击上面链接修改密码之前，您的密码将会保持不变。<p>'
    }, options || {});

    this.transporter = nodemailer.createTransport(this.options);
  }

  fillVariables(text, options) {
    text = text.replace(/%username%/ig, options.user.get('username'));
    text = text.replace(/%email%/ig, options.user.get('email'));
    text = text.replace(/%appname%/ig, options.appName);
    text = text.replace(/%link%/ig, options.link);
    return text;
  }

  sendVerificationEmail(options) {
    return this.sendMail({
      to: options.user.get('email'),
      subject: this.fillVariables(this.options.verificationSubject, options),
      html: this.fillVariables(this.options.verificationBody, options)
    });
  }

  sendPasswordResetEmail(options) {
    return this.sendMail({
      to: options.user.get('email'),
      subject: this.fillVariables(this.options.passwordResetSubject, options),
      html: this.fillVariables(this.options.passwordResetBody, options)
    });
  }

  sendMail(mail) {
    return new Promise((resolve, reject) => {
      // 使用smtp发送
      this.transporter.sendMail({
        to: mail.to,
        subject: mail.subject,
        html: mail.html || mail.text
      }, (error, info) => {
        if (error) {
          return reject(error);
        }
        resolve(info);
      });
    });
  }
};
