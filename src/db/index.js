import redis from 'redis';

const client = redis.createClient();

client.on('connect', ()=>{
  console.log('Connected to Redis...');
}) 

export default client;