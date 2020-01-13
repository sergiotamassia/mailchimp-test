export const environment = {
  mailchimpInstance: { process.env.MC_INSTANCE || 'xxx'},
  listUniqueId: { process.env.MC_AUDIENCE_ID || 'yyyyyyyyyy'},
  mailchimpApiKey: { process.env.MC_APIKEY || 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz-zzz'}
}
