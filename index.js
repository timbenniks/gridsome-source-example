const fetch = require("node-fetch");

class HarryPotterSource {
  constructor(api, { endpoint_url }) {
    this.endpoint_url = endpoint_url;

    api.loadSource(async ({ addCollection }) => {
      await this.loadCollections(addCollection);
    });
  }

  async loadCollections(addCollection) {
    const characters = await fetch(this.endpoint_url).then((res) => res.json());

    const collection = addCollection({
      typeName: "Character",
    });

    characters.forEach((character) => {
      collection.addNode(character);
    });
  }
}

module.exports = HarryPotterSource;
