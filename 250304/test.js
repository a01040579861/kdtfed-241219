const fetchList = async () => {
  const List = document.querySelector("#products");

  try {
    const response = await fetch("https://reqres.in/api/products");
    if (!response.ok) throw new Error("서버 응답 실패");

    const { data: products } = await response.json();

    sessionStorage.setItem("products", JSON.stringify(products));

    view(products);
  } catch (error) {
    console.error("API 요청 오류:", error);

    const savedData = sessionStorage.getItem("products");
    savedData
      ? view(JSON.parse(savedData))
      : (List.innerHTML = "데이터를 불러올 수 없습니다.");
  }
};

const view = (products) => {
  const List = document.querySelector("#products");
  List.innerHTML = products
    .map(
      ({ name, year }) =>
        `<div class="product"><strong>상품명:${name}</strong> | 생산년도:${year}</div>`
    )
    .join("");
};

fetchList();
