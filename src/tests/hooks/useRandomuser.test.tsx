import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../App";

const server = setupServer(
  rest.get(
    "https://randomuser.me/api/",
    (req, res, ctx) => {
      console.log("Je passe par le mock et pas par l'api RandomUser !");
      return res(
        ctx.json({"results":[{"name":{"title":"Ms","first":"Aya","last":"Kleppe"},"location":{"street":{"number":5297,"name":"Libakkfaret"},"city":"Hjørungavåg","state":"Hordaland","country":"Norway","postcode":"0051","coordinates":{"latitude":"50.4382","longitude":"170.0236"},"timezone":{"offset":"+4:30","description":"Kabul"}},"email":"aya.kleppe@example.com","login":{"uuid":"26ba8745-e4d8-4cf7-a671-d01d96042ebc","username":"bigsnake101","password":"honor","salt":"rYIV7Dyz","md5":"a0e770651c5c57f9ebb99d5c04e870b3","sha1":"00c6c3cb4b317746d8da3c5a359b06d347e33206","sha256":"f0d9e27ffa22950c9a505978e018e44808227fa5c7c4ef621f613e5fdc1cce20"},"dob":{"date":"1949-11-26T04:08:54.258Z","age":73},"registered":{"date":"2017-04-18T18:24:43.999Z","age":5},"phone":"50218773","cell":"42766964","id":{"name":"FN","value":"26114946655"},"picture":{"large":"https://randomuser.me/api/portraits/women/59.jpg","medium":"https://randomuser.me/api/portraits/med/women/59.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/59.jpg"},"nat":"NO"}],"info":{"seed":"ba8a89071c97a1df","results":1,"page":1,"version":"1.3"}})
      );
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("load randomuser mock", async () => {
  const { container } = render(<App />);
  await waitFor(() => screen.getByText(/Aya/i));
  expect(container.getElementsByClassName("userName")[0].textContent).toBe("Ms Aya Kleppe");
});
