import { expect} from 'chai';

describe("Post /pet/add - Add a new pet to the store", function() {
    let newPet = {
//   "id": 0,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
//   "status": "available"
};
    it("should add a new pet and return status 200", async function() {
        const responseAddPet = await fetch("https://petstore.swagger.io/v2/pet", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPet)
        });
        expect(responseAddPet.status).to.equal(200);
    });
});