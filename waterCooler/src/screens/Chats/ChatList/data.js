const imgAvatar = require('../../../assets/images/avatar-fake.png')

const exampleData = {
  avatar: imgAvatar,
  name: 'Peter Traeg',
  dateLastUpdate: 'Today 8:25 AM',
  lastChat: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
}

const data = [...Array(10).keys()].map((item, idx) => ({
  ...exampleData,
  id: idx + 1,
}))

export default data
