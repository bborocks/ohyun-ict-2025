//https://crudcrud.com/api/4cfcb8e6a4934d4eb3f28e4b84657416
// allow pasting (웹 콘솔에서 복사 붙여넣기 허용 명령어)
//fetch("https://crudcrud.com/api/4cfcb8e6a4934d4eb3f28e4b84657416/post").then((res)=>{
//    return res.json()
//}).then((json)=>{
//    console.log(json)
//})

// async function init(){}
const post_url =
  "https://crudcrud.com/api/4cfcb8e6a4934d4eb3f28e4b84657416/post";
const init = async () => {
  const res = await fetch(
    "https://crudcrud.com/api/4cfcb8e6a4934d4eb3f28e4b84657416/post"
  );
  const json = await res.json();
  console.log(json);
};

const write = async (data) => {
  const res = await fetch(post_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

const submit = () => {
  const title = document.querySelector("#title").value;
  const content = document.querySelector("#content").value;
  const data = {
    title: title,
    content: content,
  };
  console.log(data);
  write(data);
};

document.querySelector("#post-form").addEventListener("submit", (e) => {
  e.preventDefault();
  submit();
});

init();
