import { eq } from 'drizzle-orm';
import {  todos } from '~/server/db/schema/todos';

export default defineEventHandler(async (event) => {
 try {
   // Read the body of the event
    const body = await readBody(event);

    // Ensure the 'id' field is present in the body
    if (!body || body.id === undefined) {
        console.error('Missing the ID field in the event body');
        return; // Exit the function
    }

    // Get the database connection
    const db = useDb();

    // Delete a record from the 'todos' table based on the received 'id'
    await db.delete(todos).where(eq(todos.id, body.id));

    // Log that the deletion was successful
    console.log('Todo item deleted successfully');
    return; // Exit the function
 } catch (error) {
console.error(error)
 }
});
