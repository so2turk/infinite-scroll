import fetch from 'node-fetch'

const resolvers = {
  Query: {
    getUser: async (_, { gender = 'all' }) => {
      const response = await fetch(`https://randomuser.me/api/?gender=${gender}`);
      const data = await response.json();
      return data.results;
    },
    
    getUsers: async (_, { people = 1, gender = 'all' }) => {
      const response = await fetch(`https://randomuser.me/api/?results=${people}&gender=${gender}`);
      const data = await response.json();
      return data.results;
    }
  }
}

export default resolvers