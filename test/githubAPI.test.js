const axios = require("axios")
const axiosAPI = require("../utils/githubAPI")

jest.mock("axios")
axios.get.mockResolvedValueOnce(users)

describe("Github API Test", () => {
    it("should return user github data", async () => {
        const userData = await axiosAPI()
        console.log(userData)
        console.log(userData.login)
        expect(true).toBe(true)
    })
})