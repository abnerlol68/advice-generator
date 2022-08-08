const get = async (urlApi) => {
  try {
    const response = await (await fetch(urlApi)).json();

    const id = response.slip.id;
    const text = response.slip.advice;

    return { id, text };
  } catch (error) {
    console.error(error);
  }
}

export default { get }
