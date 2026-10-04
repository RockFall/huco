import TaskBoard from "@/components/platform/TaskBoard";
import { getTasks } from "@/lib/dal";

export default async function TarefasPage() {
  const tasks = await getTasks();
  return <TaskBoard initialTasks={tasks} />;
}
