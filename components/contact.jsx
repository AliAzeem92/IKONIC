import WorkerReviews from "./workerReviews";
import AnimatedContactIcons from "./animatedContactIcons";
import { CodeDisplay } from "./codeDisplay";
import Carousel from "./Carousel";

const sampleCode = `class Project {
  constructor(name, status) {
    this.name = name;
    this.status = status;
  }

  progress() {
    console.log(\`Project: \${this.name} is currently \${this.status}.\`);
  }
}

const ikoniiProject = new Project("Next-Gen App", "in development");

// IKONII in action
ikoniiProject.progress();
ikoniiProject.complete();`;

const Contact = () => {
  return (
    <div className="sm:pt-[133px] py-[60px] ">
      <div>
        <div className="flex flex-col items-center text-center sm:gap-[40px] gap-[26px] ">
          <h1 className="sm:text-5xl text-2xl 3xl:text-7xl font-semibold px-5 ">
            Add and Onboard Skilled
            <br />
            Talent to Your Team Seamlessly
          </h1>
          <p className="sm:text-xl text-lg 3xl:text-3xl px-3 ">
            We help you identify, onboard, and integrate skilled professionals
            to
            <br />
            meet your project deadlines on time.
          </p>
        </div>
        <div className="px-[7%] py-[2%] ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center ">
            <AnimatedContactIcons />
            <Carousel />
            <CodeDisplay code={sampleCode} />
          </div>
        </div>
        <div className="flex justify-center mt-[3%] ">
          <WorkerReviews />
        </div>
      </div>
    </div>
  );
};

export default Contact;
