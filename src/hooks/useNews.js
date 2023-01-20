import {useQuery} from "react-query";
import {NewsService} from "../services/news.service";

export const useNews = () => {
  const {isLoading, data: newsData} = useQuery('news list', () => NewsService.getAll(), {
    onError: error => {
      alert(error.message)
    },
    select: ({data}) => {
      return data
    }
  })

  return {isLoading, newsData}
}