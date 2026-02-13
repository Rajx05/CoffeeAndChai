function Coffee(props) {
  // const [noOfItems, setNoOfItems] = useState(0);

  // // function to update no of items in cart
  // function updateItems() {
  //   setNoOfItems((n) => n + 1);
  //   const audio = new Audio("nice.mp3");
  //   // audio.play();
  // }

  return (
    <div className="flex flex-col  rounded-3xl bg-mocha p-3 shadow-lg  hover:-translate-y-1 duration-200 min-w-60 ">
      <div className="flex justify-center ">
        <img
          src={props.img}
          alt="Product"
          className="h-36 w-36 m-1 sm:h-60 sm:w-60 rounded-md object-cover"
        />
      </div>
      <h3 className="my-2 text-cream text-center text-3xl font-pacifico">
        {props.name}
      </h3>
      <div className="flex flex-row justify-between my-3 mx-4">
        <p className="text-caramel text-2xl font-semibold text-center">
          ₹{props.price}
        </p>
        <button
          className="flex items-center justify-center gap-2 font-semibold rounded-lg bg-caramel px-2 py-2 text-cream text-sm hover:bg-darkCaramel transition-colors"
          value={props}
          onClick={props.updateCart}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          Add
        </button>
      </div>
    </div>
  );
}

export default Coffee;
