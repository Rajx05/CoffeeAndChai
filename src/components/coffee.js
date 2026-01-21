function Coffee(props) {
  return (
    <div class="rounded-lg bg-white p-4 shadow">
      <img src="/coffee-cup.png" alt="Product" class="h-25 w-30 rounded-md " />
      <h3 class="mt-2 text-center text-lg font-semibold">{props.name}</h3>
      <p class="text-3xl">₹{props.price}</p>
      <button class="mt-2 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
}

export default Coffee;
