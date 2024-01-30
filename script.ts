import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  const user = await prisma.user.create({
    data: {
      email: "alice@prisma.io",
      password: "password"
    },
  });
  console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });


//   const axios = require('axios');
// let data = JSON.stringify({
//   "code": "a8bb32d89a464af6286e",
//   "client_id": "9f9456b2c360eeab43ef",
//   "client_secret": "0445850058702db792de167e86b779a0743d7f69",
//   "redirect_url": "https://localhost:3000"
// });

// let config = {
//   method: 'post',
//   maxBodyLength: Infinity,
//   url: 'https://github.com/login/oauth/access_token',
//   headers: { 
//     'Cookie': '_octo=GH1.1.1352312538.1706633792; logged_in=no; _gh_sess=i4VtS8WdWyh1ymlfzNM5jWq8c0Pu9b0hOPzC9pXeCtbSX1q%2Fn22o6Nih%2B2LPe%2BqwmG5wK6QRxwQc8JdqBGCX8y8gVlGdo4X41QgEl9ZEq7RacJ7N0zPZCh0ZfUAC2LrVuoPXgxlMmBGJJa2jVsy%2BX8t4LG5y70onhGa7BC43OUxhI%2B2YZVRqouv7IEQpNZ9D0skRA5p30ckHHY2AxeIZ1PwjEML5gEjDmnEdewYigXkeLcf2MxnX0FJ%2B3EOy0bT9lpFh%2BW0vCN23DBUxbs%2BFhg%3D%3D--i4xkWMdcqcoizsuQ--Viu92SFLrFnbRm%2F3ugA0QA%3D%3D', 
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });
