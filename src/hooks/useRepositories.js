import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = () => {

  const { data, loading, refetch } =  useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  })


  return { repositories: data ? data.repositories : null, loading, refetch  }
}

export default useRepositories