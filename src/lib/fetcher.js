const fetcher = (url) => fetch(url).then(async(r) => {
  const res = await r.json();

  const TOO_MANY_RESULT_ERROR = "Too many results.";
  if (res.Response === "False" && TOO_MANY_RESULT_ERROR) {
    return [];
  }

  return res.Search;
});

export default fetcher;
