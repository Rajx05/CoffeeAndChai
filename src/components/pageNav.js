function PageNav({ setter, page }) {
  console.log(setter);
  return (
    <div className="pageNo flex justify-center gap-4 my-4">
      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        prev
      </button>
      <p className="text-white">{page}</p>
      <button
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        onClick={setter}
      >
        next
      </button>
    </div>
  );
}

export default PageNav;
