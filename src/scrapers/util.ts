import { CheerioAPI } from 'cheerio'
const idGenerator = function (id: string) {
  // Takes an id and returns a 16 character string of 0x000... + id
  try {
    if (!id.match(/^[0-9]+$/)) return '0'
    return id.padStart(15, '0')
  } catch (err) {
    console.log(id)
    return 'n/a'
  }
}
// Todo - Automate this using the official api
const AgentArray = [
  'astra',
  'breach',
  'brimstone',
  'chamber',
  'cypher',
  'deadlock',
  'fade',
  'gekko',
  'harbor',
  'iso',
  'jett',
  'kayo',
  'killjoy',
  'neon',
  'omen',
  'phoenix',
  'raze',
  'reyna',
  'sage',
  'skye',
  'sova',
  'viper',
  'yoru',
]
export { idGenerator, AgentArray }
