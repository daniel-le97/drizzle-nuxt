import { eq } from 'drizzle-orm';
import { insertTodoSchema, todos } from '~/server/db/schema/todos';

export default defineEventHandler(async (event) => {

    // Read the body of the event
    const body = await readBody(event);

    // Ensure the 'id' field is present in the body
    if (!body || body.id === undefined) {
        console.error('Missing the ID field in the event body');
        return; // Exit the function
    }

    // Get the database connection
    const db = useDb();

    // Retrieve data from the 'todos' table based on the received 'id'
    const res = await db.select().from(todos).where(eq(todos.id, body.id));

    // Return the retrieved data
    return { res };
});
