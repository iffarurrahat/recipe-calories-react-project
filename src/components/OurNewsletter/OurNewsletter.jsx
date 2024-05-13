import Container from "../ui/Container";
import "./OurNewsletter.css";

const OurNewsletter = () => {
  return (
    <div className="newsLatterBgImg h-96 md:h-[500px] mt-20 flex items-center text-white">
      <Container>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Subscribe to our Newsletter
        </h2>
        <p className="md:w-1/2 left-7 my-4">
          Fusce id velit placerat, efficitur libero placerat, sodales ante.
          Curabitur sed erosat orci congue vestibulum.
        </p>
        <button className="bg-green-400 py-3 px-8 rounded-full">
          Subscribe
        </button>
      </Container>
    </div>
  );
};

export default OurNewsletter;
