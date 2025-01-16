import Title from "./title";
import PortfolioItem from "./portfolioItem";
import portfolio from "../data/portfolio.js";

function Portfolio() {
  return (
    <div>
      <Title>Portfolio</Title>
      <div className="flex flex-col md:flex-row items-center justify-left mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.map((project) => (
            <PortfolioItem
              title={project.title}
              link={project.link}
              stack={project.stack}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
