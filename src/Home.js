import {Context} from "./context";

import {useCallback, useEffect, useState} from "react";
import {Checkbox, FormControlLabel} from "@mui/material";

import Accordion from "./components/Accordion";
import NewsStroke from "./components/NewsStroke";
import Popup from "./components/Popup";
import {useNews} from "./hooks/useNews";

const todosData = [
  {
    "id": 1673966707541,
    "date": '2023-01-26T10:12:50.5000',
    "open": false,
    "tasks": [
      {
        "id": 1,
        "title": "Visit David",
        "descr": "Lorem Ipsum Dolor Sit met...",
        "color": "#FF0000",
        "checked": false
      },
      {
        "id": 2,
        "title": "Goceries For Dinner",
        "descr": "Lorem Ipsum Dolor Sit met...",
        "color": "#366EFF",
        "checked": false
      },
      {
        "id": 3,
        "title": "Fix Dad’s iPad",
        "descr": "Lorem Ipsum Dolor Sit met...",
        "color": "#FFEB33",
        "checked": true
      }
    ]
  },
  {
    "id": 1673966709206,
    "date": '2023-01-21T10:12:50.5000',
    "checked": false,
    "tasks": []
  },
  {
    "id": 1673963333341,
    "date": '2023-01-20T10:12:50.5000',
    "open": true,
    "tasks": [
      {
        "id": 1,
        "title": "Visit David",
        "descr": "Lorem Ipsum Dolor Sit met...",
        "color": "#FF0000",
        "checked": false
      }
    ]
  },
  {
    "id": 1673966704541,
    "date": '2023-01-19T10:12:50.5000',
    "open": true,
    "tasks": [
      {
        "id": 1,
        "title": "Visit David",
        "descr": "Lorem Ipsum Dolor Sit met...",
        "color": "#FF0000",
        "checked": false
      }
    ]
  },
  {
    "id": 1673966704341,
    "date": '2023-01-07T10:12:50.5000',
    "open": false,
    "tasks": [
      {
        "id": 1,
        "title": "Visit David",
        "descr": "Lorem Ipsum Dolor Sit met...",
        "color": "#FF0000",
        "checked": false
      },
      {
        "id": 2,
        "title": "Goceries For Dinner",
        "descr": "Lorem Ipsum Dolor Sit met...",
        "color": "#366EFF",
        "checked": false
      },
    ]
  },
  {
    "id": 1673966723341,
    "title": "ddd",
    "open": false,
    "tasks": [
      {
        "id": 1,
        "title": "Visit David",
        "descr": "Lorem Ipsum Dolor Sit met...",
        "color": "#FF0000",
        "checked": false
      },
      {
        "id": 2,
        "title": "Goceries For Dinner",
        "descr": "Lorem Ipsum Dolor Sit met...",
        "color": "#366EFF",
        "checked": false
      },
    ]
  },
  {
    "id": 1673966723431,
    "title": "ddd",
    "open": false,
    "tasks": [
      {
        "id": 1,
        "title": "Visit David",
        "descr": "Lorem Ipsum Dolor Sit met...",
        "color": "#FF0000",
        "checked": false
      },
      {
        "id": 2,
        "title": "Goceries For Dinner",
        "descr": "Lorem Ipsum Dolor Sit met...",
        "color": "#366EFF",
        "checked": false
      },
    ]
  },
  {
    "id": 1673222723431,
    "title": "ddd",
    "open": false,
    "tasks": [
      {
        "id": 1,
        "title": "Visit David",
        "descr": "Lorem Ipsum Dolor Sit met...",
        "color": "#FF0000",
        "checked": false
      },
      {
        "id": 2,
        "title": "Goceries For Dinner",
        "descr": "Lorem Ipsum Dolor Sit met...",
        "color": "#366EFF",
        "checked": false
      },
    ]
  },
  {
    "id": 1673222755431,
    "title": "ddd",
    "open": false,
    "tasks": [
      {
        "id": 1,
        "title": "Visit David",
        "descr": "Lorem Ipsum Dolor Sit met...",
        "color": "#FF0000",
        "checked": false
      },
      {
        "id": 2,
        "title": "Goceries For Dinner",
        "descr": "Lorem Ipsum Dolor Sit met...",
        "color": "#366EFF",
        "checked": false
      },
    ]
  },
  {
    "id": 1673221235431,
    "title": "ddd",
    "open": false,
    "tasks": [
      {
        "id": 1,
        "title": "Visit David",
        "descr": "Lorem Ipsum Dolor Sit met...",
        "color": "#FF0000",
        "checked": false
      },
      {
        "id": 2,
        "title": "Goceries For Dinner",
        "descr": "Lorem Ipsum Dolor Sit met...",
        "color": "#366EFF",
        "checked": false
      },
    ]
  },
]

const Home = () => {
  const {isLoading, newsData} = useNews()
  const [todos, setTodos] = useState(todosData)
  const [checkToday, setCheckToday] = useState(false)
  const [newsShow, setNewsShow] = useState(true)

  useEffect(() => {
    const raw = localStorage.getItem('todos')
    const checkToday = localStorage.getItem('checkToday')
    if (raw) {
      setTodos(JSON.parse(raw))
    }

    if (checkToday) {
      setCheckToday(Boolean(JSON.parse(checkToday)))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    localStorage.setItem('checkToday', JSON.stringify(checkToday))
  }, [todos, checkToday])

  const toggleTodo = useCallback(id => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.open = !todo.open
      }
      return todo
    }))
  }, [todos])

  const toggleTask = useCallback((id, taskId) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.tasks.map(task => {
            if (task.id === taskId) {
              task.checked = !task.checked
            }
            return task
          })
        }
        return todo
      })
    )
  }, [todos])

  const toggleToday = useCallback((e) => {
    setCheckToday(e.target.checked)
    if (e.target.checked) {
      setTodos(todosData.filter(todo => {
        return todo.date?.split('T')[0] === new Date().toISOString().split('T')[0]
      }))
    } else {
      setTodos(todosData)
    }
  }, [])

  const handleToggleNews = useCallback((e) => {
    setNewsShow(e.target.checked)
  }, [])

  return (
    <Context.Provider value={{
      toggleTodo,
      toggleTask
    }}>
      <div>
        <div className='todo'>
          <div className='todo__top'>
            <div className='title'>
              <h2 className='title__name'>To Do</h2>
              <Popup handleToggleNews={handleToggleNews} newsShow={newsShow}/>
            </div>
            <FormControlLabel
              className='todayTasks'
              control={<Checkbox checked={checkToday}/>}
              label="Today Tasks:"
              onChange={toggleToday}
            />
          </div>
          <Accordion todos={todos}/>
        </div>
        {isLoading ?
          <div>Loading...</div>
          :
          <>{newsShow && <NewsStroke newsData={newsData}/>}</>
        }
      </div>
    </Context.Provider>
  );
}

export default Home;
