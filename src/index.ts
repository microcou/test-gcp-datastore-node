import { Datastore } from "@google-cloud/datastore";

const DATASTORE_NAMESPACE = "test";
const TASKS_COLLECTION = "tasksxx";

const datastore = new Datastore();

run().catch(console.error);

async function run() {
	await saveTask("task1", { description: "Buy milk" });
	await saveTask("task2", { description: "Learn datastore" });
	const task = await fetchTask("task1");
	console.log(task);
}

async function saveTask(taskId: string, data: object) {
	const taskKey = computeTaskKey(taskId);
	const task = { key: taskKey, data };
	await datastore.save(task);
	// To retrieve the default generated id:
	// console.log("save res", res[0].mutationResults[0].key);
}

async function fetchTask(taskId: string) {
	const taskKey = computeTaskKey(taskId);
	const [entity] = await datastore.get(taskKey);
	const task = { ...entity, id: entity[Datastore.KEY].name, path: entity[Datastore.KEY].path };
	delete task[Datastore.KEY];
	return task;
}

function computeTaskKey(taskId: string) {
	return datastore.key({ namespace: DATASTORE_NAMESPACE, path: [TASKS_COLLECTION, taskId] });
}
