"use client"

import Task from "@/app/components/Task";
import {useEffect, useState} from "react";
import {TaskType} from "@/app/tasks/page";

export default function TaskID({params}: { params: { id: number } }) {
    const [task, setTask] = useState<TaskType>()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`).
        then((response) => response.json()).
        then((data) => setTask(data))
    }, [params.id])


    return (
        <Task title={task?.title ?? ""} completed={!!task?.completed} />
    )
}