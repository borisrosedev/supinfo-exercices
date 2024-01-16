import { Client } from 'redis-om'

/* pulls the Redis URL from .env */
const url = process.env.REDIS_URL

/* create and open the Redis OM Client */
const client = new Client()
await client.open(url).then(() => {
  console.log('✅ Connecté à Redis');
})

export default client