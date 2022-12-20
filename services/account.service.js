const bcrypt = require("bcrypt");
const account = require("../models/Account");
const registerService = async (username, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = await bcrypt.hashSync(password, salt);
      const isExsitAccount = await account.findOne({ username: username });
      if (!isExsitAccount) {
        await account.create({
          username: username,
          password: hash,
        });
        resolve(true);
      }
      resolve(false);
    } catch (e) {
      reject(e);
    }
  });
};
const loginService = async (username, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const isExsitAccount = await account.findOne({ username: username });
      if (!isExsitAccount) resolve(false);

      await bcrypt.compare(
        password,
        isExsitAccount.password,
        function (err, result) {
          if (result) resolve(true);
          else resolve(false);
        }
      );
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  registerService: registerService,
  loginService: loginService,
};
