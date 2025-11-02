


const users = [
  { id: 101, name: "sakib" },
  { id: 102, name: "akib" },
  { id: 103, name: "rakib" },
  { id: 104, name: "asib" },
  { id: 105, name: "ibra" },
];
const posts = [
  { id: 1, userId: 101, title: "first post" },
  { id: 2, userId: 103, title: "react" },
  { id: 3, userId: 101, title: "ruby" },
  { id: 4, userId: 105, title: "gsap" },
  { id: 5, userId: 102, title: "html" },
  { id: 5, userId: 104, title: "hello" },
  { id: 5, userId: 105, title: "" },
];


// has table--------------------------------------
const postByUserId = posts.reduce((table, post) => {
  const { userId } = post;
  if (!table[userId]) {
    table[userId] = [];
  }
  table[userId].push(post);
  return table;
}, {});


const postWithId=users.map((user)=>{
    return{
     ...user,
   posts:postByUserId[user.id] || [],
    };

})