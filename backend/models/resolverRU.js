import fetch from 'node-fetch'

const resolvers = {
  Query: {
    getUser: async (_, { gender = 'all' }) => {
      const response = await fetch(`https://randomuser.me/api/?gender=${gender}`);
      const data = await response.json();
      return data.results;
    },
    
    getUsers: async (root, args) => {
      const response = await fetch(`https://randomuser.me/api/?results=${args.numOfUsers}&gender=${args.gender}`);
      const data = await response.json();
      return data.results;
    }
  }
}

export default resolvers