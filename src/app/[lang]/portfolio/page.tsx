import Future from "@/components/portfolio/future";
import Identity from "@/components/portfolio/identity";
import Past from "@/components/portfolio/past";
import Present from "@/components/portfolio/present";
import Projects from "@/components/portfolio/projects";
import Vision from "@/components/portfolio/vision";

const Portfolio = async () => {
  return (
    <div className="flex flex-col">
      <Vision />
      <Identity />
      <Past />
      <Present />
      <Projects />
      <Future />
    </div>
  );
};

export default Portfolio;
