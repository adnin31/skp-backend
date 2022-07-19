const login = async (_, { email }, { dataSources }) => {
  return {
    token: 'lasiqyw89eyqj',
    userEmail: email
  }
}

export default { login }