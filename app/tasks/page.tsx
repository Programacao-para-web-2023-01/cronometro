import Task from "@/app/components/Task";

export interface TaskType {
    userId: number
    id: number
    title: string
    completed:boolean
}

async function getTasks(): Promise<TaskType[]> {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos").
    then((response) => response.json())

    return data
}
export default async function TasksList() {
    const tasks = await getTasks()

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <div className={"text-4xl"}>Tarefas</div>
            {tasks.map(t => (
                <Task
                    key={t.id}
                    title={t.title}
                    completed={t.completed}
                />
            ))}
        </main>
    )
}
