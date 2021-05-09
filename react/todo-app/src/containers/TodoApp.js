import * as React from 'react';
import { TodoForm } from './TodoForm.js';
import { TodoList } from './TodoList.js';

export function TodoApp()
{
    function useLocalStorageState(key, defaultValue){
        const [value, setValue] = React.useState( () => {
            const lsValue = window.localStorage.getItem(key);
            if(lsValue){
                return JSON.parse(lsValue);
            }
            else{
                return typeof defaultValue == 'function'? defaultValue(): defaultValue;
            }
        });
        React.useEffect( () => {
            console.log('Render');
            window.localStorage.setItem(key, JSON.stringify(value));
        }, [value, setValue, key]);
        return [value, setValue];
    }

    // Custom hook
    function useFetch(url){
        const [data, setData] = React.useState([]);
        React.useEffect( () => {
            (async function(){
                try{
                    const response = await fetch(url);
                    const data = await response.json();
                    setData(data);
                }catch(err){
                    console.error(err);
                }
            })();
        }, [url] );
        return data;
    }

    // task -> { name: '', completed: '' }
    const [tasks, setTasks] = useLocalStorageState('tasks', []);
    const [filter, setFilter] = useLocalStorageState('filter', 'all');
    const [lastId, setLastId] = useLocalStorageState('lastId', 0);
    const data = useFetch('https://jsonplaceholder.typicode.com/users/1/todos');

    const memoValue = React.useMemo( () => {
        return data.map( (item) => {
            return {index: item.id, name: item.title, completed: item.completed};
        } );
    }, [data] );

    React.useEffect( () => {
        if(tasks.length === 0){
            setLastId(memoValue.length + 1);
            setTasks(memoValue);
        }
    }, [memoValue, setLastId, setTasks, tasks] );

    function handleAdd(name){
        if( Boolean(name) ){
            setTasks( [...tasks, {index: Date.now(), name: name, completed: false}] );
        }            
    }

    return (
        <React.Fragment>
            <TodoForm onAdd={handleAdd}
                      filter={filter}
                      setFilter={setFilter}
                      isDataLoaded={memoValue.length >= 0}  />
            <TodoList tasks={tasks} setTasks={setTasks} filter={filter} />
        </React.Fragment>
    );
}
