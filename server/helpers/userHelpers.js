const User = require("../model/userModel");
const Form = require("../model/incubationFormModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
module.exports = {
  addUser: (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const password = await bcrypt.hash(data.password, 10);

        await User.create({
          name: data.name,
          email: data.email,
          password: password,
        });
        resolve();
      } catch (err) {
        console.log(err);
        reject();
      }
    });
  },
  login: (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await User.findOne({ email: data.email });

        if (user) {
          const validate = await bcrypt.compare(data.password, user.password);

          if (validate) {
            console.log("call");
            const token = jwt.sign(
              {
                id: user._id,
                name: user.name,
                email: user.email,
                isSbmitted: user.isSbmitted,
              },
              "secret123"
            );

            resolve(token);
          } else {
            reject();
          }
        } else {
          reject();
        }
      } catch (err) {
        console.log(err);
      }
    });
  },
  addFormData: (data, usrId) => {
    return new Promise(async (resolve, reject) => {
      try {
        await Form.create({
          userId: usrId,
          status: "new",
          slot: "Not",
          name: data.name,
          phone: data.phone,
          state: data.state,
          city: data.city,
          email: data.email,
          lMark: data.lMark,
          Cname: data.Cname,
          teamBg: data.teamBg,
          products: data.products,
          solve: data.solve,
          solution: data.solution,
          proposition: data.proposition,
          revenue: data.revenue,
          busProp: data.busProp,
          type: data.type,
        });

        resolve();
      } catch (err) {
        console.log(err);
        reject();
      }
    });
  },
  findForm: (usrId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const formData = await Form.findOne({ userId: usrId });
        console.log(formData);
        if (formData) {
          resolve(formData);
        } else {
          reject();
        }
      } catch (err) {
        console.log(err);
      }
    });
  },
};
