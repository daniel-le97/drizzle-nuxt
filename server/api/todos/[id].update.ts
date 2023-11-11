import { eq } from "drizzle-orm";
import { insertTodoSchema, todos } from '~/server/db/schema/todos';

export default defineEventHandler(async (event) => {
try {
   // Get the database connection
    const db = useDb();

    // Read the body of the event
    const body = await readBody(event);

    // Check if the required 'id' and 'completed' fields are present in the body
    if (!body || body.id === undefined || body.completed === undefined) {
        console.error('Missing required fields in the event body');
        return; // Exit the function
    }

    // Update the 'todos' table based on the received body data
    await db.update(todos).set({ completed: body.completed }).where(eq(todos.id, body.id));

    // Log that the update was successful
    console.log('Todo item updated successfully');
    return; // Exit the function
} catch (error) {
console.error(error)
}
});
