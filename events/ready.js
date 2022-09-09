const client = require("..");
const player = require("../handlers/player");
const { databasing } = require("../handlers/functions");

client.on("ready", async () => {
  console.log(`> ${client.user.username} Online <`.bgGreen);
  client.user.setActivity({
    name: `/help | ${client.guilds.cache.size} Servers`,
    type: "STREAMING",
    url: 'https://discord.com/api/oauth2/authorize?client_id=1017492272260063272&permissions=140428738001&scope=bot%20applications.commands',
  });

  // player
  await client.guilds.fetch();

  await client.guilds.cache.forEach(async (guild) => {
    await databasing(guild.id);
    client.updatemusic(guild);
  });
});
