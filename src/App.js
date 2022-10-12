import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Quizes from './components/Quizes/Quizes';
import Main from './layouts/Main';
import Questions from './components/Questions/Questions';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element:<Home></Home>
        },
        {
          path: '/quizes',
          loader: async ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Quizes></Quizes>,
          
        },
        {
          path: '/statistics',
          loader: async ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Statistics></Statistics>
        },
        {
          path: '/blog',
          element:<Blog></Blog>
        },
        {
          path: '/quizes/:questionId',
          loader: async ({ params }) =>
          {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.questionId}`)
          },
          element:<Questions></Questions>,
        }
      ]
    }
  ])
  
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
