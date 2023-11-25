/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import CardView from "../Components/CardView";

describe("<CardView />", () => {
  test("should display a CardView component", async () => {
    const mockMovie = {
      id: "1",
      title: "Senhor dos Aneis: As duas torres",
      description: "Um filme epico",
      category: "Aventura",
      cover_uri:
        "https://upload.wikimedia.org/wikipedia/pt/thumb/5/59/The_Lord_of_the_Rings_The_Two_Towers.jpg/250px-The_Lord_of_the_Rings_The_Two_Towers.jpg",
      video_uri: "https://www.youtube.com/watch?v=l7eDpuq_V7I",
      release_date: "2004",
    };

    render(<CardView movie={mockMovie} />);
  });
});
