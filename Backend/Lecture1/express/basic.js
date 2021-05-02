




getUser(1, (user) => console.log('User ', user))

function getUser(id, callback) {
  setTimeout(callback, 2000)
}
