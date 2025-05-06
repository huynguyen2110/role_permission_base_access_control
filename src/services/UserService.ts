import { users } from '~/users'

const list = () => {
  return users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      rank: user.rank,
    }
  })
}

export default {list}