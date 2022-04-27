import Card from "./Card";

const FormacionL = () => {
  const topics = [
    {
      title: "Pareja",
      image: 'https://images.pexels.com/photos/1024984/pexels-photo-1024984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      url: "https://www.youtube.com/watch?v=eo_vwauTtyY&list=PL_lm6ARbIBj86lrYM7GgoFyxYhLN5855l&ab_channel=PadreHoowerCajic%C3%A1"
    },
    {
      title: "Religión",
      image: 'https://images.pexels.com/photos/2081128/pexels-photo-2081128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      url: "https://www.youtube.com/watch?v=xQ6R8ffuKlo&list=PL_lm6ARbIBj8fD9iabDEE2acGqZtU5lpZ&ab_channel=PadreHoowerCajic%C3%A1"
    },
    {
      title: "Salud mental",
      image: 'https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      url: "https://www.youtube.com/c/PadreHoowerCajic%C3%A1"
    },
  ];
  return (
    <section className="w-full h-auto md:pb-[75px] mt-10">
      <div className="max-w-screen-lg h-auto mx-auto">
        <h1 className="text-4xl font-bold text-center md:text-left mb-3">
          Formación
        </h1>
        <div className="hidden md:block w-[200px] h-[2px] bg-primary mb-7" />
        <div className="w-full md:flex md:gap-5">
          {topics.map((topic) => (
            <Card key={topic.title} image={topic.image} url={topic.url}>{topic.title}</Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormacionL;
