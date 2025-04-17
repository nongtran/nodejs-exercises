const amqp = require("amqplib");

async function publishMessage() {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();
  const queue = "hello_queue";
  const message = "Hello from Publisher!";

  await channel.assertQueue(queue, { durable: true });
  channel.sendToQueue(queue, Buffer.from(message));
  console.log("✅ Sent:", message);

  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
}

publishMessage().catch(console.error);
