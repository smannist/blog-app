import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { mockBlog, mockUser } from "./mock_data/blog";
import userEvent from "@testing-library/user-event";
import Blog from "../components/Blog";

let div;
let user;
let mockAddLike;

describe("Blog component", () => {
  beforeEach(async () => {
    user = userEvent.setup();
    mockAddLike = vi.fn();

    const { container } = render(
      <Router>
        <Blog blog={mockBlog} user={mockUser.username} addLike={mockAddLike} />
      </Router>
    );

    div = container.querySelector(".blog");
  });

  test("by default only title is shown", () => {
    expect(div).toHaveTextContent(mockBlog.title);
    expect(div).not.toHaveTextContent(mockBlog.url);
    expect(div).not.toHaveTextContent(mockBlog.likes);
    expect(div).not.toHaveTextContent(mockBlog.user.username);
  });
});
