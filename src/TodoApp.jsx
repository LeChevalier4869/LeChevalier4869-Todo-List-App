import DashBoard from './components/DashBoard'
import FormAddTodo from './components/FormAddTodo'
import TodoContainer from './components/TodoContainer'
import useTodo from './hooks/useTodo'

function TodoApp() {
    const {isLoading} = useTodo();
    // const [data, setData] = useState();
    // const [isLoading, setIsLoading] = useState(true);
    // const [trigger, setTrigger] = useState(false);
    // const apiUrl = 'http://localhost:8000/todos';

    // useEffect( () => {
    //     fetch(apiUrl)
    //     .then(res => res.json())
    //     .then(data => {
    //         setData(data)
    //         setIsLoading(false);
    //         console.log(data);
    //     });
    // }, [trigger])

    // const handleAdd = (newItem) => {
    //     fetch(apiUrl, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(newItem)
    //     })
    //         .then(res => setTrigger(prv=>!prv))
    // }
    
    // const handleEdit = () => {

    // }

    // const handleDel = () => {

    // }

    if(isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <div class="todo-app">
                {/* <DashBoard task={data.length} />
                <FormAddTodo hdlAdd={handleAdd} />
                <TodoContainer 
                    data={data}  
                  hdlDel={handleDel}
                 hdlEdi={handleEdit}
                /> */}
                <DashBoard />
                <FormAddTodo />
                <TodoContainer />
            </div>
            <div className="git-repo">
                <h4>Link to git repo:</h4>
                <a 
                    href="https://github.com/LeChevalier4869/Todo-List-App-components"
                    target="_blank"
                >Todo List App V.0.0.1</a>
            </div>
        </>
    );
}

export default TodoApp;