
export const getTweetsFromApi = async () => {
    const response = await fetch(
        "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet"
      );
      const results = await response.json();

      return results
}

