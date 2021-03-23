import React from "react";
import ReactDOM from "react-dom";
import TestRenderer from "react-test-renderer";
import Messages from "./Messages";

describe("Messages component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Messages />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = TestRenderer.create(
      <Messages name="Messages" unread={4} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the UI as expected with no unreads", () => {
    const tree = TestRenderer.create(
      <Messages name="Messages" unread={0} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
