

const getHonePage = (request, response) => {
  response.send("Hello worlddd!")
}

const getTemplate = (request, response) => {
  response.render('sample.ejs')
}

export { getHonePage, getTemplate}