const amqp = require("amqplib");

async function consumeMessages() {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();
  const queue = "hello_queue";

  await channel.assertQueue(queue, { durable: true });

  console.log("🕹 Waiting for messages in:", queue);
  channel.consume(queue, (msg) => {
    if (msg !== null) {
      console.log("📥 Received:", msg.content.toString());
      channel.ack(msg); // acknowledge receipt
    }
  });
}

consumeMessages().catch(console.error);
