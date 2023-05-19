import Task from "@/app/components/Task";
import {TaskType} from "@/app/tasks/page";

async function getTask(id: number) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((response) => response.json())
}

export default async function TaskID({params}: { params: { id: number } }) {
    const task = await getTask(params.id)

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <div className={"text-4xl"}>Tarefa</div>
            <Task title={task?.title ?? ""} completed={!!task?.completed}/>
        </main>
    )
}