import Container from "../ui/Container";
import "./Footer.css";

const Footer = () => {
  return (
    <div className=" mt-10 text-center py-32 footer">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="bg-red-500 w-full h-20">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus unde quisquam tempore incidunt officia, quo
              delectus eveniet voluptatem iure rem voluptas hic debitis,
              reiciendis at sunt maiores harum? Hic, ad!
            </p>
          </div>
          <div className="bg-green-500 w-full h-20"></div>
          <div className="bg-yellow-500 w-full h-20"></div>
          <div className="bg-blue-500 w-full h-20"></div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
