const Admin = require("../model/adminModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Form = require("../model/incubationFormModel");
module.exports = {
  login: (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const admin = await Admin.findOne({ email: data.email });
        if (admin) {
          const valid = await bcrypt.compare(data.password, admin.password);
          if (valid) {
            const token = jwt.sign(
              {
                id: admin._id,
                email: admin.email,
              },
              "secret123"
            );
            resolve(token);
          }
          reject();
        }
      } catch (er) {
        console.log(er);
      }
    });
  },
  getAllForms: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const AllForms = await Form.find();
        resolve(AllForms);
      } catch (err) {
        reject();
        console.log(err);
      }
    });
  },
  changeFormStatus: (data) => {
    return new Promise(async (resolve, reject) => {
      console.log("data is", data);
      try {
        await Form.updateOne(
          { _id: data.id },
          { $set: { status: data.status } }
        );
        resolve();
      } catch (err) {
        console.log(err);
      }
    });
  },
  getForm: (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const form = await Form.findOne({ _id: id });
        resolve(form);
      } catch (err) {
        console.log(err);
      }
    });
  },
};
