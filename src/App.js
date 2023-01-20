import {QueryClient, QueryClientProvider} from "react-query";

import Home from "./Home";

import './App.scss';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home/>
    </QueryClientProvider>
  );
}

export default App;
