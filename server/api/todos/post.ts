import {  todos } from '~/server/db/schema/todos';

export default defineEventHandler(async (event) => {
    try {
          // Get the database connection
        const db = useDb();
        
        // Read the body of the event
        const body = await readBody(event);



       // Check if the required 'id' and 'completed' fields are present in the body
    if (!body ) {
        console.error('Missing required fields in the event body');
        return; // Exit the function
    }



        // Insert the received 'body' data into the 'todos' table
        return await db.insert(todos).values(body);

    } catch (error) {
        console.error(error);
    }
});
