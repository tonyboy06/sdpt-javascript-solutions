let createRoot = document.getElementById("root");

let person = [
  {
    image: "https://scontent.fmnl33-1.fna.fbcdn.net/v/t39.30808-6/469868038_2870715073095565_6974632714560013147_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEc9Mw2dgz6ZR30oTgUIlwNbI6tXp4vTApsjq1eni9MCqhPkJtJT0Dwcvs48PS_R4msqNnYew-jIDnRZ1Z6T_fa&_nc_ohc=Z-eI1elBYDgQ7kNvgH09Sdb&_nc_zt=23&_nc_ht=scontent.fmnl33-1.fna&_nc_gid=AS92Jl_AxA-VAx2Hoxy1zBW&oh=00_AYDXmLhanqLcL41v9OcXNbwX_2xJ-RbRTV0fmypzyd0zEw&oe=67A3E193",
    firstName: "Joey",
    lastName: "Cruz",
    description: "I love coding and watching movies, blending creativity and logic with entertainment and storytelling.",
    age: 14
    
  },
  {
    image: "https://scontent.fmnl33-2.fna.fbcdn.net/v/t39.30808-6/471912994_1492986274894430_4301886001722213696_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFuebBGHwv9L9DosxvUlcCGK50Y6w2SwvwrnRjrDZLC_JIM9WCYMeitUuS15x9bfwaKieqKnAiwIR6mEWRFusCx&_nc_ohc=EaBR4NhpPtQQ7kNvgFcqx80&_nc_zt=23&_nc_ht=scontent.fmnl33-2.fna&_nc_gid=AQOIVNHNbjrQp2YLbPsS9Sj&oh=00_AYBy4Nzhz_lxoX5mLc_enFjySRQt4Ztve5JixFk50oX7Sw&oe=67A3FF74",
    firstName: "Loyd",
    lastName: "Picones",
    description: "I love playing basketball and drawing anime, balancing my passion for sports with creativity and art.",
    age: 14
  },
  {
    image: "https://scontent.fmnl33-4.fna.fbcdn.net/v/t39.30808-6/358730244_587558083556724_6517798133734395613_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGU4Pn60_Kj-4amsvp58HBWEQHRwl16jPkRAdHCXXqM-VQ-w9xwNGEYQ8ZxuWGiLDuHzZMwgLhEuK2aMir6bQyW&_nc_ohc=yO5gIohPU7QQ7kNvgHxibgW&_nc_zt=23&_nc_ht=scontent.fmnl33-4.fna&_nc_gid=AqUIvvxLAFhfiyYHNG886bF&oh=00_AYDPfzXCc-g-LAI4HhosE2_NELHlM8C4kp2ag5ApwFUgmQ&oe=67A3E4EB",
    firstName: "Meg",
    lastName: "Cacanindin",
    description: "I enjoy playing basketball and Mobile Legends, combining my passion for sports and gaming for fun and competition.",
    age: 14
  },
  
];

createRoot.innerHTML = "";

for (let i = 0; i < person.length; i++) {
  const card = `
    <div class="card">
      <img src="${person[i].image}" alt="picture of ${person[i].firstName} ${person[i].lastName}">
      <h2>
        ${person[i].firstName} ${person[i].lastName}
      </h2>
      <p>
        ${person[i].description}
      </p>
      <h3>
        I'm ${person[i].age} years of age
      </h3>
    </div>
  `;

  createRoot.innerHTML += card;
}