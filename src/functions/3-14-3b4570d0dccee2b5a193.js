import { app, InvocationContext } from "@azure/functions";
import * as https from "https";
import * as df from 'durable-functions';
import { ActivityHandler, OrchestrationContext, OrchestrationHandler } from 'durable-functions';

Algun codigo que funciona 13

export async function serviceBusQueueTrigger(message: unknown, context: InvocationContext): Promise<void> {
    context.log('Service bus queue function processed message:', message);
    const client = df.getClient(context);
    const instanceId: string = await client.startNew("3-14-3b4570d0dccee2b5a193", message);
    context.log(`Started orchestration with ID = '${instanceId}'.`);
}
app.serviceBusQueue('3-14-3b4570d0dccee2b5a193', {
    connection: 'connection',
    queueName: '3-14-3b4570d0dccee2b5a193',
    handler: serviceBusQueueTrigger,
    extraInputs: [df.input.durableClient()],
});