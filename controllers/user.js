const User = require("../models/user");

const { setuser } = require("../services/auth");

async function handlesignup(req, res) {
  const { name, email, age,role, password } = req.body;
  await User.create({
    name: name,
    email: email,
    age: age,
    role:role,
    password: password,
  });
  res.render("login");
}

async function handlelogin(req, res) {
  const { email, password, message } = req.body;
  const details = await User.findOne({ email, password });
  console.log(details);
  if (!details)
    return res.render("login", { error: "invalid username or password" });
  const token = setuser(details);
  res.cookie("uid", token);
  return res.redirect("/userr/home");
}


async function hello(req, res) {
  const body = req.body;
  const Message = body.message;
  res.render("home", { message: "sawrqrwfwdfA" });
}
module.exports = {
    handlesignup,
    handlelogin,
    hello,
  };
  

// async function addno(req,res){
//     const {no1,no2} = req.body;
//     if (!no1 || !no2) {
//         return res.status(400).json({ error: 'Both numbers are required.' });
//       }
//       const result = parseFloat(no1) + parseFloat(no2);
//       const newresult=`the addition of ${no1} and  ${no2} is ->  ${result}`
//       console.log(newresult);
//       res.render("home",{result})
// }

