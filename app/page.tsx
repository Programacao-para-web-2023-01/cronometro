"use client"

import Task from "@/app/components/Task";
import {useEffect, useState} from "react";

interface TaskType {
    userId: number
    id: number
    title: string
    completed:boolean
}
export default function Home() {
    const [tasks, setTasks] = useState<TaskType[]>([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos").
        then((response) => response.json()).
        then((data) => setTasks(data))
    }, [])


    return (
      <main className="flex min-h-screen flex-col items-center p-24">
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
