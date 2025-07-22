import Stripe from "./Stripe";

const Stripes = () => {
  let data = [
    { url: "/cssDesign.svg", number: 48, name: "cssDessignLogo" },
    { url: "/NoCode.svg", number: 2, name: "NoCodeLOg" },
    { url: "/awwards.svg", number: 11, name: "awwardLogo" },
    { url: "/cssDesign.svg", number: 48, name: "cssDessignLogo" },
    { url: "/NoCode.svg", number: 2, name: "NoCodeLOg", },
    { url: "/awwards.svg", number: 11, name: "awwardLogo" },
  ];
  return (
    <div className=" grid  grid-cols-6 place-content-center mt-15 mb-15">
      {data.map((elm, index) => (
        <Stripe val={elm} />
      ))}
    </div>
  );
};

export default Stripes;
