import connection from "../config/database.mjs"

const getHomePage = (request, response) => {
  response.render('home.ejs')
}

const getTemplate = (request, response) => {
  response.render('sample.ejs')
}

const postCreateUser = (req, res) => {
  console.log("request body", req.body);
  res.send("create new user success")
}

export { getHomePage, getTemplate, postCreateUser}