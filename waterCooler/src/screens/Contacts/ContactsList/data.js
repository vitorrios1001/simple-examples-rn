const imgAvatar = require('../../../assets/images/avatar-fake.png')

const exampleData = {
  avatar: imgAvatar,
  name: 'Peter Traeg',
  describeContact: 'CEO',
}

const data = [...Array(10).keys()].map((item, idx) => ({
  ...exampleData,
  id: idx + 1,
}))

export default data
